
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Gift, ArrowRight } from "lucide-react";

export function RewardsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-earth-500 to-earth-600 text-white">
      <div className="container mx-auto px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Award size={300} />
        </div>
        
        <div className="max-w-3xl relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="text-yellow-300" size={28} />
            <h2 className="text-3xl font-bold">Get Rewarded for Your Good Deeds</h2>
          </div>
          
          <p className="text-lg mb-6 text-yellow-50">
            Earn points for every report and cleanup. Redeem them for eco-friendly rewards, 
            gift cards, and exclusive badges to showcase your environmental impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="font-bold text-yellow-300 text-xl mb-1">500+</div>
              <div className="text-sm">Partner brands offering rewards</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="font-bold text-yellow-300 text-xl mb-1">20 points</div>
              <div className="text-sm">Average reward per waste report</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="font-bold text-yellow-300 text-xl mb-1">50 points</div>
              <div className="text-sm">Average reward for cleanup participation</div>
            </div>
          </div>
          
          <Link to="/rewards">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Explore Rewards <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
