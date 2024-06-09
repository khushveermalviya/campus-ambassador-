import React from 'react';

const Main = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/meeting.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Your Heading Here</h1>
          <p className="text-white text-lg sm:text-xl lg:text-2xl mb-8">Your subheading or additional text goes here. Make sure it's engaging!</p>
          <button className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">Call to Action</button>
        </div>
      </div>
    </section>
  );
};

export default Main;
