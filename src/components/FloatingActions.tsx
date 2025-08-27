import { MessageCircle, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check screen size on mount and resize
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) {
      // Always show on mobile
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;
      
      const footerPosition = footer.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      
      // Show buttons when footer is in view (with 200px offset)
      setIsVisible(footerPosition <= screenHeight - 200);
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLargeScreen]);

  const handleWhatsAppClick = () => {
    // Using the primary business number for WhatsApp
    const phoneNumber = '919082698271';
    const message = 'Hi! I\'m interested in learning more about zetrow\'s services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    // Using the primary business number for calls
    window.location.href = 'tel:+917021825796';
  };

  if (!isVisible) return null;

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