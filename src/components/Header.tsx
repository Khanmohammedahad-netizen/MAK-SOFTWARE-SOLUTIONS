import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  currentRegion: string;
  onRegionChange: (region: string) => void;
}

export function Header({ currentPage, onNavigate, currentRegion, onRegionChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'how-we-work', label: 'How We Work' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const regions = [
    { id: 'global', label: 'Global' },
    { id: 'japan', label: 'Japan' },
    { id: 'dubai', label: 'Dubai' },
    { id: 'usa', label: 'USA' },
    { id: 'uk', label: 'UK (London)' },
    { id: 'europe', label: 'Europe' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="bg-slate-900 text-white text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Enterprise Software Solutions</span>
            <div className="relative">
              <button
                onClick={() => setRegionMenuOpen(!regionMenuOpen)}
                className="flex items-center gap-1 px-3 py-1 hover:bg-slate-800 rounded transition-colors"
              >
                <span>{regions.find(r => r.id === currentRegion)?.label}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {regionMenuOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => {
                        onRegionChange(region.id);
                        setRegionMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        currentRegion === region.id
                          ? 'bg-slate-100 text-slate-900 font-medium'
                          : 'text-slate-700 hover:bg-gray-50'
                      }`}
                    >
                      {region.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base">MAK</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-slate-900 text-lg leading-tight">MAK Software Solutions</div>
              <div className="text-xs text-slate-600 -mt-1">Enterprise Solutions</div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            <div className="mb-3 pb-3 border-b border-gray-200">
              <p className="text-xs text-slate-600 mb-2 px-4">Select Region:</p>
              <div className="space-y-1">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => {
                      onRegionChange(region.id);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      currentRegion === region.id
                        ? 'bg-slate-100 text-slate-900 font-medium'
                        : 'text-slate-700'
                    }`}
                  >
                    {region.label}
                  </button>
                ))}
              </div>
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('contact')}
              className="w-full bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors mt-4"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
