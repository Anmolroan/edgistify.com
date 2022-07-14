import React from 'react'
import style from './team.module.css'
import { BsLinkedin } from 'react-icons/bs';

const Team = () => {
  return (
    <div className="pt-16">
    <div className={style.team_main} >
        <div className={style.up_div}>
        <div>
        <img src="https://www.edgistify.com/fullTeam.jpeg" alt="a" className={style.up_img}/>
        </div>
   <div className={style.para}>
    <p>Our resilience is built from the family-like support and culture that we have. We are a close-knit group & often huddle together to brainstorm our way to solutions. We highly value skills & we nurture constant learning.</p>
   <br />
   <p> <span >Join us</span>, if you want a great experience and wish to be a part of this dynamic team, that we otherwise call the – Edgistify Family.</p>
   </div>
   </div>

   <button className={style.founder_btn}>Founders</button>
   

<div className={style.founder}>

<div>
    <img src="https://www.edgistify.com/kamal.jpg" alt="kamal" />
<div className={style.found_name}>
<p>Kamal Kumawat</p>
<BsLinkedin className={style.icon}/>
</div>
</div>

<div>
    <img src="https://www.edgistify.com/antim.jpg" alt="kamal" />
<div className={style.found_name}>
<p>Kamal Kumawat</p>
<BsLinkedin className={style.icon}/>
</div>
</div>

<div>
    <img src="https://www.edgistify.com/umang.jpg" alt="kamal" />
<div className={style.found_name}>
<p>Kamal Kumawat</p>
<BsLinkedin className={style.icon}/>
</div>
</div>



</div>


    </div>
    </div>
  )
}

export default Team