
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-background/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="text-xl font-bold">AIHub</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-accent">Services</a>
            <a href="#pricing" className="text-sm font-medium hover:text-accent">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-accent">Testimonials</a>
            <a href="#" className="text-sm font-medium hover:text-accent">About</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">Log In</Button>
            <Button size="sm">Sign Up</Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-2">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="px-2 py-1 text-sm font-medium hover:text-accent" onClick={toggleMenu}>Services</a>
              <a href="#pricing" className="px-2 py-1 text-sm font-medium hover:text-accent" onClick={toggleMenu}>Pricing</a>
              <a href="#testimonials" className="px-2 py-1 text-sm font-medium hover:text-accent" onClick={toggleMenu}>Testimonials</a>
              <a href="#" className="px-2 py-1 text-sm font-medium hover:text-accent" onClick={toggleMenu}>About</a>
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">Log In</Button>
                <Button size="sm" className="flex-1">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
