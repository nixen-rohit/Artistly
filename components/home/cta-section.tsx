import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Create Amazing Events?
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Join thousands of event organizers who trust Eventful India to connect them with India's best artists.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8">
              <Link href="/artists" className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>Browse Artists</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8">
              <Link href="/onboard" className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Join as Artist</span>
              </Link>
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Free</div>
                <div className="text-sm opacity-80">Artist Discovery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm opacity-80">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
                <div className="text-sm opacity-80">Secure Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}