import React from 'react';
import About from "./Component/About"
import Contact from "./Component/Contect"
import Footer from "./Component/Footer"
import Nav from "./Component/Nav"
import ContactData from "./Component/Data/ContactData.js"
import Main from "./Component/Main.jsx"
import WhyApplySection from "./Component/WhyApplySection.jsx"

function App() {
  return (
    <>
      <Nav />
      <div id="home">
        <Main />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="responsibilities">
        <WhyApplySection />
      </div>
      <h3 className="text-black text-6xl font-bold text-center w-full mb-6">Contact Us</h3>
      <div id="contact" className="flex flex-row justify-evenly flex-wrap md:flex-nowrap bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-7 py-8 rounded-lg ">
        {ContactData.map((contact, index) => (
          <Contact
            key={index}
            image={contact.image}
            name={contact.name}
            contact={contact.contact}
            socialIcons={Object.entries(contact.socialLinks).map(([name, url]) => ({ name, url }))}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default App;
