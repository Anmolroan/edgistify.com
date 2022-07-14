import React from 'react'
import styles from "./clients.module.css"

const Whyus = () => {
  return (
    <div className={styles.container}>

    <div className={styles.whyusmain}>
        <div className={styles.products}>
            <div className={styles.imagediv}>
                <img className={styles.image} src={"https://www.edgistify.com/flipkart.png"}></img>
            </div>
        </div>


        <div className={styles.products}>
            <div className={styles.imagediv}>
            <img style ={{width:"139" ,height:"96px",paddingLeft:"5rem",paddingTop:"1rem"}} src={"https://www.edgistify.com/reliance.jpg"}></img>
               
            </div>
        </div>
        <div className={styles.products}>
            <div style ={{width:"169" ,height:"169px",paddingLeft:"5rem"}}>
                <img  src={"https://www.edgistify.com/Zepto.png"}></img>
            </div>
        </div>
        <div className={styles.products}>
            <div className={styles.imagediv}>
                <img style ={{width:"209" ,height:"70px",paddingLeft:"2rem",paddingTop:"1rem"}}  src={"https://www.edgistify.com/fraazo.png"}></img>
            </div>
        </div>
        <div className={styles.products}>
            <div className={styles.imagediv}>
            <img className={styles.pureplay} src={"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/sflxchppwpxl1lz9blpo"}></img>
            </div>
        </div>
        <div className={styles.products}>
            <div className={styles.imagediv}>
                <img style ={{width:"239" ,height:"76px",paddingLeft:"1rem"}} src={"https://www.edgistify.com/Kisanserv.png"}></img>
            </div>
        </div>
        <div className={styles.products}>
            <div className={styles.imagediv}>
                <img style ={{width:"109" ,height:"50px",paddingLeft:"5rem"}}  src={"https://www.edgistify.com/Kult.png"}></img>
            </div>
        </div>
        <div className={styles.products}>
            <div style ={{width:"109" ,height:"50px",paddingLeft:"3rem"}}>
                <img src={"https://www.edgistify.com/apnamart.png"}></img>
            </div>
        </div>
       <div className={styles.products}>
            <div className={styles.imagediv}>
                <img  style ={{width:"209" ,height:"64px"}} src={"https://www.edgistify.com/Pickkr.jpg"}></img>
            </div>
        </div>


        
</div>
 <div className={styles.bottomcard}>
        
       </div>
    </div>
  )
}

export default Whyus