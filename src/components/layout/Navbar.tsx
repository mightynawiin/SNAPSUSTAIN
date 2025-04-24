
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Award, Users, LogIn, Menu, Home } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <>
      <Link to="/" className="flex items-center gap-1 text-green-700 hover:text-green-500 transition-colors hover:scale-105 transform duration-200">
        <Home size={18} />
        <span>Home</span>
      </Link>
      <Link to="/map" className="flex items-center gap-1 text-green-700 hover:text-green-500 transition-colors hover:scale-105 transform duration-200">
        <MapPin size={18} />
        <span>Map</span>
      </Link>
      <Link to="/report" className="flex items-center gap-1 text-green-700 hover:text-green-500 transition-colors hover:scale-105 transform duration-200">
        <Camera size={18} />
        <span>Report</span>
      </Link>
      <Link to="/rewards" className="flex items-center gap-1 text-green-700 hover:text-green-500 transition-colors hover:scale-105 transform duration-200">
        <Award size={18} />
        <span>Rewards</span>
      </Link>
      <Link to="/community" className="flex items-center gap-1 text-green-700 hover:text-green-500 transition-colors hover:scale-105 transform duration-200">
        <Users size={18} />
        <span>Community</span>
      </Link>
    </>
  );

  return (
    <nav className="w-full py-4 border-b border-green-100 bg-white shadow-sm animate-fade-in">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 hover:scale-105 transform duration-200">
          <div className="bg-green-500 text-white p-1 rounded-full">
            <Camera size={24} />
          </div>
          <h1 className="text-xl font-bold text-green-700">Snap2Sustain</h1>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:scale-105 transform duration-200">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10 animate-fade-in">
                <NavLinks />
                <Link to="/login">
                  <Button className="w-full hover:scale-105 transform duration-200">
                    <LogIn className="mr-2 h-4 w-4" /> Sign In
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-6">
            <NavLinks />
            <Link to="/login">
              <Button className="hover:scale-105 transform duration-200">
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
