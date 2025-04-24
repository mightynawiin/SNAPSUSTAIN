
import { useState } from "react";
import { 
  Search, 
  Filter, 
  Map as MapIcon, 
  List, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  MapPin
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Mock data - in a real app this would come from an API
const mockReports = [
  {
    id: 1,
    title: "Riverside Trash Accumulation",
    location: "Green River Park, 123 Park Ave",
    date: "2 days ago",
    image: "https://images.unsplash.com/photo-1604187350603-21be3f41c490?q=80&w=2940",
    status: "reported",
    likes: 12,
    author: "EcoWarrior",
    lat: 40.7128,
    lng: -74.006,
    wasteType: "plastic"
  },
  {
    id: 2,
    title: "Beach Cleanup Success",
    location: "Sunny Shores Beach, Ocean Drive",
    date: "3 days ago",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=2864",
    status: "cleaned",
    likes: 43,
    author: "OceanGuardian",
    lat: 40.7228,
    lng: -73.996,
    wasteType: "general"
  },
  {
    id: 3,
    title: "Park Litter Problem",
    location: "Central Community Park, Downtown",
    date: "1 week ago",
    image: "https://images.unsplash.com/photo-1613212514691-3f1efa71ccb4?q=80&w=2787",
    status: "in progress",
    likes: 8,
    author: "GreenThumb",
    lat: 40.7328,
    lng: -74.016,
    wasteType: "organic"
  },
  {
    id: 4,
    title: "Forest Trail Debris",
    location: "Pine Ridge Hiking Trail",
    date: "5 days ago",
    image: "https://images.unsplash.com/photo-1611573249630-2062f4119c33?q=80&w=2944",
    status: "reported",
    likes: 16,
    author: "TrailBlazer",
    lat: 40.7028,
    lng: -74.026,
    wasteType: "hazardous"
  },
];

const statusColors = {
  reported: "bg-yellow-100 text-yellow-800",
  "in progress": "bg-blue-100 text-blue-800",
  cleaned: "bg-green-100 text-green-800",
};

const statusIcons = {
  reported: <AlertTriangle size={14} />,
  "in progress": <Clock size={14} />,
  cleaned: <CheckCircle2 size={14} />,
};

export function MapView() {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [reports] = useState(mockReports);

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-green-100 shadow-sm">
      <div className="p-4 border-b border-green-100">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant={viewMode === "map" ? "default" : "outline"} 
              size="sm"
              onClick={() => setViewMode("map")}
            >
              <MapIcon size={16} className="mr-1" /> Map
            </Button>
            <Button 
              variant={viewMode === "list" ? "default" : "outline"} 
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List size={16} className="mr-1" /> List
            </Button>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-green-500" />
              <Input placeholder="Search locations..." className="pl-8" />
            </div>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter size={16} className="mr-1" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Waste Reports</SheetTitle>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Status</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer bg-yellow-100 hover:bg-yellow-200 text-yellow-800">
                      Reported
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800">
                      In Progress
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer bg-green-100 hover:bg-green-200 text-green-800">
                      Cleaned
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Waste Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      General Trash
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      Plastic
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      Electronic
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      Hazardous
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Date Reported</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      Today
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      This Week
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      This Month
                    </Badge>
                  </div>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 mt-4">
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="relative">
        {viewMode === "map" ? (
          <div className="h-[600px] bg-gray-100 relative">
            {/* In a real app, this would be integrated with Google Maps or a similar service */}
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-74.006,40.7128,12,0,0/1200x600?access_token=pk.placeholder')] bg-cover bg-center"></div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
              <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <p className="text-center text-green-800">
                    In a real app, this would show an interactive map with markers for waste reports.
                    Google Maps or Mapbox would be integrated here.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Mock map pins */}
            {reports.map(report => (
              <div 
                key={report.id}
                className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `${(Math.random() * 60) + 20}%`, 
                  left: `${(Math.random() * 60) + 20}%`
                }}
              >
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center
                  ${report.status === 'reported' ? 'bg-yellow-500' : 
                    report.status === 'in progress' ? 'bg-blue-500' : 'bg-green-500'}
                `}>
                  <MapIcon size={14} className="text-white" />
                </div>
                <div className="w-2 h-2 bg-white rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-h-[600px] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {reports.map((report) => (
                <div 
                  key={report.id}
                  className="bg-white border border-green-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40">
                    <img 
                      src={report.image} 
                      alt={report.title} 
                      className="w-full h-full object-cover"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 flex items-center gap-1 ${statusColors[report.status as keyof typeof statusColors]}`}
                    >
                      {statusIcons[report.status as keyof typeof statusIcons]}
                      {report.status}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-green-800 mb-1">{report.title}</h3>
                    <div className="flex items-center text-sm text-green-600 mb-2">
                      <MapPin size={14} className="mr-1 flex-shrink-0" />
                      <span className="truncate">{report.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-700">{report.date}</span>
                      <Badge variant="outline" className="text-xs">{report.wasteType}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
