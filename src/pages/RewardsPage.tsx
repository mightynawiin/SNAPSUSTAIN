
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Badge,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/index";
import { 
  Award, 
  Gift, 
  Coffee,
  ShoppingBag,
  Ticket, 
  Check, 
  Leaf,
  Droplet,
  Mountain,
  Recycle,
  UserCheck,
  Users,
  ThumbsUp
} from "lucide-react";

// Mock rewards data
const rewards = [
  {
    id: 1,
    title: "Local Coffee Shop Gift Card",
    points: 500,
    image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2069",
    partner: "Green Bean Coffee",
    description: "Enjoy a free coffee at any Green Bean Coffee location.",
    category: "gift-cards",
    icon: <Coffee className="h-8 w-8" />
  },
  {
    id: 2,
    title: "Eco-Friendly Water Bottle",
    points: 750,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=2787",
    partner: "EcoLife Products",
    description: "A reusable stainless steel water bottle to reduce plastic waste.",
    category: "merchandise",
    icon: <ShoppingBag className="h-8 w-8" />
  },
  {
    id: 3,
    title: "Movie Theater Tickets",
    points: 1000,
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070",
    partner: "City Cinemas",
    description: "Two tickets to any movie at City Cinemas.",
    category: "gift-cards",
    icon: <Ticket className="h-8 w-8" />
  },
  {
    id: 4,
    title: "Plant a Tree in Your Name",
    points: 300,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2874",
    partner: "Tree Guardians Foundation",
    description: "We'll plant a tree in your name and send you a certificate.",
    category: "donations",
    icon: <Leaf className="h-8 w-8" />
  },
  {
    id: 5,
    title: "Eco-Friendly Tote Bag",
    points: 400,
    image: "https://images.unsplash.com/photo-1597831606933-0b5a85fa3491?q=80&w=2080",
    partner: "Green Goods",
    description: "Canvas tote bag made from recycled materials.",
    category: "merchandise",
    icon: <ShoppingBag className="h-8 w-8" />
  },
  {
    id: 6,
    title: "Local Restaurant Gift Card",
    points: 800,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    partner: "Farm to Table Bistro",
    description: "$25 gift card to Farm to Table Bistro, a sustainable local restaurant.",
    category: "gift-cards",
    icon: <Gift className="h-8 w-8" />
  },
];

// Mock badges data
const badges = [
  {
    id: 1,
    title: "First Cleanup",
    description: "Completed your first cleanup event",
    icon: <Check className="h-6 w-6 text-white" />,
    color: "bg-green-500",
    earned: true,
    date: "March 15, 2025",
  },
  {
    id: 2,
    title: "Waste Warrior",
    description: "Reported 10 waste locations",
    icon: <MapPin className="h-6 w-6 text-white" />,
    color: "bg-yellow-500",
    earned: true,
    date: "April 2, 2025",
  },
  {
    id: 3,
    title: "Community Leader",
    description: "Organized your first cleanup event",
    icon: <UserCheck className="h-6 w-6 text-white" />,
    color: "bg-blue-500",
    earned: false,
    requirement: "Organize a community cleanup event",
  },
  {
    id: 4,
    title: "Nature Protector",
    description: "Cleaned up a natural area",
    icon: <Leaf className="h-6 w-6 text-white" />,
    color: "bg-green-600",
    earned: true,
    date: "March 28, 2025",
  },
  {
    id: 5,
    title: "Water Guardian",
    description: "Cleaned up a waterway or beach",
    icon: <Droplet className="h-6 w-6 text-white" />,
    color: "bg-blue-600",
    earned: false,
    requirement: "Participate in a waterway or beach cleanup",
  },
  {
    id: 6,
    title: "Trail Blazer",
    description: "Cleaned up a hiking trail",
    icon: <Mountain className="h-6 w-6 text-white" />,
    color: "bg-earth-500",
    earned: false,
    requirement: "Participate in a trail cleanup event",
  },
  {
    id: 7,
    title: "Recycling Champion",
    description: "Properly sorted and recycled waste",
    icon: <Recycle className="h-6 w-6 text-white" />,
    color: "bg-green-400",
    earned: true,
    date: "April 10, 2025",
  },
  {
    id: 8,
    title: "Cleanup Streak",
    description: "Participated in 5 consecutive weekly cleanups",
    icon: <Award className="h-6 w-6 text-white" />,
    color: "bg-purple-500",
    earned: false,
    requirement: "Join 5 weekly cleanups in a row",
  },
];

// Mock user data
const userData = {
  name: "Alex Taylor",
  points: 850,
  rank: "Cleanup Captain",
  totalCleanups: 12,
  totalReports: 24,
  nextRank: {
    name: "Waste Warrior",
    pointsNeeded: 1000,
  }
};

// Mock certificates
const certificates = [
  {
    id: 1,
    title: "Cleanup Hero Certification",
    description: "For outstanding contribution to community cleanliness",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1606567595334-d8a0518852f2?q=80&w=2874",
  },
  {
    id: 2,
    title: "Environmental Steward",
    description: "For dedication to environmental protection",
    date: "March 22, 2025",
    image: "https://images.unsplash.com/photo-1611894954458-3707458f3c56?q=80&w=2870",
  }
];

function MapPin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

const RewardsPage = () => {
  const [selectedReward, setSelectedReward] = useState<null | typeof rewards[0]>(null);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 bg-green-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Rewards & Recognition</h1>
          <p className="text-green-700 mb-8">
            Earn rewards and recognition for your environmental contributions.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="rewards" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="rewards" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                    Rewards
                  </TabsTrigger>
                  <TabsTrigger value="badges" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                    Badges
                  </TabsTrigger>
                  <TabsTrigger value="certificates" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                    Certificates
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="rewards">
                  <div className="bg-white border border-green-100 rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-semibold text-green-800 mb-4">Available Rewards</h2>
                    <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                      <Button 
                        variant="outline" 
                        className="border-green-200 hover:bg-green-50 whitespace-nowrap"
                      >
                        All Rewards
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-green-200 hover:bg-green-50 whitespace-nowrap"
                      >
                        <Gift className="mr-2 h-4 w-4" /> Gift Cards
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-green-200 hover:bg-green-50 whitespace-nowrap"
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" /> Merchandise
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-green-200 hover:bg-green-50 whitespace-nowrap"
                      >
                        <Leaf className="mr-2 h-4 w-4" /> Donations
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {rewards.map((reward) => (
                        <Dialog key={reward.id}>
                          <DialogTrigger asChild>
                            <Card 
                              key={reward.id} 
                              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow border border-green-100"
                              onClick={() => setSelectedReward(reward)}
                            >
                              <div className="h-40 bg-gray-100 relative">
                                <img 
                                  src={reward.image} 
                                  alt={reward.title} 
                                  className="h-full w-full object-cover"
                                />
                                <Badge className="absolute top-2 right-2 bg-green-500">
                                  {reward.points} points
                                </Badge>
                              </div>
                              <CardHeader className="pb-2">
                                <CardTitle>{reward.title}</CardTitle>
                                <CardDescription>
                                  Provided by {reward.partner}
                                </CardDescription>
                              </CardHeader>
                              <CardFooter className="pt-0 flex justify-between items-center">
                                <div className="flex items-center">
                                  {reward.icon}
                                </div>
                                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                                  Redeem
                                </Button>
                              </CardFooter>
                            </Card>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>{reward.title}</DialogTitle>
                              <DialogDescription>
                                {reward.points} points required
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="h-48 bg-gray-100 rounded-md overflow-hidden">
                                <img 
                                  src={reward.image} 
                                  alt={reward.title} 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-green-800">Description</h4>
                                <p className="text-sm text-green-700">{reward.description}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-green-800">Partner</h4>
                                <p className="text-sm text-green-700">{reward.partner}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-green-800">Your Points</h4>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-green-700">{userData.points}</span>
                                  <Progress 
                                    value={(userData.points / reward.points) * 100} 
                                    className="h-2"
                                  />
                                  <span className="text-sm text-green-700">{reward.points}</span>
                                </div>
                              </div>
                            </div>
                            <DialogFooter>
                              {userData.points >= reward.points ? (
                                <Button className="w-full bg-green-500 hover:bg-green-600">
                                  Redeem Reward
                                </Button>
                              ) : (
                                <Button className="w-full" disabled>
                                  {reward.points - userData.points} more points needed
                                </Button>
                              )}
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="badges">
                  <div className="bg-white border border-green-100 rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-semibold text-green-800 mb-6">Your Badges</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {badges.map((badge) => (
                        <div 
                          key={badge.id} 
                          className={`text-center ${!badge.earned ? 'opacity-60' : ''}`}
                        >
                          <div 
                            className={`${badge.color} h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-3`}
                          >
                            {badge.earned ? badge.icon : (
                              <div className="text-white text-2xl font-bold">?</div>
                            )}
                          </div>
                          <h3 className="font-semibold text-green-800">
                            {badge.title}
                            {badge.earned && (
                              <span className="ml-1 inline-flex">✓</span>
                            )}
                          </h3>
                          <p className="text-sm text-green-700 mt-1">
                            {badge.description}
                          </p>
                          {badge.earned ? (
                            <p className="text-xs text-green-600 mt-1">
                              Earned on {badge.date}
                            </p>
                          ) : (
                            <p className="text-xs text-green-600 mt-1">
                              To earn: {badge.requirement}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="certificates">
                  <div className="bg-white border border-green-100 rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-semibold text-green-800 mb-6">Your Certificates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {certificates.map((certificate) => (
                        <Card key={certificate.id} className="overflow-hidden border border-green-100">
                          <div className="h-60 bg-gray-100">
                            <img 
                              src={certificate.image} 
                              alt={certificate.title} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{certificate.title}</CardTitle>
                            <CardDescription>
                              Issued on {certificate.date}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-green-700">
                              {certificate.description}
                            </p>
                          </CardContent>
                          <CardFooter className="bg-green-50 flex justify-around">
                            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-100">
                              Download
                            </Button>
                            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-100">
                              Share
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <Card className="mb-6 border-green-100">
                <CardHeader className="bg-green-50 border-b border-green-100">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-green-600" /> Your Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="inline-block p-2 bg-green-50 rounded-full">
                      <Award className="h-12 w-12 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mt-2">{userData.name}</h3>
                    <Badge className="mt-1 bg-green-600">{userData.rank}</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-green-800">Current Points</span>
                        <span className="text-sm font-medium text-green-800">{userData.points}</span>
                      </div>
                      <Progress value={(userData.points / userData.nextRank.pointsNeeded) * 100} className="h-2" />
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-green-700">Current: {userData.rank}</span>
                        <span className="text-xs text-green-700">Next: {userData.nextRank.name}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 my-6">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="font-semibold text-green-800">{userData.totalCleanups}</div>
                        <div className="text-sm text-green-700">Cleanups</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="font-semibold text-green-800">{userData.totalReports}</div>
                        <div className="text-sm text-green-700">Reports</div>
                      </div>
                    </div>
                    
                    <div className="text-center border-t border-green-100 pt-4">
                      <div className="text-sm text-green-800 mb-2">Need {userData.nextRank.pointsNeeded - userData.points} more points for next rank</div>
                      <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 w-full">
                        View Full Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-green-100">
                <CardHeader className="bg-green-50 border-b border-green-100">
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-6 w-6 text-green-600" /> How to Earn Points
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-green-800">Report Waste</span>
                    </div>
                    <span className="text-green-800 font-medium">+20 pts</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Recycle className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-green-800">Clean Up Area</span>
                    </div>
                    <span className="text-green-800 font-medium">+50 pts</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-green-800">Organize Event</span>
                    </div>
                    <span className="text-green-800 font-medium">+100 pts</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-full">
                        <ThumbsUp className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-green-800">Get Likes</span>
                    </div>
                    <span className="text-green-800 font-medium">+1 pt each</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RewardsPage;
