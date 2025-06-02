import { Link } from 'react-router-dom';

export default function Home() {
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
      

      {/* About Section */}
      <section className="bg-gray-300 mb-6 py-16 px-2 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-2">At NDTC Technology & Tools Pvt. Ltd., we specialize in high-precision tool and die making, with a strong focus on mold manufacturing. Based in the industrial hub of Bangalore, our company is committed to delivering innovative and reliable solutions that meet the evolving needs of the manufacturing sector. With a team of skilled professionals and state-of-the-art facilities, we ensure every mold is crafted with accuracy, efficiency, and durability. Our dedication to quality and customer satisfaction has made us a trusted partner for clients across various industries.</p>
          </div>
          <div>
            <img src="/images/about.png" alt="About" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className="mb-5 px-8 bg-white" id="aboutus">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center space-x-4">
              <img
                src="/images/ceo.png"
                alt="CEO"
                className="w-24 h-24 object-cover rounded-full shadow"
              />
              <div>
                <h3 className="text-lg font-semibold">Mr. Nibin Pattery</h3>
                <p className="text-gray-600 text-sm">Founder & CEO, NDTC Tools</p>
              </div>
            </div>
            <div className="text-sm text-gray-700 space-y-3">
              <p><strong>📍 Address:</strong> NDTC Tools, 123 Industrial Road, Bengaluru, Karnataka, India</p>
              <p><strong>📞 Phone:</strong> +91-9739179490</p>
              <p><strong>📞 Alt Phone:</strong> +91-7994409669</p>
              <p><strong>📧 Email:</strong> nibinpattery@gmail.com</p>
              <p><strong>👨‍💼 CEO:</strong> Mr. Nibin Pattery</p>
            </div>
          </div>

          {/* CEO & Map */}
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.82878747141!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c4b7d6a3%3A0x5f5e6b3e5d01426b!2sBengaluru!5e0!3m2!1sen!2sin!4v1717000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        &copy; 2025 NDTC
      </footer>
    </div>
  );
}
