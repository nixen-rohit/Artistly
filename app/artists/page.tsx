import { ArtistListing } from '@/components/artists/artist-listing';
import { Footer } from '@/components/layout/footer';

export default function ArtistsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Amazing Artists</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Browse through our curated collection of talented performers, musicians, and entertainers for your next event.
          </p>
        </div>
      </div>
      <ArtistListing />
      <Footer />
    </div>
  );
}