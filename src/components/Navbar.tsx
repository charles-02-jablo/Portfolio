import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Remove the 'number' property from each link
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "bg-navy/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-purple font-mono text-2xl font-semibold">CHARLES</Link>
        
        {/* Desktop Navigation - Removed number span */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link",
                isActive(link.path) && "text-purple"
              )}
            >
              {link.name}
            </Link>
          ))}
          
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-slate-light hover:bg-navy-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu - Removed number span */}
      <div className={cn(
        "fixed inset-0 bg-navy-dark/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-slate-light hover:text-purple text-xl transition-colors",
                isActive(link.path) && "text-purple"
              )}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        
        </nav>
      </div>
    </header>
  );
};

export default Navbar;