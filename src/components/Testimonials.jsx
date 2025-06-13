import React, { useEffect, useRef } from 'react';
import { StarIcon, UserIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testimonial-card');
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

  const testimonials = [
    {
      name: "Sarah Ahmed",
      location: "Dubai Resident",
      rating: 5,
      text: "Financify made our home buying process incredibly smooth. Their team found us the best rate and guided us every step of the way."
    },
    {
      name: "Mohammed Al-Rashid",
      location: "Abu Dhabi Resident",
      rating: 5,
      text: "Professional service and excellent communication. They helped us refinance and save thousands on our monthly payments."
    },
    {
      name: "Emily Johnson",
      location: "Sharjah Resident",
      rating: 5,
      text: "As a first-time buyer, I was nervous about the process. Financify's team made everything clear and stress-free."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-secondary-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real experiences from satisfied homeowners
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card animate-on-scroll"
            >
              <div className="card p-6 lg:p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-200">
                    <UserIcon className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;