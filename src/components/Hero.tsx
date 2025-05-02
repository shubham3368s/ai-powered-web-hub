
import { Button } from "@/components/ui/button";
import { Circle, Square, Triangle, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Background animated shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <img 
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-[-1]" 
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground mb-4">
              <Zap className="mr-1 h-3 w-3" />
              <span>Next generation AI platform</span>
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Future of <span className="gradient-text glow-text">AI</span> is here
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Unlock the potential of artificial intelligence with our suite of cutting-edge services designed to transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="hover-glow shadow-md">
                <Zap className="mr-2" />
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="hover-glow">
                View Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-muted-foreground">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white dark:border-gray-900" />
                ))}
              </div>
              <span>Join 2,000+ companies already growing</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
            <div className="relative neon-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-3xl"></div>
              <div className="relative glass-card p-6">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="AI Technology" 
                  className="w-full h-auto rounded-lg mb-6 opacity-90" 
                />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "AI Analysis", desc: "Real-time data insights", icon: <Circle className="w-5 h-5" /> },
                    { title: "Content Creation", desc: "AI-powered generation", icon: <Triangle className="w-5 h-5" /> },
                    { title: "Process Automation", desc: "Workflow optimization", icon: <Square className="w-5 h-5" /> },
                    { title: "Predictive Models", desc: "Future-ready planning", icon: <Zap className="w-5 h-5" /> }
                  ].map((feature, i) => (
                    <div key={i} className="p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover-glow">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
