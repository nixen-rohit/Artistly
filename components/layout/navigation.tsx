'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Music, Star, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
              <Music className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Artistly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/artists" className="text-slate-700 hover:text-purple-600 transition-colors flex items-center space-x-1">
              <Star className="h-4 w-4" />
              <span>Artists</span>
            </Link>
            <Link href="/onboard" className="text-slate-700 hover:text-purple-600 transition-colors flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>Join as Artist</span>
            </Link>
             
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-slate-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/artists" 
                className="text-slate-700 hover:text-purple-600 transition-colors flex items-center space-x-1"
                onClick={() => setIsOpen(false)}
              >
                <Star className="h-4 w-4" />
                <span>Artists</span>
              </Link>
              <Link 
                href="/onboard" 
                className="text-slate-700 hover:text-purple-600 transition-colors flex items-center space-x-1"
                onClick={() => setIsOpen(false)}
              >
                <Users className="h-4 w-4" />
                <span>Join as Artist</span>
              </Link>
               
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 justify-start">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}