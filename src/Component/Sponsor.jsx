import React from 'react';

const Sponsor = ({ name, gift, logo }) => {
    return (
        <div className="flex flex-col items-center">
           
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-lg font-bold mb-2">{name}</h2>
                    <img src={logo} alt={name} className="w-16 h-16 mb-2" />
                    <p className="text-gray-600">{gift}</p>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
