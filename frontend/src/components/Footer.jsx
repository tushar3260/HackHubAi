import React from 'react';
import { Zap, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        'Brand Solutions',
        'Talent Sourcing',
        'Smart Screening',
        'Assessment Tools',
        'Interview Suite',
        'Automation'
      ]
    },
    {
      title: 'Opportunities',
      links: [
        'Challenges',
        'Assessments',
        'Hackathons',
        'Webinars',
        'Events',
        'Workshops'
      ]
    },
    {
      title: 'Career',
      links: [
        'Internships',
        'Jobs',
        'Scholarships'
      ]
    },
    {
      title: 'Learn',
      links: [
        'Courses',
        'Articles',
        'Tutorials',
        'Resources'
      ]
    },
    {
      title: 'Practice',
      links: [
        'Interview Prep',
        'Coding Challenges',
        'Mock Tests'
      ]
    }
  ];

  return (
    <footer className="relative py-16 px-6 bg-black border-t border-gray-800 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Upper section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-12">
          
          {/* Logo section */}
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-white">
              HackHub AI
            </span>
          </div>

          {/* Navigation links */}
          <div className="flex items-center space-x-10 text-sm text-gray-400">
            {['Privacy', 'Terms', 'Support', 'Docs', 'Blog'].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            {['T', 'G', 'D'].map((social, idx) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center border border-gray-800 hover:border-gray-700 transition-all"
              >
                <span className="text-sm text-gray-400">{social}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12 border-t border-gray-800 pt-12">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-1">
            <p className="text-sm text-gray-400 mb-8">
              Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">innovation</span> for the future
            </p>

            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-base text-white mb-3">Stay Connected</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Sales Inquiries</p>
                  <a href="mailto:sales@hackhub.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                    <Mail className="w-4 h-4" />
                    <span>sales@hackhub.ai</span>
                  </a>
                </div>

                <div>
                  <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+91-9876543210</span>
                  </a>
                  <p className="text-xs text-gray-500 ml-6">(Mon to Fri, 10:00 AM to 7:00 PM)</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-1">Support Inquiries</p>
                  <a href="mailto:support@hackhub.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                    <Mail className="w-4 h-4" />
                    <span>support@hackhub.ai</span>
                  </a>
                </div>
              </div>

              {/* Stay Updated */}
              <div className="mt-8">
                <h3 className="text-base text-white mb-2">Stay Updated</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Get the latest opportunities and updates to showcase your talent and accelerate your career
                </p>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-base text-white mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + bottom text */}
        <div className="pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © 2025 <span className="text-gray-300">HackHub AI</span>. All rights reserved. Built with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              innovation
            </span>{' '}
            and powered by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              AI
            </span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;