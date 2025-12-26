import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, User, Heart, ArrowRight, Search, AlertTriangle, Shield } from "lucide-react";
import { useState } from "react";

import snakeRescueBasics from "@/assets/blogs/snake-rescue-basics.jpg";
import venomousSnakesIndia from "@/assets/blogs/venomous-snakes-india.jpg";
import snakeEncounter from "@/assets/blogs/snake-encounter.jpg";
import snakebiteFirstAid from "@/assets/blogs/snakebite-first-aid.jpg";
import nonVenomousSnakes from "@/assets/blogs/non-venomous-snakes.jpg";
import monsoonSnakes from "@/assets/blogs/monsoon-snakes.jpg";
import snakeRelease from "@/assets/blogs/snake-release.jpg";
import snakePrevention from "@/assets/blogs/snake-prevention.jpg";
import snakeConservation from "@/assets/blogs/snake-conservation.jpg";

const blogPosts = [
  {
    id: 1,
    title: "How to Identify Venomous Snakes in Maharashtra",
    excerpt: "Learn to identify the Big Four venomous snakes found in Pune and Maharashtra - Cobra, Krait, Russell's Viper, and Saw-scaled Viper. Know the key differences to stay safe.",
    category: "Snake Safety",
    author: "Dr. Rajesh Gokhale",
    date: "Dec 24, 2025",
    readTime: "8 min read",
    image: venomousSnakesIndia,
    likes: 456,
  },
  {
    id: 2,
    title: "What to Do When You Encounter a Snake at Home",
    excerpt: "Step-by-step guide on how to react when you find a snake in your house. Stay calm, keep distance, and call professional rescuers immediately.",
    category: "Emergency Guide",
    author: "Amit Sawant",
    date: "Dec 22, 2025",
    readTime: "6 min read",
    image: snakeEncounter,
    likes: 389,
  },
  {
    id: 3,
    title: "Common Non-Venomous Snakes in Pune - Know Your Friends",
    excerpt: "Not all snakes are dangerous! Learn about harmless snakes like Rat Snake, Wolf Snake, and Sand Boa that actually help control pests.",
    category: "Snake Awareness",
    author: "Wildlife Expert Team",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    image: nonVenomousSnakes,
    likes: 278,
  },
  {
    id: 4,
    title: "First Aid for Snake Bites - Every Second Counts",
    excerpt: "Critical first aid steps for snake bite victims. What to do and what NOT to do before reaching the hospital. This knowledge can save lives.",
    category: "Emergency Guide",
    author: "Dr. Sneha Patil",
    date: "Dec 18, 2025",
    readTime: "10 min read",
    image: snakebiteFirstAid,
    likes: 512,
  },
  {
    id: 5,
    title: "Monsoon Alert: Why Snakes Enter Homes During Rains",
    excerpt: "Understand why snake sightings increase during monsoon season. Learn preventive measures to snake-proof your home naturally.",
    category: "Prevention",
    author: "Priya Kulkarni",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    image: monsoonSnakes,
    likes: 345,
  },
  {
    id: 6,
    title: "The Importance of Snake Rescue Over Killing",
    excerpt: "Why killing snakes is illegal and harmful to ecosystem. Snakes control rodent population and maintain ecological balance. Always call a rescuer!",
    category: "Conservation",
    author: "Vikram Deshmukh",
    date: "Dec 12, 2025",
    readTime: "6 min read",
    image: snakeRelease,
    likes: 423,
  },
  {
    id: 7,
    title: "Teaching Children About Snake Safety",
    excerpt: "Age-appropriate ways to educate children about snakes without creating fear. Help kids understand these creatures and know how to stay safe.",
    category: "Education",
    author: "Anjali Joshi",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    image: snakeRescueBasics,
    likes: 267,
  },
  {
    id: 8,
    title: "Snake-Proofing Your Garden and Compound",
    excerpt: "Practical tips to make your outdoor spaces less attractive to snakes. From clearing debris to proper lighting - keep snakes away naturally.",
    category: "Prevention",
    author: "Landscape Expert Team",
    date: "Dec 8, 2025",
    readTime: "7 min read",
    image: snakePrevention,
    likes: 198,
  },
  {
    id: 9,
    title: "Myths vs Facts: Common Snake Misconceptions",
    excerpt: "Debunking popular myths about snakes - from milk-drinking cobras to snake charmers. Learn the scientific truth behind these beliefs.",
    category: "Education",
    author: "Dr. Rajesh Gokhale",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    image: snakeConservation,
    likes: 356,
  },
];

const categories = ["All", "Snake Safety", "Emergency Guide", "Snake Awareness", "Prevention", "Conservation", "Education"];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Emergency Banner */}
        <section className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4 flex items-center justify-center gap-3 text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Found a snake? Call our 24/7 rescue helpline: <strong>+91 20 2612 3456</strong></span>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                <Shield className="w-4 h-4 inline mr-2" />
                Snake Rescue Awareness
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Learn About <span className="text-gradient-warm">Snake Safety</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert guides on snake identification, safety measures, and why conservation matters. Stay informed, stay safe!
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary shadow-soft"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    <Button asChild variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Link to={`/blogs/${post.id}`}>
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Safety Tips Banner */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-warm rounded-3xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Remember: Never Kill a Snake!
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-6">
                Snakes are protected under the Wildlife Protection Act. Killing them is illegal and punishable. 
                Always call a professional rescuer who will safely relocate the snake.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Call Rescuer Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Stay <span className="text-gradient-warm">Informed</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Subscribe to receive the latest snake safety tips, rescue stories, and awareness updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
