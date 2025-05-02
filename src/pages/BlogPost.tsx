
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPost as BlogPostType } from "@/types/blog";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll simulate an API call with mock data
    const fetchPost = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // This would normally be fetched from an API
        const posts = [
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
        ];
        
        const foundPost = posts.find(p => p.slug === slug);
        
        if (foundPost) {
          setPost(foundPost);
        } else {
          // Post not found, navigate to blog list
          navigate("/blog");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/blog")}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Button>
          
          {loading ? (
            <div>
              <Skeleton className="h-12 w-3/4 mb-4" />
              <div className="flex gap-4 mb-6">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-24" />
              </div>
              <Skeleton className="h-64 w-full mb-6" />
              <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-6 w-4/5" />
                <Skeleton className="h-6 w-full" />
              </div>
            </div>
          ) : post ? (
            <article className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={16} />
                  <span>{post.category}</span>
                </div>
              </div>
              
              {post.image && (
                <div className="mb-8">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              )}
              
              <div className="flex items-center mb-8">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-medium">Written by</div>
                  <div className="text-lg">{post.author.name}</div>
                </div>
              </div>
              
              <div className="blog-content prose max-w-none dark:prose-invert">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold">Post not found</h2>
              <p className="mt-2">The blog post you're looking for doesn't exist.</p>
              <Button 
                onClick={() => navigate("/blog")} 
                className="mt-4"
              >
                Return to Blog
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
