
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              AI-Powered <span className="gradient-text">Solutions</span> for Every Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Unlock the potential of artificial intelligence with our suite of cutting-edge services designed to transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="text-white shadow-md">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-muted-foreground">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 border-2 border-white" />
                ))}
              </div>
              <span>Join 2,000+ companies already growing</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl blur-3xl"></div>
              <div className="relative bg-white/50 dark:bg-black/50 backdrop-blur-sm border rounded-xl shadow-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "AI Analysis", desc: "Real-time data insights" },
                    { title: "Content Creation", desc: "AI-powered generation" },
                    { title: "Process Automation", desc: "Workflow optimization" },
                    { title: "Predictive Models", desc: "Future-ready planning" }
                  ].map((feature, i) => (
                    <div key={i} className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow card-hover">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-violet-600 to-blue-500"></div>
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
