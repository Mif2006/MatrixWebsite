import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CustomButton from './CustomButton';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam felis velit, a placerat ligula lacinia et.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      quote: 'Vestibulum nec metus quis justo vestibulum vestibulum. Morbi varius nunc sit amet dui faucibus, ut laoreet elit semper.',
    },
    {
      id: 3,
      name: 'David Johnson',
      quote: 'Aenean sagittis ligula ac velit pellentesque, at pretium elit tincidunt. Nunc eleifend arcu at sapien ullamcorper iaculis.',
    },
  ];

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const testimonialsSection = document.getElementById('testimonials');
      const { top } = testimonialsSection.getBoundingClientRect();
      const isVisible = top < window.innerHeight - 100;

      if (isVisible) {
        controls.start({ opacity: 1, scale: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <section className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md px-10 py-16 mb-[300px]" id="testimonials" >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={controls}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>
              <p className="text-white font-bold">{testimonial.name}</p>
            </motion.div>
          ))}
       
        </div>
        <div className='flex justify-center mt-10'>
          <CustomButton text="Pricing" link="pricing" />
          </div>
      </div>
    </section>
  );
};

export default Testimonials;
