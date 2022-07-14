import React from 'react'
import styles from "./card.module.css"

const Card = () => {
  return (
    <div className={styles.container}>
       <div className={styles.cardcontainer}>
             <div className={styles.card}>
             <div className={styles.cardheadingdiv}>
             <h1 className={styles.cardheading}>Super Fast Hyperlocal Order Fulfillment</h1>
             </div>
              <div className={styles.cardimagediv}>
                <img className={styles.cardimage} src={"https://www.edgistify.com/iconnew-04.png"}></img>
              </div>    
              <div className={styles.ptagdiv}>
                <p className={styles.cardptag}>Achieving TAT of 10 min to 2 hr across all metro cities</p>
              </div> 
              <div className={styles.cardbuttondiv}>
                <button className={styles.cardbutton}
                //  onClick={<Navigate to=("")></Navigate>}
                 >Get in touch</button>
              </div>         
            </div>
            <div className={styles.card}>
             <div className={styles.cardheadingdiv}>
             <h1 className={styles.cardheading}>Effortless Ecommerce Order Fulfillment</h1>
             </div>
              <div className={styles.cardimagediv}>
                <img className={styles.cardimage} src={"https://www.edgistify.com/iconnew-04.png"}></img>
              </div>    
              <div className={styles.ptagdiv}>
                <p className={styles.cardptag}>Extensive Warehousing Solution</p>
              </div> 
              <div className={styles.cardbuttondiv}>
                <button className={styles.cardbutton}
                //  onClick={<Navigate to=("")></Navigate>}
                >Get in touch</button>
              </div>         
            </div>
            <div className={styles.card}>
             <div className={styles.cardheadingdiv}>
             <h1 className={styles.cardheading}>Extensive Warehousing Solution</h1>
             </div>
              <div className={styles.cardimagediv}>
                <img className={styles.cardimage} src={"https://www.edgistify.com/iconnew-04.png"}></img>
              </div>    
              <div className={styles.ptagdiv}>
                <p className={styles.cardptag}>Achieving TAT of 10 min to 2 hr across all metro cities</p>
              </div> 
              <div className={styles.cardbuttondiv}>
                <button className={styles.cardbutton}
                    //  onClick={<Navigate to=("")></Navigate>}
                >Get in touch</button>
              </div>         
            </div>
       </div>

       <div className={styles.bottomcard}>
        <div className={styles.bottomcarddiv}>FBE - Fulfillment by Edgistify</div>
       </div>
    </div>
  )
}

export default Card