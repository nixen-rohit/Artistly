'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Star, MapPin, Music, Heart, Eye } from 'lucide-react';

export function ArtistListing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    'All Categories',
    'Bollywood Singer',
    'Classical Dancer',
    'Stand-up Comedian',
    'Folk Singer',
    'DJ',
    'Band',
    'Instrumentalist',
    'Magician'
  ];

  const locations = [
    'All Locations',
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Hyderabad',
    'Pune',
    'Rajasthan'
  ];

  const artists = [
    {
      id: 1,
      name: 'Samay Raina',
      category: 'Stand-up Comedian',
      location: 'Mumbai',
      rating: 4.9,
      reviews: 127,
      price: 55000,
      image: 'https://i.pinimg.com/736x/40/f1/2d/40f12da3863d02ffa629b01194546a88.jpg',
      verified: true,
      featured: true,
      availability: 'Available'
    },
    {
      id: 2,
      name: 'Shreya Ghoshal',
      category: 'Bollywood Singer',
      location: 'Delhi',
      rating: 4.8,
      reviews: 95,
      price: 50000,
      image: 'https://i.pinimg.com/736x/a1/04/7d/a1047df098d91036bfa73d75b36b32c7.jpg',
      verified: true,
      featured: false,
      availability: 'Available'
    },
    {
      id: 3,
      name: 'Neha Kakkar',
      category: 'Bollywood Pop Singer',
      location: 'Pune',
      rating: 4.7,
      reviews: 203,
      price: 25000,
      image: 'https://i.pinimg.com/736x/f7/2c/32/f72c32fff895c7d93302898fe40b1b6c.jpg',
      verified: true,
      featured: true,
      availability: 'Busy until Dec 15'
    },
    {
      id: 4,
      name: 'Honey Singh',
      category: 'Rapper , Singer',
      location: 'Rajasthan',
      rating: 4.9,
      reviews: 156,
      price: 45000,
      image: 'https://i.pinimg.com/736x/9b/65/a9/9b65a9a4f3f56cb88de1447e9227d360.jpg',
      verified: true,
      featured: false,
      availability: 'Available'
    },
    {
      id: 5,
      name: 'Diljit Dosanjh',
      category: 'Punjabi Pop, Folk',
      location: 'Mumbai',
      rating: 4.6,
      reviews: 89,
      price: 30000,
      image: 'https://i.pinimg.com/736x/d6/4b/f9/d64bf9c6ac508ddae88714563409c043.jpg',
      verified: true,
      featured: true,
      availability: 'Available'
    },
    {
      id: 6,
      name: 'Bharatanatyam',
      category: 'Classical Dancer',
      location: 'Chennai',
      rating: 4.8,
      reviews: 112,
      price: 45000,
      image: 'https://i.pinimg.com/736x/cd/dc/74/cddc747033276f3bf83f945db77be203.jpg',
      verified: true,
      featured: false,
      availability: 'Available'
    },
    {
      id: 7,
      name: 'Cold Play',
      category: 'Band',
      location: 'Delhi',
      rating: 4.8,
      reviews: 112,
      price: 36000,
      image: 'https://i.pinimg.com/736x/d2/81/df/d281dfeb640a576ba9955c93545e962e.jpg',
      verified: true,
      featured: true,
      availability: 'Available'
    },
    {
      id: 8,
      name: 'Dynamo',
      category: 'Magician',
      location: 'Delhi',
      rating: 4.8,
      reviews: 112,
      price: 42000,
      image: 'https://i.pinimg.com/736x/65/fb/ad/65fbadc6f8134e420320d4bb7a757c13.jpg',
      verified: true,
      featured: false,
      availability: 'Available'
    },
     {
      id: 9,
      name: 'The Chainsmokers',
      category: 'DJ',
      location: 'Hyderabad',
      rating: 4.8,
      reviews: 112,
      price: 25000,
      image: 'https://i.pinimg.com/736x/a4/5e/9c/a45e9c58da2c9444463fc5056954c37f.jpg',
      verified: true,
      featured: false,
      availability: 'Available'
    }
  ];

  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || artist.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || artist.location === selectedLocation;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'under-30k' && artist.price < 30000) ||
                        (priceRange === '30k-50k' && artist.price >= 30000 && artist.price <= 50000) ||
                        (priceRange === 'above-50k' && artist.price > 50000);
    
    return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
  });

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Search artists, categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category, index) => (
                  <SelectItem key={index} value={index === 0 ? 'all' : category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location, index) => (
                  <SelectItem key={index} value={index === 0 ? 'all' : location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-30k">Under ₹30k</SelectItem>
                <SelectItem value="30k-50k">₹30k - ₹50k</SelectItem>
                <SelectItem value="above-50k">Above ₹50k</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">
              {filteredArtists.length} Artists Found
            </h2>
            <p className="text-slate-600">Discover amazing performers for your next event</p>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-slate-400" />
            <span className="text-sm text-slate-600">Sort by</span>
            <Select defaultValue="rating">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Artist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map((artist) => (
            <Card key={artist.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {artist.verified && (
                    <Badge className="bg-green-500 hover:bg-green-600">
                      Verified
                    </Badge>
                  )}
                  {artist.featured && (
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Action buttons */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Price */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold">₹{artist.price.toLocaleString()}</span>
                </div>

                {/* Availability */}
                <div className="absolute bottom-3 right-3">
                  <Badge 
                    variant={artist.availability === 'Available' ? 'default' : 'secondary'}
                    className={artist.availability === 'Available' ? 'bg-green-500 hover:bg-green-600' : ''}
                  >
                    {artist.availability}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                
                <div className="flex items-center space-x-1 mb-2">
                  <Music className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-600">{artist.category}</span>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-600">{artist.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{artist.rating}</span>
                    <span className="text-sm text-slate-500">({artist.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Ask for Quote
                  </Button>
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredArtists.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
              Load More Artists
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-16">
            <div className="text-slate-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No artists found</h3>
            <p className="text-slate-600 mb-4">Try adjusting your search criteria</p>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedLocation('all');
              setPriceRange('all');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}