import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Campus Ambassador Program</h1>
                <p className="text-gray-700">
                    The Campus Ambassador Program is an initiative aimed at promoting our organization and its values within educational institutions. It involves selecting passionate and dedicated students to represent us as ambassadors on their campuses.
                </p>
                <p className="text-gray-700 mt-4">
                    As a Campus Ambassador, you will play a crucial role in building brand awareness, fostering relationships with students and faculty, and organizing various events and activities. You will act as a liaison between our organization and your campus community.
                </p>
                <p className="text-gray-700 mt-4">
                    Our Campus Ambassador Program is designed to provide you with valuable skills and experiences that will enhance your personal and professional development. It offers opportunities for networking, leadership, and learning, while also allowing you to make a positive impact on your campus.
                </p>
                <p className="text-gray-700 mt-4">
                    Join us as a Campus Ambassador and become part of a dynamic community of like-minded individuals who are passionate about making a difference!
                </p>
            </div>
        </div>
    );
};

export default About;