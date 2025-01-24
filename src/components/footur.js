import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2aa266] text-white py-12">
     

      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/placeholder.svg" // Ensure the image is in the public folder
              alt="PFTP Logo"
              width={200}
              height={50}
              className="mb-4"
            />
            <p className="mb-6">
              Professional Freelancing Training Program (PFTP) is an initiative that is highly appreciated by the Government of Pakistan to train the youth in different skill sets.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#FFA500]" />
                <p>General Head Office 484 Airline Society Mian Boulevard, Lahore, Punjab</p>
              </div>
              <div className="flex items-center gap-2 no-underline">
                <Mail className="w-5 h-5 text-[#FFA500] no-underline" />
                <a href="mailto:support@pftpedu.org">support@pftpedu.org</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#FFA500]" />
                <p>0318-4321118 | 0333-4996687</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">USEFUL LINKS</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link to="#" className="block text-[#f5f4f3] hover:text-[#FF8C00] no-underline">Complete Guide</Link>
                <Link to="#" className="block text-[#f5f4f3] hover:text-[#FF8C00] no-underline">How to Apply</Link>
                <Link to="#" className="block text-[#f5f4f3] hover:text-[#3a76f8] no-underline">How to Pay</Link>
                <Link to="#" className="block text-[#f5f4f3] hover:text-[#FF8C00] no-underline">Terms & Condition</Link>
                <Link to="#" className="block text-[#f5f4f3] hover:text-[#FF8C00] no-underline">Privacy Policy</Link>
                <Link to="#" className="block text-[#f5f4f3] hover:text-[#FF8C00] no-underline">SOPS</Link>
              </div>
              <div className="space-y-3">
                <Link to="#" className="block text-[#f5f4f3] hover:text-[#FF8C00] no-underline">Scholarships</Link>
                <Link to="#" className="block text-[#f5f4f3] hover:text-[#FF8C00] no-underline">Internships</Link>
                <Link to="#" className="block text-[#f5f4f3] hover:text-[#FF8C00] no-underline">Payment Partner</Link>
                <Link to="#" className="block text-[#f5f4f3] hover:text-[#FF8C00] no-underline">Contact Us</Link>
                <Link to="#" className="block text-[#f5f4f3] hover:text-[#FF8C00] no-underline">FAQs</Link>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/placeholder.svg" // Ensure this image is in the public folder
              alt="Institution Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2024 | Developed by PFTP</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-[#FFA500] no-underline icon-triangle">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link to="#" className="hover:text-[#FFA500] no-underline icon-triangle">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link to="#" className="hover:text-[#FFA500] no-underline icon-triangle">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link to="#" className="hover:text-[#FFA500] no-underline icon-triangle">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link to="#" className="hover:text-[#FFA500] no-underline icon-triangle">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
