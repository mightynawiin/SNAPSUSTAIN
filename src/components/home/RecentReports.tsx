
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  ArrowRight, 
  ThumbsUp,
  Calendar
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data - in a real app this would come from an API
const mockReports = [
  {
    id: 1,
    title: "Riverside Trash Accumulation",
    location: "Green River Park",
    date: "2 days ago",
    image: "https://images.unsplash.com/photo-1604187350603-21be3f41c490?q=80&w=2940",
    status: "reported",
    likes: 12,
    author: "EcoWarrior"
  },
  {
    id: 2,
    title: "Beach Cleanup Success",
    location: "Sunny Shores Beach",
    date: "3 days ago",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=2864",
    status: "cleaned",
    likes: 43,
    author: "OceanGuardian"
  },
  {
    id: 3,
    title: "Park Litter Problem",
    location: "Central Community Park",
    date: "1 week ago",
    image: "https://images.unsplash.com/photo-1613212514691-3f1efa71ccb4?q=80&w=2787",
    status: "in progress",
    likes: 8,
    author: "GreenThumb"
  },
  {
    id: 4,
    title: "Forest Trail Debris",
    location: "Pine Ridge Hiking Trail",
    date: "5 days ago",
    image: "https://images.unsplash.com/photo-1611573249630-2062f4119c33?q=80&w=2944",
    status: "reported",
    likes: 16,
    author: "TrailBlazer"
  },
];

const statusColors = {
  reported: "bg-yellow-100 text-yellow-800",
  "in progress": "bg-blue-100 text-blue-800",
  cleaned: "bg-green-100 text-green-800",
};

export function RecentReports() {
  const [reports, setReports] = useState(mockReports);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-green-800">Recent Reports</h2>
          <Link to="/map" className="flex items-center text-green-600 hover:text-green-500">
            View all reports <ArrowRight className="ml-1" size={18} />
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reports.map((report) => (
              <CarouselItem key={report.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white border border-green-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={report.image} 
                      alt={report.title} 
                      className="w-full h-full object-cover"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 ${statusColors[report.status as keyof typeof statusColors]}`}
                    >
                      {report.status}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-sm text-green-600 mb-2">
                      <MapPin size={14} className="mr-1" />
                      {report.location}
                    </div>
                    <h3 className="font-semibold text-green-800 mb-2">{report.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-green-600">
                        <Calendar size={14} className="mr-1" />
                        {report.date}
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <ThumbsUp size={14} className="mr-1" />
                        {report.likes}
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-green-100 text-sm text-green-700">
                      Posted by: {report.author}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="mt-10 text-center">
          <Link to="/report">
            <Button className="bg-green-500 hover:bg-green-600">
              Report Waste In Your Area
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
