
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechGrowth",
    image: "/placeholder.svg",
    content: "The AI-powered content generation has revolutionized our marketing strategy. We've seen a 40% increase in engagement and saved countless hours on content creation.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow Systems",
    image: "/placeholder.svg",
    content: "Implementing the predictive analytics service has given us insights we never thought possible. Our forecast accuracy improved by 65% in just three months.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Operations Manager, Global Solutions",
    image: "/placeholder.svg",
    content: "The intelligent automation tools have streamlined our workflows beyond expectation. What used to take days now happens in minutes with greater accuracy.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Innovative Companies</h2>
          <p className="text-lg text-muted-foreground">
            See how businesses are transforming their operations with our AI-powered solutions.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-background rounded-xl p-8 md:p-10 shadow-md border">
            <div className="flex items-center mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-lg md:text-xl italic mb-8">
              "{testimonials[activeIndex].content}"
            </p>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border bg-background hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? 'bg-accent' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border bg-background hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {["TechGrowth", "DataFlow", "GlobalSolutions", "InnovateAI"].map((company) => (
            <div key={company} className="flex items-center justify-center h-16">
              <div className="text-xl font-bold text-gray-400">{company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
