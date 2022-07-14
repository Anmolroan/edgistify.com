import React from 'react'
import sample from "/Users/anmolkumar/Desktop/edgify/src/sample.mp4";

import styles from "./Home.module.css";
import Plus from './Plus_plus/Plus';
import Card from './cards/Card';
import Clients from './OurClients/Clients';
function Home() {
  return (
    <div className="  ">
    <div className={styles.textOnvid1}>Reach your customers faster with India’s largest tech enabled
</div>
<div className={styles.textOnvid2}>DARK STORE & WAREHOUSING NETWORK</div>
<div className={styles.textOnvid3}>10 min to 2 hrs delivery & next day delivery for your brand</div>
<button className={styles.getinTouch}>Get in touch</button>
<video className='videoTag  h-5/5 w-full' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
   
</video>
  <Card/>
    <Plus/>
  <Clients/>
    </div>
  )
}

export default Home