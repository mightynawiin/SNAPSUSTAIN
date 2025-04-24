
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReportForm } from "@/components/report/ReportForm";

const ReportPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 bg-green-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Report Waste</h1>
          <p className="text-green-700 mb-8">
            Help keep your community clean by reporting waste in your area.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ReportForm />
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-green-100 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-green-800 mb-4">Reporting Tips</h2>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span className="text-green-700">Include clear photos that show the scale and type of waste</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span className="text-green-700">Be as specific as possible about the location</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span className="text-green-700">Note any potential hazards like broken glass or sharp objects</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span className="text-green-700">Estimate the amount of waste if possible</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-green-100 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-green-800 mb-4">Safety Guidelines</h2>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-yellow-500 font-bold">⚠️</span>
                    <span className="text-green-700">Never touch hazardous or medical waste</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-500 font-bold">⚠️</span>
                    <span className="text-green-700">Stay a safe distance from traffic when reporting</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-500 font-bold">⚠️</span>
                    <span className="text-green-700">Be aware of your surroundings at all times</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-500 font-bold">⚠️</span>
                    <span className="text-green-700">If you see illegal dumping in progress, contact authorities</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-100 border border-green-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-green-800 mb-2">Why Your Reports Matter</h2>
                <p className="text-green-700 mb-4">
                  Every report helps create cleaner, healthier communities. Your actions make a real difference!
                </p>
                <div className="flex items-center justify-between text-green-800">
                  <div className="text-center">
                    <div className="font-bold text-2xl">12,450</div>
                    <div className="text-sm">Reports this month</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl">78%</div>
                    <div className="text-sm">Cleanup rate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl">3,240</div>
                    <div className="text-sm">Active heroes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportPage;
