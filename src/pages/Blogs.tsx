import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, User, Heart, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for First-Time Pet Owners",
    excerpt: "Welcoming a new pet into your home is exciting! Here are the essential things you need to know to give your new friend the best start.",
    category: "Pet Care",
    author: "Dr. Sarah Mitchell",
    date: "Dec 18, 2025",
    readTime: "5 min read",
    image: "🐾",
    likes: 234,
  },
  {
    id: 2,
    title: "Understanding Your Dog's Body Language",
    excerpt: "Learn to decode what your furry friend is trying to tell you through their posture, tail wagging, and facial expressions.",
    category: "Dog Behavior",
    author: "James Rodriguez",
    date: "Dec 15, 2025",
    readTime: "7 min read",
    image: "🐕",
    likes: 189,
  },
  {
    id: 3,
    title: "The Complete Guide to Cat Nutrition",
    excerpt: "Everything you need to know about feeding your cat the right food for optimal health and longevity.",
    category: "Cat Care",
    author: "Emily Chen",
    date: "Dec 12, 2025",
    readTime: "8 min read",
    image: "🐱",
    likes: 156,
  },
  {
    id: 4,
    title: "How to Safely Introduce Pets to Each Other",
    excerpt: "Bringing a new pet home when you already have one? Follow these steps for a smooth introduction.",
    category: "Pet Behavior",
    author: "Dr. Michael Brown",
    date: "Dec 10, 2025",
    readTime: "6 min read",
    image: "🐶🐱",
    likes: 198,
  },
  {
    id: 5,
    title: "Common Venomous Snakes and What to Do",
    excerpt: "Learn to identify dangerous snakes and the immediate steps to take if your pet encounters one.",
    category: "Safety",
    author: "Wildlife Expert Team",
    date: "Dec 8, 2025",
    readTime: "10 min read",
    image: "🐍",
    likes: 312,
  },
  {
    id: 6,
    title: "Indoor vs Outdoor Cats: Making the Right Choice",
    excerpt: "Weighing the pros and cons of letting your cat explore the outdoors versus keeping them safely inside.",
    category: "Cat Care",
    author: "Emily Chen",
    date: "Dec 5, 2025",
    readTime: "6 min read",
    image: "😺",
    likes: 145,
  },
];

const categories = ["All", "Pet Care", "Dog Behavior", "Cat Care", "Safety", "Training"];

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
        {/* Hero */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                <BookOpen className="w-4 h-4 inline mr-2" />
                Pet Care Blog
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Tips & <span className="text-gradient-warm">Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert advice, heartwarming stories, and everything you need to know about pet care.
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
                  <div className="h-48 bg-muted flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{post.image}</span>
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
                    <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                      Read More
                      <ArrowRight className="w-4 h-4" />
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

        {/* Newsletter */}
        <section className="py-20 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Get Weekly Pet Tips
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest articles, tips, and heartwarming stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <Button size="lg" className="bg-foreground text-primary-foreground hover:bg-foreground/90">
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
