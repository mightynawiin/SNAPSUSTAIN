
import { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

// Mock testimonials data - would come from API in real app
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Environmental Activist",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2670",
    content: "Snap2Sustain has made it incredibly easy to organize cleanups in our local community. The reward system keeps everyone motivated!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Community Leader",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574",
    content: "The app has transformed how we track and manage waste in our neighborhood. It's intuitive and the impact metrics are very helpful.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjali Patel",
    role: "School Teacher",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574",
    content: "I use Snap2Sustain with my students for environmental awareness projects. They love earning badges while making a real difference.",
    rating: 4,
  },
];

export function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">What Our Heroes Say</h2>
          <p className="text-lg text-green-700">
            Join thousands of community members who are making a difference in their neighborhoods.
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="bg-white border border-green-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">{testimonial.name}</h3>
                      <p className="text-sm text-green-600">{testimonial.role}, {testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16}
                        fill={i < testimonial.rating ? "#eab308" : "none"} 
                        stroke={i < testimonial.rating ? "#eab308" : "#d1d5db"}
                        className="mr-1" 
                      />
                    ))}
                  </div>
                  
                  <Quote className="text-green-300 mb-3" size={24} />
                  
                  <p className="text-green-700 flex-grow">
                    {testimonial.content}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
