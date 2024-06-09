import About from "./Component/About"
import Contact from "./Component/Contect"
import Footer from "./Component/Footer"
import Nav from "./Component/Nav"
import ContactData from "./Component/Data/ContactData.js"
import Sponsor from "./Component/Sponsor.jsx"
import PartnersData from "./Component/Data/Sponser.js"
import Counter from "react-number-increment";
import Main from "./Component/Main.jsx"
function App() {
 

  return (
    <>
  
<Nav/>
<Main/>
    <About/>
  
    <div className="flex flex-row justify-evenly flex-wrap md:flex-nowrap bg-black">
        {ContactData.map((contact, index) => (
          <Contact 
            key={index}
            name={contact.name}
            contact={contact.contact}
            socialIcons={Object.entries(contact.socialLinks).map(([name, url]) => ({name, url}))}
          />
        ))}
      </div>

      <h1 className="text-center text-3xl font-bold mb-4">Sponsor</h1>
      <div className="grid lg:grid-cols-3 gap-6 justify-center items-center md:grid-cols-2">

{PartnersData.map((sponsor, index) => (
  <Sponsor
    key={index}
    name={sponsor.name}
    gift={sponsor.about}
    logo={sponsor.logo}
  />
))}
</div>
    <Footer/>
 
   
    </>
  )
}

export default App
