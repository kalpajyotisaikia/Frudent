import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo placeholder - user can replace with their logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-white">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              LearnHub
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/internship" 
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <BookOpen size={18} />
            <span>Internships</span>
          </Link>
          <Link 
            to="/mental-health" 
            className="flex items-center space-x-2 text-muted-foreground hover:text-secondary transition-colors"
          >
            <Brain size={18} />
            <span>Mental Health</span>
          </Link>
          <Link 
            to="/coaching" 
            className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Users size={18} />
            <span>Coaching</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}