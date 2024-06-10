import React from 'react';
import About from "./Component/About"
import Contact from "./Component/Contect"
import Footer from "./Component/Footer"
import Nav from "./Component/Nav"
import ContactData from "./Component/Data/ContactData.js"
import Sponsor from "./Component/Sponsor.jsx"
import PartnersData from "./Component/Data/Sponser.js"
import Main from "./Component/Main.jsx"
import RegistrationForm from "./Component/RegistrationForm.jsx"
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
      <div id="contact" className="flex flex-row justify-evenly flex-wrap md:flex-nowrap bg-black mb-7 h-3/4 rounded-lg">
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
  )
}

export default App;
