import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "Evan Gwynne Davies",
    title: "Chief Executive Officer",
    image: "/api/placeholder/300/300", // Placeholder for team member photo
    linkedin: "#"
  },
  {
    name: "Mikey Pasciuto", 
    title: "Co-Founder",
    image: "/api/placeholder/300/300", // Placeholder for team member photo
    linkedin: "#"
  }
];

const MeetTheTeamSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            Meet the Team
          </h2>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-300 animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Photo with LinkedIn overlay */}
                <div className="relative group">
                  <div className="aspect-square bg-primary/20 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Team Member Photo</span>
                    </div>
                  </div>
                  
                  {/* LinkedIn Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <a 
                      href={member.linkedin}
                      className="w-8 h-8 bg-[#0077B5] text-white rounded flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;