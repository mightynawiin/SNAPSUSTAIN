from flask import Flask, request, jsonify, g
from flask_cors import CORS
import os
import json
from datetime import datetime
import sqlite3

app = Flask(__name__)
CORS(app)

DATABASE = 'site.db'  # Name of the SQLite database file

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

def execute_db(query, args=()):
    conn = get_db()
    cur = conn.cursor()
    cur.execute(query, args)
    conn.commit()
    cur.close()

def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

@app.cli.command('initdb')
def initdb_command():
    """Initializes the database."""
    init_db()
    print('Initialized the database.')

# User routes
@app.route('/api/users', methods=['GET'])
def get_users():
    users = query_db('SELECT * FROM users')
    return jsonify([dict(row) for row in users])

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = query_db('SELECT * FROM users WHERE id = ?', [user_id], one=True)
    if user:
        return jsonify(dict(user))
    return jsonify({"error": "User not found"}), 404

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.json
    name = data.get("name", "")
    email = data.get("email", "")
    error = None
    if not name:
        error = "Name is required."
    elif not email:
        error = "Email is required."
    elif query_db('SELECT id FROM users WHERE email = ?', [email], one=True) is not None:
        error = f"User with email {email} already exists."

    if error is not None:
        return jsonify({"error": error}), 400

    execute_db('INSERT INTO users (name, email) VALUES (?, ?)', [name, email])
    user = query_db('SELECT * FROM users WHERE email = ?', [email], one=True)
    return jsonify(dict(user)), 201

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    # In a real app, you'd fetch the user by email and verify the password
    user = query_db('SELECT * FROM users WHERE email = ?', [email], one=True)
    if user:
        # Replace this with actual password verification
        return jsonify({"user": dict(user), "token": "mock_jwt_token"})
    return jsonify({"error": "Invalid credentials"}), 401

# Report routes
@app.route('/api/reports', methods=['GET'])
def get_reports():
    reports = query_db('SELECT * FROM reports')
    return jsonify([dict(row) for row in reports])

@app.route('/api/reports/<int:report_id>', methods=['GET'])
def get_report(report_id):
    report = query_db('SELECT * FROM reports WHERE id = ?', [report_id], one=True)
    if report:
        return jsonify(dict(report))
    return jsonify({"error": "Report not found"}), 404

@app.route('/api/reports', methods=['POST'])
def create_report():
    data = request.json
    title = data.get("title", "")
    location = json.dumps(data.get("location", {}))
    description = data.get("description", "")
    images = json.dumps(data.get("images", []))
    userId = data.get("userId")
    createdAt = datetime.now().isoformat()
    wasteType = data.get("wasteType", "general")

    if not title or not description or not userId:
        return jsonify({"error": "Title, description, and userId are required."}), 400

    execute_db(
        'INSERT INTO reports (title, location, description, images, userId, createdAt, wasteType) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [title, location, description, images, userId, createdAt, wasteType]
    )
    report = query_db('SELECT * FROM reports ORDER BY id DESC LIMIT 1', one=True)
    return jsonify(dict(report)), 201

# Event routes
@app.route('/api/events', methods=['GET'])
def get_events():
    events = query_db('SELECT * FROM events')
    return jsonify([dict(row) for row in events])

@app.route('/api/events/<int:event_id>', methods=['GET'])
def get_event(event_id):
    event = query_db('SELECT * FROM events WHERE id = ?', [event_id], one=True)
    if event:
        return jsonify(dict(event))
    return jsonify({"error": "Event not found"}), 404

@app.route('/api/events', methods=['POST'])
def create_event():
    data = request.json
    title = data.get("title", "")
    location = json.dumps(data.get("location", {}))
    description = data.get("description", "")
    date = data.get("date", "")
    time = data.get("time", "")
    organizerId = data.get("organizerId")
    attendees = json.dumps([organizerId] if organizerId else [])
    status = "upcoming"

    if not title or not description or not date or not time or not organizerId:
        return jsonify({"error": "All event fields are required."}), 400

    execute_db(
        'INSERT INTO events (title, location, description, date, time, organizerId, attendees, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [title, location, description, date, time, organizerId, attendees, status]
    )
    event = query_db('SELECT * FROM events ORDER BY id DESC LIMIT 1', one=True)
    return jsonify(dict(event)), 201

@app.route('/api/events/<int:event_id>/attend', methods=['POST'])
def attend_event(event_id):
    data = request.json
    userId = data.get("userId")
    event = query_db('SELECT attendees FROM events WHERE id = ?', [event_id], one=True)
    if event and event['attendees']:
        attendees_list = json.loads(event['attendees'])
        if userId not in attendees_list:
            attendees_list.append(userId)
            execute_db('UPDATE events SET attendees = ? WHERE id = ?', [json.dumps(attendees_list), event_id])
            return jsonify(query_db('SELECT * FROM events WHERE id = ?', [event_id], one=True))
        return jsonify({"message": "User already attending event."}), 200
    elif event:
        execute_db('UPDATE events SET attendees = ? WHERE id = ?', [json.dumps([userId]), event_id])
        return jsonify(query_db('SELECT * FROM events WHERE id = ?', [event_id], one=True))
    return jsonify({"error": "Event not found"}), 404

# Run the server
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000))) 