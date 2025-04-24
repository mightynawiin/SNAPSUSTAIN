import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter, Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-green-50 border-t border-green-100 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-green-500 text-white p-1 rounded-full">
                <Camera size={20} />
              </div>
              <h2 className="text-lg font-bold text-green-700">Snap2Sustain</h2>
            </Link>
            <p className="text-green-700 opacity-80 mb-4">
              Join our community of heroes and make a difference in your neighborhood.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-green-600 hover:text-green-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-green-600 hover:text-green-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-green-600 hover:text-green-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-green-800 mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-green-700 hover:text-green-500">Our Mission</Link></li>
              <li><Link to="/about" className="text-green-700 hover:text-green-500">How It Works</Link></li>
              <li><Link to="/about" className="text-green-700 hover:text-green-500">Impact</Link></li>
              <li><Link to="/about" className="text-green-700 hover:text-green-500">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-800 mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/report" className="text-green-700 hover:text-green-500">Report Waste</Link></li>
              <li><Link to="/community" className="text-green-700 hover:text-green-500">Join Cleanup Events</Link></li>
              <li><Link to="/rewards" className="text-green-700 hover:text-green-500">Rewards Program</Link></li>
              <li><Link to="/community" className="text-green-700 hover:text-green-500">Community Guidelines</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-800 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-green-700">
                <Mail size={16} />
                <span>snap2sustain@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-green-700">
                <Phone size={16} />
                <span>+91 91822 00891</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-200 mt-8 pt-6 text-center text-green-600 text-sm">
          <p>© {new Date().getFullYear()} Snap2Sustain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
