import React from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';

const Contact = ({ onClose, onBack }) => {
  return (
    <div className="min-h-screen bg-[#fdfdf8]">
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[48px] font-bold text-[#111] mb-8 tracking-tight">
            Contact
          </h1>
          <p className="text-[20px] text-[#333] mb-12 leading-relaxed">
            Have questions? Want to get involved? Reach out to us.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-12 mb-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-[#f26522] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-4xl font-bold">SL</span>
              </div>
              <div className="flex-1">
                <h2 className="text-[32px] font-bold text-[#111] mb-4">
                  Sam Liu
                </h2>
                <p className="text-[18px] text-[#333] leading-relaxed mb-6">
                  Connect with us on LinkedIn to learn more about the platform, share feedback, or explore collaboration opportunities.
                </p>
                <a 
                  href="https://www.linkedin.com/in/sam-liu-025b871a2/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#f26522] text-white px-6 py-3 rounded font-bold text-[16px] hover:bg-[#d9531e] transition-colors shadow-sm"
                >
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <div>
              <h2 className="text-[28px] font-bold text-[#111] mb-4">
                Get in Touch
              </h2>
              <p className="text-[18px] text-[#333] leading-relaxed">
                Whether you're a founder looking to list your startup, an investor seeking opportunities, or someone with ideas to improve the platform, we'd love to hear from you.
              </p>
            </div>

            <div>
              <h2 className="text-[28px] font-bold text-[#111] mb-4">
                Ways to Connect
              </h2>
              <ul className="space-y-3 text-[18px] text-[#333]">
                <li className="flex items-start gap-3">
                  <span className="text-[#f26522] font-bold mt-1">•</span>
                  <span><strong>LinkedIn</strong> - Connect with Sam Liu for direct communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f26522] font-bold mt-1">•</span>
                  <span><strong>Submit Your Startup</strong> - Use our submission form to get your startup listed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f26522] font-bold mt-1">•</span>
                  <span><strong>Feedback</strong> - Share your thoughts and suggestions to help us improve</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

