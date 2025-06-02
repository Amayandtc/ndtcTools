import React, { useEffect, useState } from 'react';
import { FaCogs, FaRocket, FaStar, FaHandshake } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { useLocation } from 'react-router-dom';

SwiperCore.use([Autoplay]);


const slides = [
  {
    image: '/images/slider1.png',
    title: 'Your End-to-End Partner for Precision Tooling & Manufacturing',
    subtitle: 'At SS Tools, we provide complete solutions — from mold design to final production — all under one roof to meet your industrial needs with efficiency and excellence.',
  },
  {
    image: '/images/slider2.png',
    title: 'Expert Guidance & Unmatched Support at Every Stage',
    subtitle: 'Our experienced engineers and technical team are here to offer fast, effective, and personalized support throughout your project — from concept to completion.',
  },
  {
    image: '/images/slider3.png',
    title: 'Advanced Mold Making & High-Precision Plastic Components',
    subtitle: 'We design and manufacture top-quality injection molds and plastic parts with tight tolerances, helping our clients meet demanding quality and production goals.',
  },
];

const blocks = [
  { title: '🔧 Custom Mold Design & Manufacturing', note: 'We specialize in designing and manufacturing high-precision molds tailored to your unique product requirements — including injection molds, blow molds, compression molds, and more.' },
  { title: '🛠️ Tool & Die Engineering', note: 'We provide complete tool and die solutions including die design, die manufacturing, and die maintenance for sheet metal and plastic components.' },
  { title: '🧩 Plastic Injection Molding', note: 'High-quality plastic parts production with our in-house injection molding capabilities — ideal for low to high-volume production runs.' },
  { title: '🏗️ Prototype Development', note: 'Accelerate your product development with rapid prototyping services. We create functional prototypes that allow for testing and design refinement before mass production.' },
  { title: '⚙️ CNC Machining & Precision Components', note: 'Our CNC machining services deliver precision metal and plastic parts with tight tolerances — ideal for complex, custom components.' },
  { title: '🔍 Reverse Engineering', note: 'Need to recreate or improve an existing part? We provide reverse engineering services using 3D scanning and CAD modeling.' },
  { title: '🧼 Mold Maintenance & Repair', note: 'Extend the life of your molds with our maintenance and repair services — including cleaning, polishing, and refurbishing.' },
  { title: '🧊 Blow Molds', note: 'Durable blow molds designed for producing bottles, containers, and complex hollow parts with superior finish and accuracy.' },
  { title: '🧱 Die Casting Molds', note: 'Custom-designed die-casting molds for non-ferrous metal components, ensuring strength and dimensional stability.' },
  { title: '❄️ Cold Runner Mold Manufacturing', note: 'We design and manufacture cold runner molds that are cost-effective and ideal for high-volume production. Our cold runner systems ensure minimal material waste and reliable performance across production cycles.' },
  { title: '🧷 EDM (Electrical Discharge Machining)', note: 'We offer wire-cut and spark EDM services for extremely precise and intricate tooling needs.' },
  { title: '🧲 Precision Grinding & Surface Finishing', note: 'Achieve flawless precision with our surface grinding and finishing services. We deliver high-tolerance, smooth-surface components that meet exact specifications for critical applications.' },
  { title: '🧩 Multi-Cavity Mold Manufacturing', note: 'Boost your production efficiency with our expertly crafted multi-cavity molds. We ensure balanced flow, uniform cooling, and high repeatability to support large-scale manufacturing needs.' },
  { title: '🧪 Product Development Support', note: 'From concept to production, we offer end-to-end support throughout your product development journey. Our engineering team helps refine designs, select materials, and optimize tooling for manufacturability and performance.' },
  { title: '🏭 Production Support & Outsourcing', note: 'We assist clients with complete production solutions — from mold trial runs to outsourced manufacturing partnerships.' },
];

const products = [
  {
    id: 1,
    image: '/images/product1.jpg',
    title: 'Precision Injection Molds',
    description: 'High quality injection molds designed for durability and precision in manufacturing.',
    slug: 'precision-injection-molds',
  },
  {
    id: 2,
    image: '/images/product2.jpg',
    title: 'Blow Molding Tools',
    description: 'Efficient blow molding tools customized to suit your product specifications.',
    slug: 'blow-molding-tools',
  },
  {
    id: 3,
    image: '/images/product3.jpg',
    title: 'Compression Molds',
    description: 'Reliable compression molds engineered for consistent performance in mass production.',
    slug: 'compression-molds',
  },
];

export default function Home() {
  const [description, setDescription] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pages/home')
      .then((res) => setDescription(res.data.description))
      .catch((err) => console.error(err));
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 200); 
      }
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
          <Link to="/"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById('services');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-800 hover:text-blue-500">Services</Link>
          <Link to="/"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById('products');
                section?.scrollIntoView({ behavior: 'smooth' });
              }} className="text-gray-800 hover:text-blue-500">Product</Link>
          <Link to="/contactus" className="text-gray-800 hover:text-blue-500">Contact Us</Link>
        </nav>
      </header>

      {/* Hero Slider */}
      <div className="relative h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bg-black/60 h-full flex items-center text-white px-12">
              <div className="max-w-3xl text-left">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl max-w-[75%] leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* About Section */}
      <section className="py-10 px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-2">{description}</p>
          </div>
          <div>
            <img src="/images/about.png" alt="About" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className="py-6 bg-gradient-to-r from-white to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Customers</h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-10 rounded-full" />

          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="px-6"
          >
            {[
              { name: 'TAFE', src: '/images/customers/client.jpg' },
              { name: 'Funskool', src: '/images/customers/auma.png' },
              { name: 'Wildcraft', src: '/images/customers/auma.png' },
              { name: 'Auma', src: '/images/customers/client.jpg' },
              { name: 'Bosch', src: '/images/customers/auma.png' },
              { name: 'TVS', src: '/images/customers/client.jpg' },
              // Add more logos as needed
            ].map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 w-full h-24 flex items-center justify-center">
                  <img
                    src={client.src}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      {/* Three-line Note */}
      <section className="text-center py-6 px-4 bg-gray-50 text-gray-700 text-lg leading-relaxed">
        <p>Precision in every mold,</p>
        <p>innovation in every design — shaping </p>
        <p> tomorrow with trusted tool and die solutions from Bangalore.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Expertise</h2>
            <p className="text-gray-600 text-lg">
              Precision-driven solutions tailored for mold making and industrial tooling.<br />
              We combine engineering excellence with modern technology to serve your needs.
            </p>
          </div>

          {/* Animated Service Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {blocks.map((block, i) => (
              <div key={i} className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
                <p className="text-gray-600">{block.note}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side Image */}
          <div className="relative group">
            <img
              src="/images/why-choose-us.png"
              alt="Teamwork"
              className="rounded-xl shadow-2xl border-4 border-white"
            />
          </div>

          {/* Right Side Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why <span className="text-blue-400">Choose Us</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Box 1 */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                <FaStar className="text-3xl mb-2 text-white" />
                <h3 className="text-xl font-semibold mb-1">Quality First</h3>
                <p className="text-sm text-gray-100">We prioritize delivering high-quality products every time.</p>
              </div>
              {/* Box 2 */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-500 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                <FaRocket className="text-3xl mb-2 text-white" />
                <h3 className="text-xl font-semibold mb-1">Innovation</h3>
                <p className="text-sm text-gray-100">Our team constantly innovates to meet your growing needs.</p>
              </div>
              {/* Box 3 */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                <FaHandshake className="text-3xl mb-2 text-white" />
                <h3 className="text-xl font-semibold mb-1">Trust & Support</h3>
                <p className="text-sm text-gray-100">Reliable, transparent and always available to help you.</p>
              </div>
              {/* Box 4 */}
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                <FaCogs className="text-3xl mb-2 text-white" />
                <h3 className="text-xl font-semibold mb-1">Continuous Improvement</h3>
                <p className="text-sm text-gray-100">We constantly refine our process to deliver better value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="products" className="py-10 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border-t-4 border-blue-100"
              >
                <div className="w-full h-60 mb-6 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{product.description}</p>
                <Link
                  to={`/products/${product.slug}`}
                  className="mt-auto inline-block bg-blue-100 text-blue-800 font-medium px-5 py-2 rounded-full hover:bg-blue-200 transition"
                >
                  View More
                </Link>
              </div>
            ))}
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
