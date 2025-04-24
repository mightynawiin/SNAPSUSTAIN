
import { Camera, MapPin, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  const steps = [
    {
      icon: <Camera className="h-8 w-8 text-green-500" />,
      title: "Report Waste",
      description: "Take photos of waste in your area and report its location.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-500" />,
      title: "Tag Location",
      description: "Pin the exact location to help others find and clean it up.",
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "Clean Up",
      description: "Organize or join cleanup events in your community.",
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      title: "Earn Rewards",
      description: "Get points and badges for your environmental contributions.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">How It Works</h2>
          <p className="text-lg text-green-700">
            Making a difference in your community is easier than you think. Follow these simple steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="bg-green-50 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{step.title}</h3>
                <p className="text-green-700">{step.description}</p>
                <div className="text-xs font-medium text-green-500 mt-4">Step {index + 1}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
