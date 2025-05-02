
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";
import { Calendar, Clock, Zap } from "lucide-react";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover-glow border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="md:flex">
            <div className="md:w-1/3 relative overflow-hidden">
              <Link to={`/blog/${post.slug}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-60"></div>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </Link>
            </div>
            <CardContent className="md:w-2/3 p-6">
              <div className="mb-2">
                <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full flex items-center w-fit">
                  <Zap size={10} className="mr-1" />
                  {post.category}
                </span>
              </div>
              <Link to={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </Link>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-8 h-8 rounded-full border border-primary/30"
                  />
                  <span className="text-sm">{post.author.name}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground space-x-3">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
