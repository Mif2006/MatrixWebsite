import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    const emailLink = `mailto:mifwebchain@gmail.com?subject=Message from ${name}&body=${message}`;
    window.location.href = emailLink;
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <nav className="flex items-center flex-grow p-4 mt-3 bg-transparent">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex items-center"
      >
        <h1 className="text-[#00FF00] cursor-pointer hover:text-white text-xl font-bold ml-6">
          Matrix App
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex flex-col md:flex-row lg:flex-row items-center text-2xl justify-center flex-grow"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
           <Link
                  to="features"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  About
                </Link>
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
          <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Testimonials
                </Link>
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
      <Link
                  to="pricing"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Pricing
                </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex items-center"
      >
        <button
          onClick={handleContactClick}
          className="text-[#00FF00] mr-6 border-[#00FF00] border-2 bg-transparent h-10 px-4 rounded-md hover:bg-[#00FF00] hover:text-white font-semibold"
        >
          Contact
        </button>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-1/3 rounded-lg p-8 relative"
            >
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <form onSubmit={handleEmailSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-lg">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 text-lg">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#00FF00] text-white py-2 px-4 rounded-md hover:bg-[#008800] font-semibold"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
