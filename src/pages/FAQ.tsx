import { useState } from 'react';
import { FAQItem } from '@/components/FAQItem';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Zetrow?',
      answer: 'Zetrow is an online platform that makes it easy to sell your scrap materials. We handle everything from household items to industrial waste and vehicles, offering transparent pricing and convenient pickup services.'
    },
    {
      question: 'How do I get started with Zetrow?',
      answer: 'Simply download the app, create an account, and select the category of scrap you want to sell. You can then schedule a pickup and get paid for your materials.'
    },
    {
      question: 'What types of scrap do you accept?',
      answer: 'We accept a wide range of materials across five main categories:\n\n• Household: Common items like newspapers, plastic bottles, and old electronics.\n• Commercial: Office furniture, IT equipment, and business-related waste.\n• Industrial: Heavy-duty machinery and factory scrap.\n• Demolition: Construction debris and building materials.\n• Vehicle: Old cars, motorcycles, and vehicle parts.'
    },
    {
      question: 'Are your rates competitive?',
      answer: 'Yes. Our rates are based on the latest market prices for different materials. You can view our current rates directly on the app, ensuring you always get a fair price for your scrap.'
    },
    {
      question: 'How do you determine the price for my scrap?',
      answer: 'Prices are based on the type, weight, and current market value of the material. Our app provides a transparent rate chart, so you know exactly what you\'ll get before scheduling a pickup.'
    },
    {
      question: 'How will I be paid?',
      answer: 'We offer two convenient payment options:\n\n• Cash: Our pickup agent will pay you in cash at the time of collection.\n• UPI: The payment will be transferred instantly to your UPI account.'
    },
    {
      question: 'Do I need to sort my scrap before pickup?',
      answer: 'We appreciate it if you can separate your scrap by material type (e.g., plastics, metals, paper), as it helps our agents with the collection process.'
    },
    {
      question: 'Who will come to pick up the scrap?',
      answer: 'A verified Zetrow agent will arrive at your location at the scheduled time. All our agents carry an official ID.'
    },
    {
      question: 'Is my personal information safe with Zetrow?',
      answer: 'Yes, we take your privacy very seriously. All personal information and transaction details are encrypted and securely stored.'
    },
    {
      question: 'How can I update my UPI or contact details?',
      answer: 'You can update your personal information, including your UPI details, in the "My Profile" section of the app.'
    },
    {
      question: 'How do I sell my old vehicle?',
      answer: 'You can select the "Vehicle Scrap" category and provide the necessary details, such as the vehicle\'s model, year, and condition. Our team will then contact you to finalize the process and arrange for its pickup.'
    },
    {
      question: 'Can I sell industrial machinery or large scrap loads?',
      answer: 'Absolutely. For large or complex items, we recommend you use the "Industrial" category and provide details. Our team will contact you to discuss the logistics and provide a custom quote.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
            </div>
            
            <div className="max-w-5xl mx-auto bg-white rounded-xl overflow-hidden">
              <div className="divide-y divide-gray-200 p-4">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={activeIndex === index}
                    onClick={() => toggleAccordion(index)}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
