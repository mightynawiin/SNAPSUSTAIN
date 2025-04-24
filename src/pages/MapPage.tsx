
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapView } from "@/components/map/MapView";

const MapPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 bg-green-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Waste Map</h1>
          <p className="text-green-700 mb-8">
            Explore reported waste in your area and find cleanup opportunities.
          </p>
          
          <MapView />
          
          <div className="mt-8 bg-white border border-green-100 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Map Legend</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-green-700">Reported Waste</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-green-700">Cleanup In Progress</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-green-700">Cleaned Area</span>
              </div>
            </div>
            
            <div className="mt-6 border-t border-green-100 pt-4">
              <p className="text-sm text-green-700">
                <strong>Note:</strong> In the actual application, this map would use the Google Maps API to display real-time 
                waste reports and their statuses. Users would be able to click on markers to view details and 
                interact with the reports.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MapPage;
