import React from 'react'
import Heading from './Heading'
import Count from './Count'
import Teaser from './Teaser'
import Footer from './Footer'
import Sponsor from './Sponsor'
import Nav from './Nav'
import Cards from './Cards'

export default function Main() {
  return (
    <div className='w-full h-full' style={{ backgroundColor: '#010113' }}>
      <Nav/>
<Heading /> 
<Cards/>
<Sponsor/>
{/* <Teaser /> */}
<Footer />

    </div>
  )
}
