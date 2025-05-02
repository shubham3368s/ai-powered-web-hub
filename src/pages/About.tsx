
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About AIHub</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pioneering the future of artificial intelligence solutions for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At AIHub, we're on a mission to democratize artificial intelligence and make cutting-edge AI technology accessible to businesses of all sizes. We believe that AI has the power to transform industries and drive innovation across the globe.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team of AI experts, data scientists, and engineers work tirelessly to develop state-of-the-art solutions that solve real-world problems and create meaningful impact for our clients.
              </p>
              <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all">Join Our Team</Button>
            </div>
            <div className="neon-border">
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80" 
                alt="AI Team Collaboration" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="glass-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary mb-2">2018</h3>
                  <p className="font-semibold mb-2">Founded</p>
                  <p className="text-muted-foreground">AIHub was established with a vision to make AI accessible</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary mb-2">2021</h3>
                  <p className="font-semibold mb-2">Global Expansion</p>
                  <p className="text-muted-foreground">Expanded our services to 20+ countries worldwide</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary mb-2">2023</h3>
                  <p className="font-semibold mb-2">Innovation Award</p>
                  <p className="text-muted-foreground">Recognized as a leader in AI innovation</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 neon-border">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    description: "AI visionary with 15+ years in the industry",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Sophia Rodriguez",
    role: "Chief Data Scientist",
    description: "PhD in Machine Learning from Stanford",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Michael Kim",
    role: "CTO",
    description: "Former tech lead at Google AI",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Priya Sharma",
    role: "Head of Research",
    description: "Leading our NLP and computer vision teams",
    image: "https://images.unsplash.com/photo-1535468850893-d6e543fbd7f5?auto=format&fit=crop&w=300&q=80"
  }
];

export default About;
