import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Play, Clock, Star, Users, CheckCircle, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Basic Obedience Training",
    description: "Teach your dog essential commands like sit, stay, come, and heel.",
    duration: "4 weeks",
    lessons: 12,
    rating: 4.9,
    students: 1234,
    level: "Beginner",
    image: "🐕",
    color: "bg-primary/10",
  },
  {
    id: 2,
    title: "Puppy Socialization",
    description: "Help your puppy develop confidence and social skills with other pets and people.",
    duration: "3 weeks",
    lessons: 8,
    rating: 4.8,
    students: 987,
    level: "Beginner",
    image: "🐶",
    color: "bg-accent/10",
  },
  {
    id: 3,
    title: "Advanced Tricks & Agility",
    description: "Take training to the next level with advanced tricks and agility exercises.",
    duration: "6 weeks",
    lessons: 18,
    rating: 4.7,
    students: 567,
    level: "Advanced",
    image: "🦮",
    color: "bg-success/10",
  },
  {
    id: 4,
    title: "Cat Behavior & Training",
    description: "Understand cat psychology and learn effective training techniques.",
    duration: "3 weeks",
    lessons: 10,
    rating: 4.8,
    students: 789,
    level: "Beginner",
    image: "🐱",
    color: "bg-secondary",
  },
];

const ETraining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                <GraduationCap className="w-4 h-4 inline mr-2" />
                Expert-Led Courses
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Online Pet <span className="text-gradient-warm">Training</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Learn from certified trainers with our comprehensive video courses. Train your pet from the comfort of home.
              </p>
              <Button variant="hero" size="xl">
                <Play className="w-5 h-5" />
                Browse Courses
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">20+</div>
                <div className="text-muted-foreground text-sm">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">10k+</div>
                <div className="text-muted-foreground text-sm">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">4.8</div>
                <div className="text-muted-foreground text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">95%</div>
                <div className="text-muted-foreground text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Popular <span className="text-gradient-warm">Courses</span>
              </h2>
              <p className="text-muted-foreground">Start your training journey with these highly-rated courses</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className={`sm:w-48 h-48 sm:h-auto flex items-center justify-center ${course.color}`}>
                      <span className="text-8xl group-hover:scale-110 transition-transform duration-300">{course.image}</span>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                          {course.level}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-warning fill-warning" />
                          <span className="text-sm font-semibold">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Play className="w-4 h-4" />
                          {course.lessons} lessons
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {course.students.toLocaleString()} students
                        </div>
                      </div>
                      <Button variant="hero">
                        Start Learning
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Why Learn <span className="text-gradient-warm">With Us?</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Certified professional trainers",
                    "Positive reinforcement techniques only",
                    "Lifetime access to course materials",
                    "Interactive Q&A with trainers",
                    "Progress tracking and certificates",
                    "30-day money-back guarantee",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-warm rounded-3xl p-12 text-center text-primary-foreground">
                <GraduationCap className="w-20 h-20 mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">Get Certified</h3>
                <p className="text-primary-foreground/80 mb-6">Complete courses and earn certification badges</p>
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ETraining;
