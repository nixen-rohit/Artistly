import { Search, Shield, Star, Calendar, Headphones, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: 'Smart Discovery',
      description: 'Advanced search and filtering to find the perfect artist for your event type, budget, and location.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Shield,
      title: 'Verified Artists',
      description: 'All our artists are verified professionals with proven track records and quality performances.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Streamlined booking process with real-time availability and instant confirmation.',
      color: 'text-teal-600 bg-teal-100'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Read reviews, check ratings, and see portfolios before making your booking decision.',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with bookings and event coordination.',
      color: 'text-pink-600 bg-pink-100'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book and confirm artists instantly for last-minute events and urgent requirements.',
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Artistly
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We make artist booking simple, reliable, and transparent. Discover what sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-8">
                <div className={`inline-flex p-3 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}