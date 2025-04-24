import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583195170811-41d151445677?q=80&w=2070')] bg-cover bg-center opacity-10 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Become a Hero.<br />Clean Your Community.
            </h1>
            <p className="text-lg text-green-700 mb-8">
              Join thousands of volunteers making a difference by reporting and
              cleaning up waste in their neighborhoods. Earn rewards while helping
              your community shine.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/report">
                <Button size="lg" className="bg-green-500 hover:bg-green-600">
                  <Camera className="mr-2 h-5 w-5" /> Report Waste
                </Button>
              </Link>
              <Link to="/map">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50"
                >
                  <MapPin className="mr-2 h-5 w-5" /> View Map
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-green-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <img
                src="/hack1.jpg"
                alt="Volunteers celebrating after cleanup"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-green-500" size={16} />
                    <span className="text-sm text-green-700">Central Park</span>
                  </div>
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Complete
                  </span>
                </div>
                <h3 className="font-semibold mt-2 text-green-800">
                  Weekend Community Cleanup
                </h3>
                <p className="text-sm text-green-600 mt-1">
                  15 volunteers | 23 bags collected
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-green-100 absolute top-24 -right-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300 hidden md:block">
              <img
                src="/hack2.jpg"  // <-- ADDED HERE
                alt="Clean beach"
                className="w-48 h-32 object-cover"
              />
              <div className="p-2">
                <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  In Progress
                </span>
                <h3 className="font-semibold text-sm mt-1 text-blue-800">
                  Beach Cleanup Day
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-green-800 mb-8">
            Trusted by communities worldwide
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-lg font-bold text-gray-500">CityClean</div>
            <div className="text-lg font-bold text-gray-500">
              GreenEarth Foundation
            </div>
            <div className="text-lg font-bold text-gray-500">EcoAlliance</div>
            <div className="text-lg font-bold text-gray-500">OceanGuardians</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
