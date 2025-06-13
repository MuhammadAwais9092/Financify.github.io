import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "pages/about-us.html" },
        { name: "Our Services", href: "pages/our-services.html" },
        { name: "Mortgage Calculator", href: "pages/mortgage-calculator.html" },
        { name: "Career", href: "pages/career.html" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Home Purchase", href: "pages/our-services.html" },
        { name: "Refinancing", href: "pages/our-services.html" },
        { name: "Investment Property", href: "pages/our-services.html" },
        { name: "Consultation", href: "pages/our-services.html" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", href: "pages/FAQS.html" },
        { name: "Contact Us", href: "pages/contatct-us.html" },
        { name: "Privacy Policy", href: "pages/privacy-policy.html" },
        { name: "Terms & Conditions", href: "pages/terms-conditions.html" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "fab fa-facebook" },
    { name: "Twitter", href: "#", icon: "fab fa-twitter" },
    { name: "LinkedIn", href: "#", icon: "fab fa-linkedin" },
    { name: "Instagram", href: "#", icon: "fab fa-instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/Public/financify-logo.png" 
                alt="Financify Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted mortgage partner in the UAE. We help you find the best mortgage deals 
              with expert guidance and personalized service.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Financify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;