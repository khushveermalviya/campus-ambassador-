import React from 'react';
import About from "./Component/About"
import Contact from "./Component/Contect"
import Footer from "./Component/Footer"
import Nav from "./Component/Nav"
import ContactData from "./Component/Data/ContactData.js"
import Main from "./Component/Main.jsx"
import WhyApplySection from "./Component/WhyApplySection.jsx"
import Banner from './Component/Banner.jsx';
import Steps from './Component/Steps.jsx';
import FAQSection from './Component/FAQSection.jsx';
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
        <Steps />
        <div className='w-full h-auto pb-60'>
        <img src='hackx2.png'  className='w-full h-101 p-64'></img>
        </div>
        
      <Banner />
      <FAQSection />
      </div>
      <h3 className="text-black text-6xl font-bold text-center w-full mb-6">Contact Us</h3>
      <div id="contact" className="flex flex-row justify-evenly flex-wrap md:flex-nowrap bg-wheat mb-7 py-8 rounded-lg ">
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
