import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Users, UserCheck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export function ServicesSection() {
  const services = [
    {
      title: "Internship Program",
      description: "Connect students with industry-leading companies for meaningful internship experiences.",
      icon: BookOpen,
      gradient: "gradient-primary",
      studentPath: "/internship/student-login",
      managementPath: "/internship/management-login",
      features: [
        "Industry partnerships",
        "Skill-based matching",
        "Progress tracking",
        "Certification programs"
      ]
    },
    {
      title: "Mental Health Support",
      description: "Comprehensive mental wellness programs and professional counseling services.",
      icon: Brain,
      gradient: "gradient-secondary", 
      studentPath: "/mental-health/student-login",
      managementPath: "/mental-health/management-login",
      features: [
        "Licensed counselors",
        "Group therapy sessions",
        "Wellness workshops",
        "Crisis support"
      ]
    },
    {
      title: "Professional Coaching",
      description: "Expert coaching to accelerate personal and professional development.",
      icon: Users,
      gradient: "gradient-accent",
      studentPath: "/coaching/student-login", 
      managementPath: "/coaching/management-login",
      features: [
        "Career coaching",
        "Leadership development",
        "Goal setting",
        "Performance optimization"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your path and access tailored resources designed for both students and management.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-strong transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
              <div className={`absolute inset-0 bg-${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <CardHeader className="relative z-10 text-center pb-4">
                <div className={`w-20 h-20 bg-${service.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-medium`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-border/50">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Access Portal</h4>
                  
                  <Link to={service.studentPath}>
                    <Button 
                      variant="student" 
                      className="w-full justify-start group/btn"
                      size="lg"
                    >
                      <UserCheck className="mr-3 h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                      Student Access
                    </Button>
                  </Link>

                  <Link to={service.managementPath}>
                    <Button 
                      variant="management" 
                      className="w-full justify-start group/btn"
                      size="lg"
                    >
                      <Shield className="mr-3 h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                      Management Access
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}