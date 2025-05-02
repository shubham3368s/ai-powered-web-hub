
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PricingTier = ({ 
  plan, 
  price, 
  description, 
  features, 
  popular = false,
  buttonVariant = "outline"
}: {
  plan: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}) => {
  return (
    <div className={cn(
      "bg-background rounded-xl border p-8 shadow-sm transition-all",
      popular ? "border-accent shadow-md relative" : ""
    )}>
      {popular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-medium">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold">{plan}</h3>
      <p className="mt-2 text-muted-foreground text-sm">{description}</p>
      
      <div className="mt-6 mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-muted-foreground text-sm ml-1">/month</span>
      </div>
      
      <Button 
        className="w-full" 
        variant={buttonVariant}
      >
        Get Started
      </Button>
      
      <ul className="mt-8 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-accent shrink-0 mr-2" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            plan="Starter"
            price="49"
            description="Perfect for small businesses just getting started with AI."
            features={[
              "1 AI service of your choice",
              "5,000 API calls per month",
              "Basic analytics dashboard",
              "Email support",
              "1 user"
            ]}
          />
          
          <PricingTier
            plan="Professional"
            price="99"
            description="Ideal for growing businesses needing more AI capabilities."
            features={[
              "3 AI services of your choice",
              "25,000 API calls per month",
              "Advanced analytics dashboard",
              "Priority email support",
              "5 users",
              "Custom integrations"
            ]}
            popular={true}
            buttonVariant="default"
          />
          
          <PricingTier
            plan="Enterprise"
            price="249"
            description="For organizations requiring full AI suite and premium support."
            features={[
              "All AI services included",
              "100,000 API calls per month",
              "Real-time analytics dashboard",
              "24/7 dedicated support",
              "Unlimited users",
              "Custom AI model training",
              "Dedicated account manager"
            ]}
          />
        </div>
        
        <div className="mt-16 p-6 bg-secondary rounded-xl max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Need a custom plan?</h3>
              <p className="text-muted-foreground mt-1">We offer tailored solutions for large organizations.</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
