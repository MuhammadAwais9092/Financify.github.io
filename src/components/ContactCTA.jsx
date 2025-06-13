import React from 'react';
import { PhoneIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const ContactCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-secondary mb-6">
          Ready to Start Your Mortgage Journey?
        </h2>
        
        <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Get in touch with our expert team today for personalized mortgage advice and competitive rates.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="pages/contatct-us.html" className="btn-primary btn-large">
            <PhoneIcon className="h-5 w-5" />
            Contact Us Now
          </a>
          <a href="pages/FAQS.html" className="btn-secondary btn-large">
            <QuestionMarkCircleIcon className="h-5 w-5" />
            View FAQs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;