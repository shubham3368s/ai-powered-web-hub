
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/types/blog";
import { Search } from "lucide-react";

interface BlogSidebarProps {
  categories: string[];
  tags: string[];
  featuredPosts: BlogPost[];
}

const BlogSidebar = ({ categories, tags, featuredPosts }: BlogSidebarProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Input placeholder="Search blog posts..." className="pr-10" />
            <Button 
              variant="ghost" 
              size="sm"
              className="absolute right-0 top-0 h-full px-3"
            >
              <Search size={18} />
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1">
            {categories.map((category, index) => (
              <li key={index}>
                <Link 
                  to="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors block py-1"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Featured Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {featuredPosts.map((post) => (
              <div key={post.id} className="flex gap-3">
                <Link to={`/blog/${post.slug}`} className="flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-16 h-16 object-cover rounded"
                  />
                </Link>
                <div>
                  <Link to={`/blog/${post.slug}`}>
                    <h4 className="font-medium hover:text-primary transition-colors line-clamp-2 mb-1">
                      {post.title}
                    </h4>
                  </Link>
                  <div className="text-xs text-muted-foreground">{post.publishDate}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Link 
                key={index} 
                to="#"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm mb-4">
            Subscribe to our newsletter to receive updates on new blog posts.
          </p>
          <Input 
            placeholder="Your email address" 
            className="mb-3" 
          />
          <Button className="w-full">Subscribe</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
