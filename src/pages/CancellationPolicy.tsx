import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cancellation Policy</h1>
          
          <p className="text-muted-foreground mb-6">Last updated: July 15, 2025</p>
          
          <div className="space-y-6 text-foreground">
            <p>
              This Cancellation Policy outlines the terms and conditions for canceling services with zetrow. We understand that business needs may change, and we strive to provide flexible options for our customers.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Service Cancellation</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Regular Services</h3>
            <ul className="space-y-3 list-disc pl-6">
              <li><strong>24-Hour Notice:</strong> For regular waste collection services, we require at least 24 hours advance notice for cancellation.</li>
              <li><strong>No Penalty:</strong> Cancellations made with proper notice will not incur any penalty fees.</li>
              <li><strong>Rescheduling:</strong> You may reschedule your service up to 2 hours before the scheduled pickup time.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Emergency Services</h3>
            <ul className="space-y-3 list-disc pl-6">
              <li><strong>2-Hour Notice:</strong> Emergency waste collection services require minimum 2 hours advance notice for cancellation.</li>
              <li><strong>Partial Charges:</strong> Cancellations made less than 2 hours before scheduled service may incur 25% of the service fee.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Subscription Services</h3>
            <ul className="space-y-3 list-disc pl-6">
              <li><strong>Monthly Plans:</strong> Can be cancelled at any time with 7 days notice. Service continues until the end of the current billing cycle.</li>
              <li><strong>Annual Plans:</strong> Can be cancelled with 30 days notice. Refunds are prorated based on unused service period.</li>
              <li><strong>No Setup Fee Refunds:</strong> Initial setup fees are non-refundable regardless of cancellation timing.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How to Cancel</h2>
            <p>You can cancel your services through any of the following methods:</p>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>Online:</strong> Log into your zetrow account and navigate to "Manage Services"</li>
              <li><strong>Phone:</strong> Call our customer service at +91 90826 98271</li>
              <li><strong>Email:</strong> Send a cancellation request to support@zetrow.com</li>
              <li><strong>Mobile App:</strong> Use the cancellation feature in the zetrow mobile application</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Policy</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Eligible Refunds</h3>
            <ul className="space-y-3 list-disc pl-6">
              <li><strong>Service Not Provided:</strong> Full refund if we fail to provide scheduled service without proper notice</li>
              <li><strong>Quality Issues:</strong> Partial or full refund for services that don't meet our quality standards</li>
              <li><strong>Subscription Cancellations:</strong> Prorated refunds for unused portions of annual subscriptions</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Non-Refundable Items</h3>
            <ul className="space-y-3 list-disc pl-6">
              <li>Setup fees and initial consultation charges</li>
              <li>Services already completed satisfactorily</li>
              <li>Cancellations due to customer unavailability</li>
              <li>Third-party processing fees</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Weather and Emergency Cancellations</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Force Majeure</h3>
            <p>
              zetrow reserves the right to cancel or postpone services due to extreme weather conditions, natural disasters, or other circumstances beyond our control. In such cases:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>No cancellation fees will be charged</li>
              <li>Services will be rescheduled at the earliest possible time</li>
              <li>Customers will be notified as soon as possible</li>
              <li>Full refunds available for prepaid services if rescheduling is not possible</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Processing Times</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>Cancellation Confirmation:</strong> Immediate confirmation via email or SMS</li>
              <li><strong>Refund Processing:</strong> 5-7 business days for most payment methods</li>
              <li><strong>Credit Card Refunds:</strong> May take 1-2 billing cycles to appear on statement</li>
              <li><strong>Bank Transfer Refunds:</strong> 3-5 business days</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Special Circumstances</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Medical Emergencies</h3>
            <p>
              We understand that medical emergencies can disrupt scheduled services. If you need to cancel due to a medical emergency, please contact us immediately. We will work with you to find a suitable solution.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Business Closure</h3>
            <p>
              If your business permanently closes, we can cancel all future services immediately with proper documentation. Refunds for prepaid services will be processed according to our standard refund policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Dispute Resolution</h2>
            <p>
              If you disagree with any cancellation charges or refund decisions, you may file a dispute within 30 days of the cancellation. We will review your case and respond within 5 business days.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>For any questions regarding this Cancellation Policy or to process a cancellation, please contact us:</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Email: support@zetrow.com</li>
              <li>Phone: +91 90826 98271</li>
              <li>Address: Shop No 9 Om CHS LTD Wing C Opp Neharu Road Santacruz East Mumbai Maharashtra 400055</li>
              <li>Customer Support Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</li>
            </ul>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <p className="text-sm">
                <strong>Note:</strong> This policy is subject to change. We will notify customers of any significant changes via email or through our platform. Continued use of our services after policy updates constitutes acceptance of the new terms.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CancellationPolicy;