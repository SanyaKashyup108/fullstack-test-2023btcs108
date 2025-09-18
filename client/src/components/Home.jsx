import React from "react";

const Home = () => {
  return (
    <div className="bg-secondary text-primary">
      
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-primary text-secondary shadow-md">
        <div className="font-bold text-xl">QuickTickets</div>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-accent">Home</a></li>
          <li><a href="#about" className="hover:text-accent">About</a></li>
          <li><a href="#features" className="hover:text-accent">Features</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>
      </nav>

      
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-28 md:py-20"
      >
        
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Book Your Tickets Instantly
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-md">
            QuickTickets helps you find and book tickets for movies, concerts, and events in seconds.  
            Enjoy hassle-free booking with <span className="font-semibold">secure payments</span> and 
            instant confirmation.
          </p>
          <a
            href="#contact"
            className="bg-primary text-secondary px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-accent transition"
          >
            Book Now
          </a>
        </div>

        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="https://i.pinimg.com/1200x/a6/3e/be/a63ebe2690a4e83255ab9cf463d55fb1.jpg" 
            alt="Ticket Illustration" 
           className="w-96 h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
