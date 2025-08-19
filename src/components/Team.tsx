import { Linkedin } from 'lucide-react';
import teamCEO from '@/assets/team-ceo.jpg';
import teamCofounder from '@/assets/team-cofounder.jpg';

const teamMembers = [
  {
    name: "Maaz Nasimuddin Khan",
    title: "Founder",
    image: teamCEO,
    linkedin: "#"
  },
  {
    name: "Farhan Nihal Khan", 
    title: "Founder",
    image: teamCofounder,
    linkedin: "#"
  },
  {
    name: "Abusaad Atikullah Khan", 
    title: "Co-Founder",
    image: teamCofounder,
    linkedin: "#"
  }
];

const MeetTheTeamSection = () => {
  return (
    <section className="py-12 lg:py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center pb-4 border-b-2">
            Meet the Team
          </h2>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-300 animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Photo with LinkedIn overlay */}
                <div className="relative group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
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