import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Schedule a pickup',
    description: 'Book a convenient time for us to collect your items.',
    icon: (
     <img src="https://ikp.edgekit.net/y8s2vhk66ef/undraw_Online_calendar_re_wk3t_1_SHrgqjm1w6l.png?updatedAt=1628624813421" alt="" />
    ),
  },
  {
    title: 'Pickup at your address',
    description: 'Our team will arrive at your location for a hassle-free pickup.',
    icon: (
      <img src="https://ikp.edgekit.net/y8s2vhk66ef/undraw_Street_food_re_uwex_1_tHCc3auJgJY.png?updatedAt=16286248148534" alt="404" />
      
    ),
  },
  {
    title: 'Receive payment',
    description: 'Get paid instantly after your items are picked up and verified.',
    icon: (
      <img src="https://ikp.edgekit.net/y8s2vhk66ef/undraw_Credit_card_payments_re_qboh_1_Sop8u3hvUiX.png?updatedAt=1628624812461" alt="404" />
    ),
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2 text-center">{step.title}</h3>
              <p className="text-center text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
