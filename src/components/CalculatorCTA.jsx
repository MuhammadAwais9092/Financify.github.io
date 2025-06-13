import React from 'react';
import { CalculatorIcon } from '@heroicons/react/24/outline';

const CalculatorCTA = () => {
  return (
    <section className="py-16 lg:py-24 gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold font-secondary mb-4">
              Ready to Calculate Your Mortgage?
            </h2>
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
              Use our advanced mortgage calculator to estimate your monthly payments 
              and find the perfect loan for your budget.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-end">
            <a
              href="pages/mortgage-calculator.html"
              className="inline-flex items-center gap-3 bg-white text-primary-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl text-lg"
            >
              <CalculatorIcon className="h-6 w-6" />
              Try Our Calculator
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorCTA;