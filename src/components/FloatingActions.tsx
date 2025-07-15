import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp business number
    const phoneNumber = '+1234567890';
    const message = 'Hi! I\'m interested in learning more about zetrow\'s services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    // Replace with actual business phone number
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group bg-[#25D366] hover:bg-[#20C157] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-strong hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCallClick}
        className="group bg-secondary hover:bg-secondary/90 text-secondary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-strong hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Tooltip for mobile */}
      <div className="hidden group-hover:block absolute right-16 bottom-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap">
        Contact Us
      </div>
    </div>
  );
};

export default FloatingActions;