import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

    
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm text-secondary">
            We provide seamless ticket booking experiences for events, shows, and movies with convenience and reliability.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-accent transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
            </li>
            <li>
              <a href="#features" className="hover:text-accent transition-colors">Features</a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-sm text-secondary">Email: support@ticketmaster.com</p>
          <p className="text-sm text-secondary">Phone: +91 987 654 3210</p>
          <p className="text-sm text-secondary mt-2">Follow us on social media:</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
          </div>
        </div>

      </div>

      <div className="border-t border-accent mt-8 pt-4 text-center text-sm text-secondary">
        &copy; {new Date().getFullYear()} TicketBooking. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
