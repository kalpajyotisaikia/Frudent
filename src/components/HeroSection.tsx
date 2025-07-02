import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Brain, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-secondary-light to-accent-light opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Transform Your Future
            </span>
            <br />
            <span className="text-foreground">
              with Expert Guidance
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover opportunities, nurture your mental wellbeing, and unlock your potential 
            through our comprehensive platform for internships, mental health support, and professional coaching.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" className="group">
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="group bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Internship Hub</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connect with top companies and find meaningful internship opportunities 
              that align with your career goals and aspirations.
            </p>
          </div>

          <div className="group bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50">
            <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-secondary">Mental Wellness</h3>
            <p className="text-muted-foreground leading-relaxed">
              Access professional mental health resources, counseling, and wellness 
              programs designed to support your emotional wellbeing.
            </p>
          </div>

          <div className="group bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50">
            <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Professional Coaching</h3>
            <p className="text-muted-foreground leading-relaxed">
              Work with experienced coaches to develop your skills, build confidence, 
              and achieve your personal and professional goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}