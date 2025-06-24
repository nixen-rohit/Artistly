import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Music } from 'lucide-react';

export function FeaturedArtists() {
  const artists = [
    {
      id: 1,
      name: 'Shreya Ghoshal',
      category: 'Bollywood Singer',
      location: 'Mumbai',
      rating: 4.8,
      reviews: 127,
      price: '₹48,000',
      image: 'https://i.pinimg.com/1200x/a1/04/7d/a1047df098d91036bfa73d75b36b32c7.jpg',
      verified: true
    },
    {
      id: 2,
      name: 'Arijit Singh',
      category: 'Classical Singer',
      location: 'Delhi',
      rating: 4.9,
      reviews: 95,
      price: '₹50,000',
      image: 'https://i.pinimg.com/736x/48/d0/a4/48d0a43a2f533bd999ce5de0a9bce629.jpg',
      verified: true
    },
    {
      id: 3,
      name: 'Neha Kakkar',
      category: 'Bollywood Pop Singer',
      location: 'Bangalore',
      rating: 4.7,
      reviews: 103,
      price: '₹35,000',
      image: 'https://i.pinimg.com/736x/f7/2c/32/f72c32fff895c7d93302898fe40b1b6c.jpg',
      verified: true
    },
    {
      id: 4,
      name: 'Samay Raina',
      category: 'Stand-up Comedian',
      location: 'Rajasthan',
      rating: 4.9,
      reviews: 156,
      price: '₹60,000',
      image: 'https://i.pinimg.com/736x/40/f1/2d/40f12da3863d02ffa629b01194546a88.jpg',
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Artists</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our handpicked selection of top-rated artists who consistently deliver exceptional performances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {artists.map((artist) => (
            <Card key={artist.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {artist.verified && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Verified
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold">
                  {artist.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{artist.name}</h3>
                <div className="flex items-center space-x-1 mb-2">
                  <Music className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-600">{artist.category}</span>
                </div>
                <div className="flex items-center space-x-1 mb-3">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-600">{artist.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{artist.rating}</span>
                    <span className="text-sm text-slate-500">({artist.reviews})</span>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Ask for Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
            <Link href="/artists">View All Artists</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}