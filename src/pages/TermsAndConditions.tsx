import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms and Conditions</h1>
          <div className="space-y-6 text-foreground">
            <p>
              Welcome to zetrow! These terms and conditions outline the rules and regulations for the use of zetrow's Website and Service, located at zetrow.com.
            </p>
            
            <p>
              By accessing this website and using our service, we assume you accept these terms and conditions. Do not continue to use zetrow if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Definitions</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li><strong>Company</strong> (referred to as "we", "us" or "our") refers to zetrow Services Pvt Ltd.</li>
              <li><strong>You</strong> refers to the individual or entity accessing or using the service.</li>
              <li><strong>Service</strong> refers to the zetrow platform and all related services.</li>
              <li><strong>Content</strong> refers to all information, data, text, images, or other materials uploaded or shared through our service.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Use License</h2>
            <p>
              Permission is granted to temporarily access and use zetrow for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>You must be at least 18 years old to use our service</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>We reserve the right to terminate accounts that violate these terms</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Service Terms</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Waste Management Services</h3>
            <p>zetrow provides a platform connecting businesses with waste management and recycling services. We facilitate:</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Waste collection scheduling and management</li>
              <li>Connection with certified recycling partners</li>
              <li>Transparent pricing and billing</li>
              <li>Environmental impact tracking</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Payment Terms</h3>
            <ul className="space-y-2 list-disc pl-6">
              <li>All fees are due as specified in your service agreement</li>
              <li>Late payments may result in service suspension</li>
              <li>Refunds are subject to our cancellation policy</li>
              <li>Prices may be updated with 30 days notice</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Prohibited Uses</h2>
            <p>You may not use our service:</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>For any unlawful purpose or to solicit others to take unlawful actions</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p>
              In no event shall zetrow Services Pvt Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Maharashtra, India, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us:</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>By email: legal@zetrow.com</li>
              <li>By phone: +91 90826 98271</li>
              <li>By mail: Shop No 9 Om CHS LTD Wing C Opp Neharu Road Santacruz East Mumbai Maharashtra 400055</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;