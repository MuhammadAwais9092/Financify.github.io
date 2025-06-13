import React, { useEffect, useRef } from 'react';
import { CheckCircleIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const features = entry.target.querySelectorAll('.feature-item');
            features.forEach((feature, index) => {
              setTimeout(() => {
                feature.classList.add('animated');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Expert Guidance",
      description: "Professional mortgage advisors with deep market knowledge"
    },
    {
      title: "Best Rates",
      description: "Access to exclusive rates from 50+ banking partners"
    },
    {
      title: "Fast Processing",
      description: "Streamlined application process with quick approvals"
    },
    {
      title: "Transparent Service",
      description: "No hidden fees, clear terms, and honest advice"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-secondary mb-6">
              Why Choose Financify?
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              With years of experience in the UAE mortgage market, we provide unmatched expertise 
              and personalized service to help you secure the best mortgage deal.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item animate-on-scroll flex items-start gap-4"
                >
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 gradient-primary rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <ChartBarIcon className="h-32 w-32 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;