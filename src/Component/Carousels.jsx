export default function Carousels() {
const Carousel1=[{
 title:"internship Eligibility",
  img:"internship_icon.svg"
},
{
  title:"HackX Spotlighty",
  img:"Spotlight.svg"
},
{
  title:"Certificates & LoRs",
  img:"Certificates.svg"
},
{
  title:"Milestone Incentives",
  img:"Milestone.svg"
}

]
const Carousel2=[{
  title:"Networking",
   img:"Networking.svg"
 },
 {
   title:"Development",
   img:"Development.svg"
 },
 {
   title:"MUJ Experience Center",
   img:"MUJExperience.svg"
 },
 {
    title:"Lots of Goodies",
    img:"Goodies.svg"
 }
 ]

  return (  <div className="flex justify-center flex-col  w-full h-full gap-6 py-20 ">
    <div className="md:flex justify-center w-full h-full grid grid-flow-col-2 md:flex-col items-center lg:flex-row gap-6 lg:px-36 md:px-28">
      {Carousel1.map((item, index) => (
           <div
           key={index}
           className="w-full lg:w-1/4 h-80 flex flex-col justify-center items-center border-2  rounded-lg p-4 bg-gradient-to-r from-slate-700 to-slate-900 px-7"
         >
           <img src={item.img} alt="icon" className="w-24 h-24 mb-4 mt-6" />
           <div className="flex justify-center items-end align-bottom  h-1/2 w-full ">
           <p className="text-xl text-center  w-full h-10 bg-gradient-to-r from-zinc-800 to-slate-900 ">{item.title}</p>
           </div>
         </div>
      ))}
    </div>
    <div className="flex justify-center w-full h-full flex-col items-center lg:flex-row gap-6 lg:px-36">
      {Carousel2.map((item, index) => (
      <div
      key={index}
      className="w-full lg:w-1/4 h-80 flex flex-col justify-center items-center border-2  rounded-lg p-4 bg-gradient-to-r from-slate-700 to-slate-900"
    >
      <img src={item.img} alt="icon" className="w-24 h-24 mb-4 mt-6" />
      <div className="flex justify-center items-end align-bottom  h-1/2 w-full ">
      <p className="text-xl text-center  w-full h-10 bg-gradient-to-r from-zinc-800 to-slate-900 ">{item.title}</p>
      </div>
    </div>
      ))}
    </div>
  </div>
  )
}