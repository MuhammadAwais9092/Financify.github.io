import React, { useState, useEffect } from 'react';
import { CalculatorIcon, PhoneIcon, HomeIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [formData, setFormData] = useState({
    propertyValue: '',
    downPayment: '',
    loanTerm: '25'
  });
  const [isCalculating, setIsCalculating] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    partners: 0,
    support: '24/7'
  });

  useEffect(() => {
    // Animate counters
    const animateCounter = (target, key, duration = 2000) => {
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(1000, 'clients');
            animateCounter(50, 'partners');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsElement = document.querySelector('.hero-stats');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'propertyValue' || name === 'downPayment') {
      // Format currency input
      const numericValue = value.replace(/[^\d]/g, '');
      const formattedValue = numericValue ? `AED ${parseInt(numericValue).toLocaleString()}` : '';
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      setIsCalculating(false);
      window.location.href = 'pages/mortgage-calculator.html';
    }, 1500);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 lg:pt-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-secondary leading-tight mb-6">
              Your Dream Home is Just a{' '}
              <span className="text-gradient relative">
                Mortgage Away
                <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary-500 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Get expert mortgage advice and competitive rates from UAE's most trusted mortgage brokers. 
              We make home financing simple, transparent, and tailored to your needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="pages/mortgage-calculator.html" className="btn-primary btn-large">
                <CalculatorIcon className="h-5 w-5" />
                Calculate Now
              </a>
              <a href="pages/contatct-us.html" className="btn-secondary btn-large">
                <PhoneIcon className="h-5 w-5" />
                Get Expert Advice
              </a>
            </div>

            {/* Hero Stats */}
            <div className="hero-stats flex justify-center lg:justify-start gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-500 font-secondary">
                  {counters.clients}+
                </div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-500 font-secondary">
                  {counters.partners}+
                </div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Bank Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-500 font-secondary">
                  24/7
                </div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Calculator Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="card w-full max-w-md p-6 lg:p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                  Quick Mortgage Check
                </h3>
                <HomeIcon className="h-8 w-8 text-primary-500" />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Value
                  </label>
                  <input
                    type="text"
                    name="propertyValue"
                    value={formData.propertyValue}
                    onChange={handleInputChange}
                    placeholder="AED 1,000,000"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Down Payment
                  </label>
                  <input
                    type="text"
                    name="downPayment"
                    value={formData.downPayment}
                    onChange={handleInputChange}
                    placeholder="AED 250,000"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term
                  </label>
                  <select
                    name="loanTerm"
                    value={formData.loanTerm}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="25">25 Years</option>
                    <option value="20">20 Years</option>
                    <option value="15">15 Years</option>
                  </select>
                </div>

                <button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    isCalculating
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-500 hover:bg-primary-600 hover:transform hover:-translate-y-1 hover:shadow-lg'
                  } text-white`}
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Payment'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;