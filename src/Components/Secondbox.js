import React from 'react'
import Intro from './second/Intro'
import './Secondbox.css'
import Whychoose from './second/Whychoose'
import Practice from './second/Practice'
import Subs from './second/Subs'
import Clients from './second/Clients'
import Team from './second/Team'
import Faq from './second/Faq'
function Secondbox() {
  return (
    <div className='sec-container'>
      <Intro/>
      <Whychoose/>
      <Practice/>
      <Clients/>
      <Team/>
      <Faq/>
      <Subs/>
      <div className='space'>

      </div>
    </div>
  )
}

export default Secondbox
