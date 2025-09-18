import React from "react";

const Features = () => {
  return (
    <section id="features" className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-secondary rounded-xl shadow-md hover:scale-105 transition transform">
            <h3 className="font-bold text-xl mb-2">Easy Booking</h3>
            <p>Book tickets for movies, concerts, and events in just a few clicks.</p>
          </div>
          <div className="p-6 bg-secondary rounded-xl shadow-md hover:scale-105 transition transform">
            <h3 className="font-bold text-xl mb-2">Secure Payment</h3>
            <p>Enjoy hassle-free and safe payments for all your bookings.</p>
          </div>
          <div className="p-6 bg-secondary rounded-xl shadow-md hover:scale-105 transition transform">
            <h3 className="font-bold text-xl mb-2">Instant Confirmation</h3>
            <p>Receive immediate booking confirmation so you never miss an event.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
