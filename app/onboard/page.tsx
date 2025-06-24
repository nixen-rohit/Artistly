import { ArtistOnboardingForm } from '@/components/onboard/artist-onboarding-form';
import { Footer } from '@/components/layout/footer';

export default function OnboardPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Artist Community</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Become part of India's premier artist booking platform. Connect with event organizers and showcase your talent to a wider audience.
          </p>
        </div>
      </div>
      <ArtistOnboardingForm />
      <Footer />
    </div>
  );
}