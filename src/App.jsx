
import About from "./Component/About"


import Nav from "./Component/Nav"
import ContactData from "./Component/Data/ContactData.js"
import Main from "./Component/Main.jsx"

import Banner from './Component/Banner.jsx';
import Steps from './Component/Steps.jsx';
import FAQSection from './Component/FAQSection.jsx';
import Blink from 'tubelight-blink'
import Carousel from "./Component/Carousels.jsx"
import Become from "./Component/Become.jsx";
function App() {
  
  return (
    <div className='w-full  font-poppins bg-gradient-to-r from-slate-900 to-slate-700'> 
      <Banner/>
      <Main/>
     <Carousel/>
     <Steps/>
      <Become/>
  
    </div>
  );
}
export default App;
