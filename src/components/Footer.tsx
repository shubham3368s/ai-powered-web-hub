
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="text-xl font-bold">AIHub</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming businesses with AI-powered solutions that drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "github", "facebook"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 rounded-sm bg-current"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["AI Analysis", "Content Generation", "Predictive Analytics", "Intelligent Search", "Process Automation"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-accent">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Blog", "Partners", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-accent">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with the latest in AI and receive our monthly newsletter.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 text-sm rounded-l-md border focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <Button className="rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} AIHub. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
