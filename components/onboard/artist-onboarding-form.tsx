'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  User, 
  Music, 
  MapPin, 
  Phone, 
  Mail, 
  Camera, 
  FileText, 
  Star,
  Upload,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const formSchema = z.object({
  // Personal Information
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  location: z.string().min(1, 'Please select your location'),
  
  // Professional Information
  artistName: z.string().min(2, 'Artist name must be at least 2 characters'),
  category: z.string().min(1, 'Please select a category'),
  subCategories: z.array(z.string()).min(1, 'Select at least one sub-category'),
  experience: z.string().min(1, 'Please select your experience level'),
  priceRange: z.string().min(1, 'Please select your price range'),
  
  // Portfolio
  bio: z.string().min(50, 'Bio must be at least 50 characters'),
  specialties: z.string().min(10, 'Please describe your specialties'),
  awards: z.string().optional(),
  
  // Availability and Terms
  availability: z.array(z.string()).min(1, 'Select at least one availability option'),
  terms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
  marketing: z.boolean().optional()
});

type FormData = z.infer<typeof formSchema>;

export function ArtistOnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 4;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subCategories: [],
      availability: [],
      terms: false,
      marketing: false
    }
  });

  const { register, handleSubmit, formState: { errors }, watch, setValue, getValues } = form;

  const categories = [
    'Bollywood Singer',
    'Classical Singer',
    'Folk Singer',
    'Rapper',
    'Classical Dancer',
    'Folk Dancer',
    'Contemporary Dancer',
    'Stand-up Comedian',
    'DJ',
    'Band',
    'Instrumentalist',
    'Magician',
    'Anchor/Host'
  ];

  const subCategoryMap: Record<string, string[]> = {
    'Bollywood Singer': ['Playback', 'Live Performance', 'Wedding Songs', 'Party Songs'],
    'Classical Singer': ['Hindustani', 'Carnatic', 'Ghazals', 'Bhajans'],
    'Folk Singer': ['Regional Folk', 'Sufi', 'Traditional', 'Fusion'],
    'Classical Dancer': ['Bharatanatyam', 'Kathak', 'Odissi', 'Kuchipudi'],
    'Stand-up Comedian': ['Clean Comedy', 'Roast', 'Observational', 'Storytelling'],
    'DJ': ['Bollywood', 'EDM', 'House', 'Hip Hop', 'Commercial'],
    'Band': ['Rock', 'Pop', 'Jazz', 'Folk', 'Fusion'],
    'Instrumentalist': ['Guitar', 'Piano', 'Violin', 'Drums', 'Flute', 'Tabla'],
     
    'Anchor/Host': ['Corporate Events', 'Weddings', 'Concerts', 'Award Shows']
  };

  const watchedCategory = watch('category');
  const watchedSubCategories = watch('subCategories') || [];
  const watchedAvailability = watch('availability') || [];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    toast.success('Application submitted successfully! We\'ll review your profile and get back to you within 24 hours.');
    
    setIsSubmitting(false);
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsToValidate);
    
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ['fullName', 'email', 'phone', 'location'];
      case 2:
        return ['artistName', 'category', 'subCategories', 'experience', 'priceRange'];
      case 3:
        return ['bio', 'specialties'];
      case 4:
        return ['availability', 'terms'];
      default:
        return [];
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="py-12 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Artist Registration</h1>
            <Badge variant="outline" className="px-3 py-1">
              Step {currentStep} of {totalSteps}
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                {currentStep === 1 && <><User className="h-6 w-6" /><span>Personal Information</span></>}
                {currentStep === 2 && <><Music className="h-6 w-6" /><span>Professional Details</span></>}
                {currentStep === 3 && <><FileText className="h-6 w-6" /><span>Portfolio & Bio</span></>}
                {currentStep === 4 && <><CheckCircle className="h-6 w-6" /><span>Final Details</span></>}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8 space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        {...register('fullName')}
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                      {errors.fullName && (
                        <p className="text-sm text-red-600 mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder="your.email@example.com"
                          className="pl-10"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative mt-1">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <Input
                          id="phone"
                          {...register('phone')}
                          placeholder="+91 9876543210"
                          className="pl-10"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <div className="relative mt-1">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <Select onValueChange={(value) => setValue('location', value)}>
                          <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Select your city" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="bangalore">Bangalore</SelectItem>
                            <SelectItem value="chennai">Chennai</SelectItem>
                            <SelectItem value="kolkata">Kolkata</SelectItem>
                            <SelectItem value="hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="pune">Pune</SelectItem>
                            <SelectItem value="jaipur">Jaipur</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {errors.location && (
                        <p className="text-sm text-red-600 mt-1">{errors.location.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Professional Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="artistName">Stage/Artist Name *</Label>
                      <Input
                        id="artistName"
                        {...register('artistName')}
                        placeholder="Your professional name"
                        className="mt-1"
                      />
                      {errors.artistName && (
                        <p className="text-sm text-red-600 mt-1">{errors.artistName.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="category">Primary Category *</Label>
                      <Select onValueChange={(value) => {
                        setValue('category', value);
                        setValue('subCategories', []); // Reset sub-categories when category changes
                      }}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.category && (
                        <p className="text-sm text-red-600 mt-1">{errors.category.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="experience">Experience Level *</Label>
                      <Select onValueChange={(value) => setValue('experience', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                          <SelectItem value="experienced">Experienced (5-10 years)</SelectItem>
                          <SelectItem value="expert">Expert (10+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.experience && (
                        <p className="text-sm text-red-600 mt-1">{errors.experience.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="priceRange">Price Range (per event) *</Label>
                      <Select onValueChange={(value) => setValue('priceRange', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select price range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                          <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                          <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="100k-250k">₹1,00,000 - ₹2,50,000</SelectItem>
                          <SelectItem value="above-250k">Above ₹2,50,000</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.priceRange && (
                        <p className="text-sm text-red-600 mt-1">{errors.priceRange.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Sub-categories */}
                  {watchedCategory && subCategoryMap[watchedCategory] && (
                    <div>
                      <Label>Sub-categories/Specializations *</Label>
                      <p className="text-sm text-slate-600 mb-3">Select all that apply to your expertise</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {subCategoryMap[watchedCategory].map((subCat) => (
                          <div key={subCat} className="flex items-center space-x-2">
                            <Checkbox
                              id={subCat}
                              checked={watchedSubCategories.includes(subCat)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setValue('subCategories', [...watchedSubCategories, subCat]);
                                } else {
                                  setValue('subCategories', watchedSubCategories.filter(item => item !== subCat));
                                }
                              }}
                            />
                            <Label htmlFor={subCat} className="text-sm cursor-pointer">
                              {subCat}
                            </Label>
                          </div>
                        ))}
                      </div>
                      {errors.subCategories && (
                        <p className="text-sm text-red-600 mt-1">{errors.subCategories.message}</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Portfolio & Bio */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="bio">Artist Bio *</Label>
                    <p className="text-sm text-slate-600 mb-2">Tell potential clients about yourself, your journey, and what makes you unique (minimum 50 characters)</p>
                    <Textarea
                      id="bio"
                      {...register('bio')}
                      placeholder="Share your story, background, and what makes you special as an artist..."
                      rows={6}
                      className="mt-1"
                    />
                    {errors.bio && (
                      <p className="text-sm text-red-600 mt-1">{errors.bio.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="specialties">Key Specialties & Skills *</Label>
                    <p className="text-sm text-slate-600 mb-2">Highlight your key skills, unique abilities, or signature performances</p>
                    <Textarea
                      id="specialties"
                      {...register('specialties')}
                      placeholder="e.g., Multi-lingual singing, Custom choreography, Interactive comedy..."
                      rows={4}
                      className="mt-1"
                    />
                    {errors.specialties && (
                      <p className="text-sm text-red-600 mt-1">{errors.specialties.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="awards">Awards & Recognition (Optional)</Label>
                    <p className="text-sm text-slate-600 mb-2">List any awards, competitions won, or notable recognition</p>
                    <Textarea
                      id="awards"
                      {...register('awards')}
                      placeholder="e.g., Winner of XYZ Talent Show 2023, Featured in ABC Music Festival..."
                      rows={3}
                      className="mt-1"
                    />
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="font-semibold flex items-center space-x-2 mb-4">
                      <Camera className="h-5 w-5" />
                      <span>Media Portfolio (Coming Soon)</span>
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 border-2 border-dashed border-slate-300 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Upload className="h-6 w-6 text-slate-400" />
                          <div>
                            <p className="font-medium">Profile Photos</p>
                            <p className="text-sm text-slate-600">Upload high-quality photos (Max 5)</p>
                          </div>
                        </div>
                        <Button variant="outline" disabled>
                          Upload Photos
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border-2 border-dashed border-slate-300 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Upload className="h-6 w-6 text-slate-400" />
                          <div>
                            <p className="font-medium">Performance Videos</p>
                            <p className="text-sm text-slate-600">Add video links or upload (Max 3)</p>
                          </div>
                        </div>
                        <Button variant="outline" disabled>
                          Add Videos
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Final Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <Label>Availability *</Label>
                    <p className="text-sm text-slate-600 mb-3">When are you typically available for performances?</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        'Weekdays',
                        'Weekends',
                        'Evenings',
                        'Daytime',
                        'Festivals',
                        'Last-minute bookings'
                      ].map((availability) => (
                        <div key={availability} className="flex items-center space-x-2">
                          <Checkbox
                            id={availability}
                            checked={watchedAvailability.includes(availability)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setValue('availability', [...watchedAvailability, availability]);
                              } else {
                                setValue('availability', watchedAvailability.filter(item => item !== availability));
                              }
                            }}
                          />
                          <Label htmlFor={availability} className="text-sm cursor-pointer">
                            {availability}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {errors.availability && (
                      <p className="text-sm text-red-600 mt-1">{errors.availability.message}</p>
                    )}
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                    <h3 className="font-semibold">Terms & Conditions</h3>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        {...register('terms')}
                        className="mt-1"
                      />
                      <div>
                        <Label htmlFor="terms" className="cursor-pointer">
                          I agree to the Terms & Conditions and Privacy Policy *
                        </Label>
                        <p className="text-sm text-slate-600 mt-1">
                          By checking this box, you agree to our platform terms and conditions, including 
                          commission structure and cancellation policies.
                        </p>
                      </div>
                    </div>
                    {errors.terms && (
                      <p className="text-sm text-red-600">{errors.terms.message}</p>
                    )}

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="marketing"
                        {...register('marketing')}
                        className="mt-1"
                      />
                      <div>
                        <Label htmlFor="marketing" className="cursor-pointer">
                          I agree to receive marketing communications
                        </Label>
                        <p className="text-sm text-slate-600 mt-1">
                          Get updates about new opportunities, platform features, and industry insights.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Your application will be reviewed within 24 hours</li>
                      <li>• We may contact you for additional information or verification</li>
                      <li>• Once approved, you'll receive login credentials to manage your profile</li>
                      <li>• You can start receiving booking requests immediately after approval</li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>

            {/* Navigation Buttons */}
            <div className="flex justify-between p-8 bg-slate-50 rounded-b-lg">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      <span>Submit Application</span>
                    </>
                  )}
                </Button>
              )}
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
}