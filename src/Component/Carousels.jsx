export default function Carousels() {
const Carousel1=[{
 title:"internship Eligibility",
  img:"internship_icon.svg"
},
{
  title:"internship Eligibility",
  img:"internship_icon.svg"
},
{
  title:"internship Eligibility",
  img:"internship_icon.svg"
},
{
  title:"internship Eligibility",
  img:"internship_icon.svg"
}

]
const Carousel2=[{
  title:"internship Eligibility",
   img:"internship_icon.svg"
 },
 {
   title:"internship Eligibility",
   img:"internship_icon.svg"
 },
 {
   title:"internship Eligibility",
   img:"internship_icon.svg"
 },
 {
    title:"internship Eligibility",
    img:"internship_icon.svg"
 }
 ]

  return (
<div className="flex bg-white justify-center flex-col w-full h-full ">
<div className="flex justify-center w-full h-80 flex-col item-center lg:flex-row item-center">
{Carousel1.map((item,index)=>{
  return(
    <div className="w-1/4 h-78 flex bg-black justify-between flex-col items-center">
       <img src={item.img} alt="icon" key={index}  className="w-10 h-10"/>
       <p className="text-white h-5">{item.title}</p>
    </div>
  )
})}


</div>
<div className="flex justify-center w-full h-80 flex-col item-center lg:flex-row item-center">
{Carousel2.map((item,index)=>{
  return(
    <div className="w-1/4 h-78 flex bg-black justify-between flex-col items-center">
      <img src={item.img} alt="icon" key={index}  className="w-10 h-10"/>
      <p className="text-white h-5">{item.title}</p>
    </div>
  )
})}
</div>
</div>

  )
}