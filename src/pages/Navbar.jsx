import React,{useRef,useState} from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import Solutions from './Solutions'
import WhyUs from './WhyUs'
function Navbar() {
  const homeRef=useRef(null);
  const whyRef=useRef(null);
  const solutionRef=useRef(null);
  const [flag,setFlag] =useState(true)
  return (
    <>
    <div className="flex bg-teal-500 text-white p-3 fixed top-0 left-0 right-0 w-full md:[] ">
     <Link to="/home" className=" pl-20">
     <button className="text-5xl font-serif " onClick={() =>{
      homeRef.current.scrollIntoView({
      behavior: "smooth"
    });

     }}>Edgistify</button>
     
     </Link>
     <Link className="ml-72 mt-4 "  to ="/home"onClick={() =>{
      setFlag(true)
      homeRef.current.scrollIntoView({
      behavior: "smooth"
    })}}>Home</Link>

     <Link  to ="whyus" className=" mt-4 ml-16" onClick={() =>{
      setFlag(true)
      whyRef.current.scrollIntoView({
      behavior: "smooth"
    })}}>Why Us</Link>

     <Link to="solutions" className="mt-4 ml-16" onClick={() =>{
      setFlag(true)
      solutionRef.current.scrollIntoView({
      behavior: "smooth"
    })}}>Solutions</Link>

     <Link to="team" className="mt-4 ml-16" onClick={() =>{setFlag(false)}}>Team</Link>
     <Link to="media" className="mt-4 ml-16" onClick={() =>{setFlag(false)}}>Media</Link>
     <Link to="joinus" className="mt-4 ml-16" onClick={() =>{setFlag(false)}}>Join Us</Link>
     <Link to="contact" className="mt-4 ml-16 bg-white p-1 rounded-md text-teal-500" onClick={() =>{setFlag(false)}}> Contact Us</Link>
     

    </div>
  
   {flag? <div>
    <div ref={homeRef} className="pt-16"><Home /></div>
     <div ref={whyRef}> <WhyUs/></div>
      <div   ref={solutionRef}> <Solutions /></div>
    </div>:""}
  
   
    
      </>
  )
}

export default Navbar