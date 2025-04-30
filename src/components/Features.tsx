
import { 
  Brain,
  MessageSquare, 
  BarChart,
  Search 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-10 h-10 text-accent" />,
      title: "AI Analysis",
      description: "Our advanced machine learning algorithms analyze your data to uncover hidden patterns and valuable insights.",
      benefits: ["Pattern recognition", "Anomaly detection", "Trend forecasting"]
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-accent" />,
      title: "Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation services.",
      benefits: ["Blog posts", "Product descriptions", "Marketing copy"]
    },
    {
      icon: <BarChart className="w-10 h-10 text-accent" />,
      title: "Predictive Analytics",
      description: "Get ahead of market trends with our AI-driven predictive analytics that forecast future outcomes.",
      benefits: ["Sales forecasting", "Risk assessment", "Resource planning"]
    },
    {
      icon: <Search className="w-10 h-10 text-accent" />,
      title: "Intelligent Search",
      description: "Enhance user experience with our semantic search technology that understands user intent.",
      benefits: ["Natural language queries", "Semantic understanding", "Contextual results"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI-Powered Services</h2>
          <p className="text-lg text-muted-foreground">
            Discover how our cutting-edge AI solutions can transform your business operations and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-md border card-hover"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to harness the power of AI?</h3>
            <p className="text-muted-foreground mb-6">Join thousands of businesses that are already leveraging our AI solutions.</p>
            <button className="px-6 py-3 bg-accent text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
