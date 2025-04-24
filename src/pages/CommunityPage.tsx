
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  MapPin, 
  Users,
  ThumbsUp,
  MessageSquare,
  Share2,
  Filter,
  Search
} from "lucide-react";

// Mock data for events
const events = [
  {
    id: 1,
    title: "Riverside Cleanup Day",
    location: "Green River Park, 123 Park Ave",
    date: "May 15, 2025",
    time: "9:00 AM - 12:00 PM",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=2864",
    attendees: 24,
    organizer: "EcoWarriors Group",
    description: "Join us for a morning of cleaning up the riverside. Gloves and bags will be provided. Bring water and sunscreen!",
  },
  {
    id: 2,
    title: "Community Park Beautification",
    location: "Central Community Park, Downtown",
    date: "May 22, 2025",
    time: "10:00 AM - 2:00 PM",
    image: "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?q=80&w=2070",
    attendees: 18,
    organizer: "Green City Initiative",
    description: "Help us clean and beautify our community park. Activities include trash collection, planting flowers, and fixing benches.",
  },
  {
    id: 3,
    title: "Beach Cleanup Weekend",
    location: "Sunny Shores Beach, Ocean Drive",
    date: "June 5-6, 2025",
    time: "8:00 AM - 4:00 PM",
    image: "https://images.unsplash.com/photo-1622403924572-2067916cbd6a?q=80&w=2832",
    attendees: 42,
    organizer: "Ocean Guardians",
    description: "A two-day event to clean our beautiful beaches before summer season. Join for either or both days!",
  },
  {
    id: 4,
    title: "City Trail Maintenance",
    location: "Pine Ridge Hiking Trail",
    date: "June 12, 2025",
    time: "9:00 AM - 1:00 PM",
    image: "https://images.unsplash.com/photo-1611859181767-f15ec4c5f12c?q=80&w=2787",
    attendees: 15,
    organizer: "TrailBlazers Club",
    description: "Help maintain our city trails by picking up trash, clearing pathways, and identifying areas that need repair.",
  }
];

// Mock data for posts
const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864",
      role: "Eco Warrior",
    },
    content: "Just finished cleaning up Riverside Park with 20 amazing volunteers! We collected over 30 bags of trash. So proud of what we accomplished today! 🌿 #CleanupHeroes #CommunityAction",
    image: "https://images.unsplash.com/photo-1567360425618-1684ce40df19?q=80&w=2574",
    date: "2 hours ago",
    likes: 42,
    comments: 12,
  },
  {
    id: 2,
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662",
      role: "New Member",
    },
    content: "Found this huge pile of trash behind the community center yesterday. Planning to organize a cleanup this weekend. Who's with me? 💪 #TakeAction",
    image: "https://images.unsplash.com/photo-1604187350603-21be3f41c490?q=80&w=2940",
    date: "1 day ago",
    likes: 28,
    comments: 21,
  },
  {
    id: 3,
    author: {
      name: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2761",
      role: "Cleanup Captain",
    },
    content: "Before and after of today's beach cleanup! Amazing what 3 hours and 15 dedicated people can accomplish. Mother Nature thanks you all! 🌊🏖️ #BeforeAndAfter #OceanCleanup",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=2864",
    date: "3 days ago",
    likes: 94,
    comments: 34,
  },
];

// Mock data for leaderboard
const leaderboard = [
  { id: 1, name: "Sarah Johnson", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864", points: 2450, cleanups: 32, badges: 8 },
  { id: 2, name: "David Wilson", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960", points: 2180, cleanups: 28, badges: 7 },
  { id: 3, name: "Elena Rodriguez", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2761", points: 1950, cleanups: 25, badges: 9 },
  { id: 4, name: "Michael Chen", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662", points: 1840, cleanups: 22, badges: 6 },
  { id: 5, name: "Aisha Patel", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787", points: 1750, cleanups: 20, badges: 5 },
];

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState("feed");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-green-800 mb-2">Community Hub</h1>
              <p className="text-green-700">
                Connect with fellow cleanup heroes, share your successes, and join local events.
              </p>
            </div>
            
            <div className="hidden md:block">
              <Button className="bg-green-500 hover:bg-green-600">
                <Users className="mr-2 h-4 w-4" /> Create Event
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="feed" className="space-y-6" onValueChange={setActiveTab}>
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="feed" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                  Community Feed
                </TabsTrigger>
                <TabsTrigger value="events" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                  Events
                </TabsTrigger>
                <TabsTrigger value="leaderboard" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                  Leaderboard
                </TabsTrigger>
              </TabsList>
              
              <div className="hidden sm:flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-green-500" />
                  <Input placeholder={`Search ${activeTab}...`} className="pl-8 w-40 md:w-auto" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <TabsContent value="feed" className="space-y-6">
              <div className="bg-white border border-green-100 rounded-lg shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input 
                      placeholder="Share your cleanup story or achievement..." 
                      className="mb-3"
                    />
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" /> Event
                      </Button>
                      <Button className="bg-green-500 hover:bg-green-600">
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {posts.map((post) => (
                <Card key={post.id} className="border border-green-100">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base font-semibold text-green-800">
                            {post.author.name}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <Badge variant="outline" className="text-xs font-normal rounded-full px-2">
                              {post.author.role}
                            </Badge>
                            <span className="mx-1">•</span>
                            <span>{post.date}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="py-3">
                    <p className="text-green-700 mb-4">{post.content}</p>
                    {post.image && (
                      <div className="rounded-md overflow-hidden">
                        <img 
                          src={post.image} 
                          alt="Post" 
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="border-t border-green-100 pt-3">
                    <div className="flex justify-between w-full">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-1" /> {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4 mr-1" /> {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-1" /> Share
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="border border-green-100">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-1 text-green-700">
                          <Calendar size={14} className="flex-shrink-0" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                        <div className="flex items-center gap-1 text-green-700 mt-1">
                          <MapPin size={14} className="flex-shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-700 mb-4">{event.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex -space-x-2">
                            {[1, 2, 3].map((_, i) => (
                              <Avatar key={i} className="border-2 border-white">
                                <AvatarFallback>U{i+1}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-green-800">{event.attendees} attending</span>
                        </div>
                        <Badge className="bg-earth-500">{event.organizer}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-green-100 pt-4">
                      <Button className="bg-green-500 hover:bg-green-600 w-full">Join Event</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  Load More Events
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="leaderboard">
              <div className="bg-white border border-green-100 rounded-lg shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gradient-to-r from-earth-500 to-earth-600 text-white">
                  {leaderboard.slice(0, 3).map((user, index) => {
                    const medals = ["🥇", "🥈", "🥉"];
                    return (
                      <Card key={user.id} className={`border-0 ${index === 0 ? 'bg-yellow-50' : index === 1 ? 'bg-gray-50' : 'bg-amber-50'}`}>
                        <CardHeader className="text-center pb-2">
                          <div className="text-2xl font-bold">{medals[index]}</div>
                          <div className="flex justify-center">
                            <Avatar className="h-16 w-16 border-2 border-white">
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                          </div>
                          <CardTitle className="mt-2 text-green-800">{user.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center pb-2">
                          <div className="text-2xl font-bold text-green-700">{user.points}</div>
                          <CardDescription>points</CardDescription>
                          <div className="flex justify-center space-x-4 mt-2">
                            <div className="text-center">
                              <div className="font-semibold text-green-800">{user.cleanups}</div>
                              <div className="text-xs text-green-600">cleanups</div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-green-800">{user.badges}</div>
                              <div className="text-xs text-green-600">badges</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-green-800 mb-4 px-2">Top Heroes</h3>
                  <div className="space-y-2">
                    {leaderboard.slice(0, 5).map((user, index) => (
                      <div key={user.id} className="flex items-center justify-between p-2 hover:bg-green-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-6 text-center font-medium text-green-700">{index + 1}</div>
                          <Avatar>
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-green-800">{user.name}</div>
                            <div className="text-xs text-green-600">{user.cleanups} cleanups</div>
                          </div>
                        </div>
                        <div className="font-semibold text-green-700">{user.points} pts</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white border border-green-100 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">How Points Work</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="font-medium text-green-800">Report Waste</div>
                    <div className="text-green-700">20 points per verified report</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-green-800">Clean Up</div>
                    <div className="text-green-700">50 points per cleanup participation</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-green-800">Organize Event</div>
                    <div className="text-green-700">100 points per organized event</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
