import React from 'react'
import styles from "./plus.module.css"

const Plus = () => {
  return (
    <div>
    <div className={styles.container}>

    <div  className={styles.products}>
        <div className={styles.imagediv}><img className={styles.image} src={"https://www.edgistify.com/buildings.png"}></img></div>
        <div className={styles.datadiv}>
        <h2 className={styles.data}>150+</h2></div>
<div className={styles.titlediv}>
        <h4 className={styles.titles}>CITIES</h4></div>
    </div>
    
    <div  className={styles.products}>
        <div className={styles.imagediv}><img className={styles.image} src={"https://www.edgistify.com/online-sh.png"}></img></div>
        <div className={styles.datadiv}>
        <h2 className={styles.data}>200+</h2></div>
<div className={styles.titlediv}>
        <h4 className={styles.titles}>DARK STORES</h4></div>
    </div>
    
    <div  className={styles.products}>
        <div className={styles.imagediv}><img className={styles.image} src={"https://www.edgistify.com/order-delivery.png"}></img></div>
        <div className={styles.datadiv}>
        <h2 className={styles.data}>75+</h2></div>
<div className={styles.titlediv}>
        <h4 className={styles.titles}>MARKETPLACE</h4></div>
    </div>
    
    <div  className={styles.products}>
        <div className={styles.imagediv}><img className={styles.image} src={"https://www.edgistify.com/marketplace.png"}></img></div>
        <div className={styles.datadiv}>
        <h2 className={styles.data}>60000+</h2></div>
<div className={styles.titlediv}>
        <h4 className={styles.titles}>DAILY ORDERS</h4></div>
    </div>
    
  

    </div>
    <div className={styles.bottomcard}>
        <div className={styles.bottomcarddiv}>Our Clients</div>
       </div>
    </div>
  )
}

export default Plus