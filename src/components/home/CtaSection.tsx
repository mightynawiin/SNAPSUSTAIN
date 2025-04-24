import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Users, ChevronRight } from "lucide-react";

export function CtaSection() {
  return (
    <section
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/hack1.png')" }} // Make sure this image exists in /public
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Ready to Make Your Community Cleaner?
          </h2>
          <p className="text-lg text-green-700 mb-8">
            Join thousands of heroes already making a difference. Report waste, organize cleanups, and earn rewards while creating a cleaner environment for everyone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 w-full sm:w-auto">
                <Users className="mr-2 h-5 w-5" /> Join the Community
              </Button>
            </Link>
            <Link to="/report">
              <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 w-full sm:w-auto">
                <Camera className="mr-2 h-5 w-5" /> Report Your First Waste
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg border border-green-100 shadow-sm">
              <h3 className="font-semibold text-green-800 mb-2">For Individuals</h3>
              <p className="text-green-700 text-sm mb-4">
                Report waste, join cleanups, and earn rewards while making your neighborhood cleaner.
              </p>
              <Link to="/about" className="inline-flex items-center text-green-600 hover:text-green-500 text-sm font-medium">
                Learn more <ChevronRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-green-100 shadow-sm">
              <h3 className="font-semibold text-green-800 mb-2">For Communities</h3>
              <p className="text-green-700 text-sm mb-4">
                Organize group cleanups, track community impact, and build stronger neighborhoods.
              </p>
              <Link to="/community" className="inline-flex items-center text-green-600 hover:text-green-500 text-sm font-medium">
                Learn more <ChevronRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-green-100 shadow-sm">
              <h3 className="font-semibold text-green-800 mb-2">For Municipalities</h3>
              <p className="text-green-700 text-sm mb-4">
                Get real-time waste reports, coordinate cleanup efforts, and engage with citizens.
              </p>
              <Link to="/municipality" className="inline-flex items-center text-green-600 hover:text-green-500 text-sm font-medium">
                Learn more <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
