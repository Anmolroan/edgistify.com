import React from 'react'
import style from "./Footer.module.css";

const Footr = () => {
  return (
    <div className={style.footer}>
        <div className={style.box}>
            <div>
                <img src="https://www.edgistify.com/Edgistify.png"/>
                <p>We are India's largest dark store & warehousing network enabling hyperlocal order fulfillment & ecommerce order fulfillment across India. Edgistify provides a tech-enabled OMS & WMS platform to scale business, reduce costs, automate processes, establish transparency and improve on-time delivery of products.</p>
            </div>
            <div className={style.box1}>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Mentors</li>
                    <li>Team Careers</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Newsrooms</li>
                    <li>Awards</li>
                    <li>Media &</li>
                    <li>mentions</li>
                </ul>
            </div>
            <div>
                <p>Social media</p>
                <div>
                    <img src="https://www.edgistify.com/facebook.png"/>
                    <img src="https://www.edgistify.com/twitter.png"/>
                    <img src="https://www.edgistify.com/youtube.png"/>
                    <img src="https://www.edgistify.com/instagram.png"/>
                    <img src="https://www.edgistify.com/linkdin.png"/>
                </div>
            </div>
            </div>
        </div>
        <br/>
        <div className={style.line}></div>
        <br/>
        <div className={style.box2}>
            <div>© 2022 OptiSupply Chain Solution Pvt Ltd | All Rights Reserved</div>
            <div>Privacy Policy</div>
            <div>Terms & conditions</div>
            <div>Sitemap</div>
        </div>
    </div>
  )
}

export default Footr