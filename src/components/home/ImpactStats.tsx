
import { Trash2, Users, MapPin, Award } from "lucide-react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";

export function ImpactStats() {
  const stats = [
    {
      icon: <Trash2 className="h-8 w-8 text-green-500" />,
      value: "25,430",
      label: "Waste Reports",
      description: "Collected & properly disposed",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      value: "15,200",
      label: "Active Heroes",
      description: "Making a difference daily",
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-500" />,
      value: "1,280",
      label: "Areas Cleaned",
      description: "Across 35 countries",
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      value: "42,750",
      label: "Rewards Earned",
      description: "By our community heroes",
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Our Global Impact</h2>
          <p className="text-lg text-green-700">
            Together we're creating cleaner, healthier communities around the world. Every action counts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-green-100 bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-green-800 text-center">{stat.value}</h3>
                <div className="text-lg font-semibold text-green-600 text-center mb-2">{stat.label}</div>
                <p className="text-green-700 text-center text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-green-600 italic">
            "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has."
          </p>
          <p className="text-green-700 mt-2">— Margaret Mead</p>
        </div>
      </div>
    </section>
  );
}
