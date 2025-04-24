import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Camera, 
  MapPin, 
  Info, 
  Upload, 
  CheckCircle2,
  Video
} from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Please provide more details (min 20 characters)"),
  wasteType: z.string().min(1, "Please select a waste type"),
  location: z.string().min(1, "Location is required"),
});

type MediaFile = {
  file: File;
  type: 'image' | 'video';
  preview: string;
};

export function ReportForm() {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStep, setSubmissionStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      wasteType: "",
      location: "",
    },
  });

  function handleMediaInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => ({
        file,
        type: file.type.startsWith('image/') ? 'image' : 'video',
        preview: URL.createObjectURL(file)
      }));
      setMediaFiles(prev => [...prev, ...newFiles]);
    }
  }

  function removeMedia(index: number) {
    setMediaFiles(prev => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted", { values, mediaFiles });
    toast({
      title: "Report submitted successfully!",
      description: "Thank you for making your community cleaner.",
    });
    setSubmissionStep(2);
    setIsSubmitting(false);
  }

  return (
    <div className="bg-white border border-green-100 rounded-lg shadow-sm p-6">
      {submissionStep === 1 ? (
        <>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Report Waste</h2>
            <p className="text-green-700">
              Help keep your community clean by reporting waste. Upload or capture photos and videos to help others find and clean it up.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-800">Title</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g., Trash pile in Central Park" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="wasteType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-800">Waste Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select waste type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Trash</SelectItem>
                            <SelectItem value="plastic">Plastic</SelectItem>
                            <SelectItem value="electronic">Electronic Waste</SelectItem>
                            <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                            <SelectItem value="organic">Organic/Food Waste</SelectItem>
                            <SelectItem value="construction">Construction Debris</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-800">
                          Location
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info size={14} className="ml-2 text-green-500 cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-white p-2 shadow-lg border border-green-100">
                                <p className="text-xs max-w-xs">
                                  Enter an address or description. In the actual app, 
                                  we would integrate Google Maps for precise location tagging.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="E.g., Corner of Main St and 5th Ave" 
                              {...field} 
                              className="pl-10"
                            />
                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-800">Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe the waste and any relevant details that might help with cleanup..." 
                            {...field} 
                            className="min-h-32"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <FormLabel className="text-green-800 block mb-2">Photos & Videos</FormLabel>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="border-2 border-dashed border-green-200 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          accept="image/*,video/*"
                          multiple
                          onChange={handleMediaInputChange}
                          className="hidden"
                          id="media-upload"
                        />
                        <label htmlFor="media-upload" className="cursor-pointer block">
                          <Upload className="mx-auto h-8 w-8 text-green-500 mb-2" />
                          <div className="text-green-700">
                            Upload files
                            <span className="block text-sm text-green-600">
                              Photos or Videos
                            </span>
                          </div>
                        </label>
                      </div>

                      <div className="border-2 border-dashed border-green-200 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          accept="image/*,video/*"
                          multiple
                          capture
                          onChange={handleMediaInputChange}
                          className="hidden"
                          id="media-capture"
                        />
                        <label htmlFor="media-capture" className="cursor-pointer block">
                          <Camera className="mx-auto h-8 w-8 text-green-500 mb-2" />
                          <div className="text-green-700">
                            Capture now
                            <span className="block text-sm text-green-600">
                              Take Photo/Video
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                    
                    {mediaFiles.length > 0 && (
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {mediaFiles.map((media, index) => (
                          <div 
                            key={index} 
                            className="relative h-20 bg-gray-100 rounded-md overflow-hidden"
                          >
                            {media.type === 'image' ? (
                              <img 
                                src={media.preview} 
                                alt={`Upload ${index + 1}`}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="h-full w-full flex items-center justify-center bg-black">
                                <Video className="h-8 w-8 text-white" />
                              </div>
                            )}
                            <button
                              type="button"
                              onClick={() => removeMedia(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <FormDescription className="text-xs mt-2">
                      Upload or capture up to 5 photos or videos to help identify the waste.
                    </FormDescription>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">⟳</span> Submitting...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Upload className="mr-2 h-4 w-4" /> Submit Report
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="inline-block p-4 bg-green-50 rounded-full mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Thank You for Your Report!</h2>
          <p className="text-green-700 mb-6 max-w-md mx-auto">
            Your waste report has been submitted successfully. You've earned 20 points for contributing to a cleaner community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-green-500 text-green-600 hover:bg-green-50"
              onClick={() => {
                setSubmissionStep(1);
                form.reset();
                setMediaFiles([]);
              }}
            >
              Submit Another Report
            </Button>
            <Button className="bg-green-500 hover:bg-green-600">
              View Your Reports
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
