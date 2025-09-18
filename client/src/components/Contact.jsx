import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData,
         [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);

      if (res.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message. Try again later.");
    }
  };

  return (
    <section id ='contact'className="min-h-screen bg-secondary flex items-center py-16">
      <div className="max-w-3xl mx-auto px-6 w-full">
       <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-10">
          Get In Touch
        </h1>
        <div className="bg-white rounded-2xl shadow-2xl p-10">
         <h2 className="text-3xl font-bold mb-6 text-primary text-center">Contact Us</h2>


          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-primary font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            <div>
              <label className="block text-primary font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            <div>
              <label className="block text-primary font-semibold mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border-2 border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-secondary py-3 rounded-lg font-semibold hover:bg-accent transition"
            >
              Send Message
            </button>

            {status && <p className="text-center mt-4 text-primary">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
