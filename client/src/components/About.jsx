import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gradient-to-r from-secondary to-accent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
         <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://i.pinimg.com/1200x/a6/3e/be/a63ebe2690a4e83255ab9cf463d55fb1.jpg"
            alt="Ticket Illustration"
            className="w-80 h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>

        
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About QuickTickets</h2>
          <p className="text-secondary text-lg md:text-xl mb-8">
            QuickTickets is your go-to platform for booking tickets to movies, concerts, and events.  
            Our mission is to make ticket booking fast, simple, and reliable, so you never miss out 
            on your favorite experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white text-primary shadow-lg rounded-xl hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p>
                To provide a seamless ticket booking experience with secure payments, instant confirmation, 
                and top-notch customer support.
              </p>
            </div>

            <div className="p-6 bg-white text-primary shadow-lg rounded-xl hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p>
                To become the most trusted ticket booking platform, connecting people to the events they love, 
                effortlessly and securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
