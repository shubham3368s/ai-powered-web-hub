
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/blog/BlogList";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { BlogPost } from "@/types/blog";

const Blog = () => {
  // Simple mock data - in a real app, this would come from an API
  const [posts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "Leveraging AI in Modern Business",
      slug: "leveraging-ai-in-modern-business",
      excerpt: "Discover how businesses are using AI to transform operations and customer experiences.",
      content: "# Leveraging AI in Modern Business\n\nArtificial intelligence is revolutionizing how businesses operate in the 21st century. From customer service to internal processes, AI offers numerous benefits.\n\n## Key Benefits\n\n- Enhanced customer experiences\n- Streamlined operations\n- Data-driven decision making\n- Cost reduction\n\nBusinesses that adopt AI early are seeing significant competitive advantages.",
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      },
      category: "Business",
      tags: ["AI", "Business", "Technology"],
      publishDate: "2025-04-20",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&h=800&q=80",
      featured: true,
    },
    {
      id: "2",
      title: "The Future of Natural Language Processing",
      slug: "future-of-nlp",
      excerpt: "Explore how NLP is evolving and what developments we can expect in the coming years.",
      content: "# The Future of Natural Language Processing\n\nNatural Language Processing (NLP) is advancing rapidly, with new models and techniques emerging constantly.\n\n## Recent Breakthroughs\n\n- Large language models with improved understanding\n- Zero-shot learning capabilities\n- Multimodal AI systems\n\nThese advancements are creating new possibilities for human-computer interaction.",
      author: {
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      },
      category: "Technology",
      tags: ["NLP", "AI", "Machine Learning"],
      publishDate: "2025-04-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&h=800&q=80",
      featured: false,
    },
    {
      id: "3",
      title: "AI Ethics: Balancing Progress and Responsibility",
      slug: "ai-ethics-balancing-progress",
      excerpt: "An exploration of ethical considerations in AI development and deployment.",
      content: "# AI Ethics: Balancing Progress and Responsibility\n\nAs AI becomes more powerful, ethical considerations become increasingly important.\n\n## Key Ethical Challenges\n\n- Bias and fairness in AI systems\n- Privacy concerns\n- Transparency and explainability\n- Employment displacement\n\nResponsible AI development requires addressing these challenges proactively.",
      author: {
        name: "Priya Patel",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
      },
      category: "Ethics",
      tags: ["Ethics", "AI", "Technology", "Society"],
      publishDate: "2025-04-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=800&q=80",
      featured: true,
    },
    {
      id: "4",
      title: "Machine Learning for Business Forecasting",
      slug: "machine-learning-business-forecasting",
      excerpt: "How advanced ML models are transforming the way companies predict future trends and outcomes.",
      content: "# Machine Learning for Business Forecasting\n\nPredictive analytics powered by machine learning is changing how businesses make decisions and prepare for the future.\n\n## Applications\n\n- Sales forecasting\n- Inventory optimization\n- Resource allocation\n- Risk assessment\n\nThese tools provide unprecedented accuracy in business planning.",
      author: {
        name: "Alex Thompson",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
      },
      category: "Business",
      tags: ["Machine Learning", "Forecasting", "Business Intelligence"],
      publishDate: "2025-04-05",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80",
      featured: false,
    }
  ]);

  const categories = ["All", "Business", "Technology", "Ethics", "Machine Learning"];
  const tags = ["AI", "Business", "Technology", "Ethics", "Machine Learning", "NLP", "Society", "Forecasting"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="relative mb-16 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&h=400&q=80" 
              alt="AI Blog" 
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-8 md:left-16">
              <h1 className="text-4xl font-bold gradient-text">AI Insights</h1>
              <p className="text-white/80 mt-2">Latest news and developments in AI technology</p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <BlogList posts={posts} />
            </div>
            <div className="lg:w-1/3">
              <BlogSidebar 
                categories={categories} 
                tags={tags} 
                featuredPosts={posts.filter(post => post.featured)} 
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
