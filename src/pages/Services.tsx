
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Cpu, Database, GanttChart, HeartPulse, Shield } from "lucide-react";

const serviceImages = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&h=400&q=80"
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our AI Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leverage the power of artificial intelligence to transform your business with our cutting-edge services designed for the modern enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-6 transition-all hover:translate-y-[-5px] duration-300">
                <div className="relative rounded-lg overflow-hidden mb-6 h-48">
                  <img 
                    src={serviceImages[index]} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-md border border-white/10">
                    <service.icon className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" className="w-full hover-glow">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const services = [
  {
    icon: Cpu,
    title: "AI Model Training",
    description: "Custom AI model development and training services tailored for your specific business needs and use cases."
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Turn your raw data into actionable insights with our advanced AI-powered analytics solutions."
  },
  {
    icon: Code,
    title: "Intelligent Automation",
    description: "Automate repetitive tasks and workflows with our smart AI agents and process automation tools."
  },
  {
    icon: HeartPulse,
    title: "Healthcare AI",
    description: "Revolutionary healthcare solutions powered by AI for diagnostics, patient care, and medical research."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "AI-enhanced security monitoring and compliance management to protect your digital assets."
  },
  {
    icon: GanttChart,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with our predictive analytics services."
  }
];

export default Services;
