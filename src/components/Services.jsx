import React, { useEffect, useRef } from 'react';
import { 
  HomeIcon, 
  ArrowPathIcon, 
  BuildingOfficeIcon, 
  HandshakeIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animated');
              }, index * 200);
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

  const services = [
    {
      icon: HomeIcon,
      title: "Home Purchase",
      description: "First-time buyer or upgrading? We'll find the perfect mortgage for your new home purchase.",
      link: "pages/our-services.html"
    },
    {
      icon: ArrowPathIcon,
      title: "Refinancing",
      description: "Lower your monthly payments or access equity with our competitive refinancing options.",
      link: "pages/our-services.html"
    },
    {
      icon: BuildingOfficeIcon,
      title: "Investment Property",
      description: "Build your property portfolio with specialized investment property mortgage solutions.",
      link: "pages/our-services.html"
    },
    {
      icon: HandshakeIcon,
      title: "Mortgage Consultation",
      description: "Expert advice and personalized guidance throughout your entire mortgage journey.",
      link: "pages/our-services.html"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Mortgage Services</h2>
          <p className="section-subtitle">
            Comprehensive mortgage solutions tailored to your unique financial situation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-on-scroll group"
            >
              <div className="card p-6 lg:p-8 text-center h-full flex flex-col">
                {/* Service Icon */}
                <div className="w-20 h-20 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                {/* Service Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold transition-all duration-300 group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;