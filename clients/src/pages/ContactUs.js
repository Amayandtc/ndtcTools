import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error.text);
      });
  };

  return (
    <div className="font-sans">
      {/* Top Contact Bar */}
      <div className="bg-[#131d3b] text-white text-sm flex justify-between items-center px-6 py-2">
        <div className="flex items-center space-x-6">
          
        </div>
        <div className="flex items-center space-x-2">
        <span>📞 +91-9739179490 / 7994409669</span>
          <span>📧</span>
          <span>nibinpattery@gmail.com</span>
        </div>
      </div>
      {/* Logo and Menu */}
      <header className="bg-white shadow-md py-3 px-10 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-16 mr-4" />
        </div>
        <nav className="space-x-6 font-semibold">
          <Link to="/" className="text-gray-800 hover:text-blue-500">Home</Link>
          <Link to="/aboutus" className="text-gray-800 hover:text-blue-500">About Us</Link>
          <Link to="/#services" className="text-gray-800 hover:text-blue-500">Services</Link>
          <Link to="/#products" className="text-gray-800 hover:text-blue-500">Products</Link>
          <Link to="/contactus" className="text-gray-800 hover:text-blue-500">Contact Us</Link>
        </nav>
      </header>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="p-3 border border-gray-300 rounded-md w-full"
            />
            <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="p-3 border border-gray-300 rounded-md w-full"
            />
            <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="p-3 border border-gray-300 rounded-md w-full"
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="p-3 border border-gray-300 rounded-md w-full"
            />
            <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="p-3 border border-gray-300 rounded-md md:col-span-2 w-full"
            ></textarea>
            <div className="md:col-span-2 text-center">
                <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                Send Message
                </button>
            </div>
            </form>
        </div>
      </section>
      <footer className="bg-gray-900 text-white text-center p-4">
        &copy; 2025 NDTC
      </footer>
    </div>
  );
}
