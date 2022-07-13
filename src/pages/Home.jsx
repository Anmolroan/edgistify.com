import React from 'react'
import sample from "/Users/anmolkumar/Desktop/edgify/src/sample.mp4";
import "./Home.css"
function Home() {
  return (
    <div className="  ">
    <div className="absolute mt-80 text-white text-4xl ml-60 textOnvid">Reach your customers faster with India’s largest tech enabled
</div>
<div className="absolute mt-80 text-white pt-16 text-4xl ml-72 pl-8 textOnvid">DARK STORE & WAREHOUSING NETWORK</div>
<div className="absolute mt-96 text-white pt-20 text-2xl ml-72 pl-20  textOnvid">10 min to 2 hrs delivery & next day delivery for your brand</div>
<button className="absolute mt-96  text-white  text-xl ml-96  my-auto bg-white p-1 rounded-md text-teal-500 textOnvid">Get in touch</button>
<video className='videoTag  h-5/5 w-full' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
   
</video>

    </div>
  )
}

export default Home