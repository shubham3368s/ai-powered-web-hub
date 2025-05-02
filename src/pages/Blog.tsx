
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
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      category: "Business",
      tags: ["AI", "Business", "Technology"],
      publishDate: "2025-04-20",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&h=800&fit=crop",
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
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      category: "Technology",
      tags: ["NLP", "AI", "Machine Learning"],
      publishDate: "2025-04-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&h=800&fit=crop",
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
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      category: "Ethics",
      tags: ["Ethics", "AI", "Technology", "Society"],
      publishDate: "2025-04-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1596496181871-9681eacf9764?q=80&w=1200&h=800&fit=crop",
      featured: true,
    }
  ]);

  const categories = ["All", "Business", "Technology", "Ethics", "Machine Learning"];
  const tags = ["AI", "Business", "Technology", "Ethics", "Machine Learning", "NLP", "Society"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Blog</h1>
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
