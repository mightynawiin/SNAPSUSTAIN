DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

DROP TABLE IF EXISTS reports;
CREATE TABLE reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    description TEXT NOT NULL,
    images TEXT,
    status TEXT DEFAULT 'reported',
    userId INTEGER NOT NULL,
    createdAt TEXT NOT NULL,
    wasteType TEXT DEFAULT 'general',
    FOREIGN KEY (userId) REFERENCES users (id)
);

DROP TABLE IF EXISTS events;
CREATE TABLE events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    description TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    organizerId INTEGER NOT NULL,
    attendees TEXT,
    status TEXT DEFAULT 'upcoming',
    FOREIGN KEY (organizerId) REFERENCES users (id)
);