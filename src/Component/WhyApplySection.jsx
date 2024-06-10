import React from 'react';
import { motion } from 'framer-motion';

const WhyApplySection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why Should You Apply?
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl">
          Becoming a Campus Ambassador offers a unique opportunity to develop your professional skills, network with industry leaders, and gain invaluable experience that will set you apart in the job market.
        </p>
        <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl">
          You will also receive exclusive training and mentorship, have the chance to earn rewards and recognition, and be part of a dynamic and supportive community.
        </p>
        <motion.img
          src="img.jpg" // Replace this URL with the actual URL of the online image you want to use
          alt="Why Apply"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-8 w-full max-w-md mx-auto"
        />
      </motion.div>
    </div>
  );
}

export default WhyApplySection;
