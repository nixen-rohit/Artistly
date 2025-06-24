import { Users, Calendar, Star, MapPin } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Verified Artists',
      description: 'Professional performers across India with proven track records'
    },
    {
      icon: Calendar,
      value: '10,000+',
      label: 'Events Completed',
      description: 'Successful bookings and performances'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Average Rating',
      description: 'Based on customer reviews and ratings'
    },
    {
      icon: MapPin,
      value: '25+',
      label: 'Cities Covered',
      description: 'Pan-India artist network with presence in major cities'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Thousands</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our platform has facilitated countless memorable events across India, connecting talented artists with event organizers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}