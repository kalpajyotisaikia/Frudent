import { BookOpen, Brain, Users, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">L</span>
              </div>
              <span className="text-xl font-bold">LearnHub</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Empowering students and professionals through comprehensive learning, 
              wellness, and development programs.
            </p>
            <div className="space-y-2 text-sm text-background/70">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@learnhub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Education St, Learning City</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-3">
              <Link to="/internship" className="flex items-center space-x-2 text-background/80 hover:text-background transition-colors group">
                <BookOpen className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Internship Program</span>
              </Link>
              <Link to="/mental-health" className="flex items-center space-x-2 text-background/80 hover:text-background transition-colors group">
                <Brain className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Mental Health</span>
              </Link>
              <Link to="/coaching" className="flex items-center space-x-2 text-background/80 hover:text-background transition-colors group">
                <Users className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Professional Coaching</span>
              </Link>
            </div>
          </div>

          {/* Student Access */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Student Portal</h3>
            <div className="space-y-3">
              <Link to="/internship/student-login" className="block text-background/80 hover:text-background transition-colors">
                Internship Access
              </Link>
              <Link to="/mental-health/student-login" className="block text-background/80 hover:text-background transition-colors">
                Mental Health Portal
              </Link>
              <Link to="/coaching/student-login" className="block text-background/80 hover:text-background transition-colors">
                Coaching Platform
              </Link>
            </div>
          </div>

          {/* Management Access */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Management Portal</h3>
            <div className="space-y-3">
              <Link to="/internship/management-login" className="block text-background/80 hover:text-background transition-colors">
                Internship Management
              </Link>
              <Link to="/mental-health/management-login" className="block text-background/80 hover:text-background transition-colors">
                Wellness Administration
              </Link>
              <Link to="/coaching/management-login" className="block text-background/80 hover:text-background transition-colors">
                Coaching Management
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 LearnHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-background/60 hover:text-background text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/60 hover:text-background text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/support" className="text-background/60 hover:text-background text-sm transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}