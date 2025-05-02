
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-background/70 backdrop-blur-md fixed top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center neon-border">
              <Zap className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold">AIHub</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
            <Link to="/#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover-glow" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-2 border-white/10">
            <div className="flex flex-col space-y-3">
              <Link to="/services" className="px-2 py-1 text-sm font-medium hover:text-primary" onClick={toggleMenu}>Services</Link>
              <Link to="/#pricing" className="px-2 py-1 text-sm font-medium hover:text-primary" onClick={toggleMenu}>Pricing</Link>
              <Link to="/#testimonials" className="px-2 py-1 text-sm font-medium hover:text-primary" onClick={toggleMenu}>Testimonials</Link>
              <Link to="/blog" className="px-2 py-1 text-sm font-medium hover:text-primary" onClick={toggleMenu}>Blog</Link>
              <Link to="/about" className="px-2 py-1 text-sm font-medium hover:text-primary" onClick={toggleMenu}>About</Link>
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link to="/login" onClick={toggleMenu}>Log In</Link>
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent" asChild>
                  <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
