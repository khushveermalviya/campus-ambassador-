import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import contactData from './Data/ContactData.js';
const Contact = ({ image,name, contact, socialIcons }) => {
    const iconComponents = {
        twitter: FaTwitter,
        linkedin: FaLinkedin,
        github: FaGithub
    };

    return (
        <section className="flex flex-col items-center justify-center mb-7 mt-6 h-3/4 ">
         <img src={image} alt={name} className="rounded-full w-32 h-32 object-cover bg-gray-300" />
            <h2 className="text-2xl font-bold mt-4 text-slate-50">{name}</h2>
            <p className="text-lg mt-2 text-slate-100">{contact}</p>
            <div className="flex mt-4 text-slate-200">
                {socialIcons.map((icon, index) => {
                    const IconComponent = iconComponents[icon.name];
                    return (
                        <a
                            key={index}
                            href={icon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-2"
                        >
                            <IconComponent className="w-6 h-6" />
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default Contact;