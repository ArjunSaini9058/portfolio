import React from 'react'
import './Subs.css'
function Subs() {
  return (
    <div className='subs-container'>
      <div className='subs-row1'>
        <p>Subscribe Our Newsletter</p>
      </div>
      <div className='subs-row2'>
        <input className='ip1' type='text' placeholder='Name:'/>
        <input className='ip2' type='email' placeholder='Enter Your Email'/>
        <button>SEND</button>
      </div>
    </div>
  )
}

export default Subs
