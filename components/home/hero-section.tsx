import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Play, Star, Users, Calendar } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-20 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Book Amazing{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Artists
                </span>{' '}
                for Your Events
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Connect with India's most talented performers, musicians, and entertainers. 
                From concerts to corporate events, find the perfect artist for any occasion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link href="/artists" className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>Explore Artists</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-slate-600">Verified Artists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10k+</div>
                <div className="text-sm text-slate-600">Events Booked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">25+</div>
                <div className="text-sm text-slate-600">Cities Covered</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Artist performing on stage"
                  className="w-full h-64 object-cover rounded-lg transform -rotate-3"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Live Booking</div>
                    <div className="text-xs text-slate-600">3 artists available now</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}