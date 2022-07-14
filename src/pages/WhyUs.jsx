import React from 'react'
import style from "./Why.module.css";
function WhyUs() {
  return (
    <div className="text-red-400"><p className={style.p}>Why us</p>
    <br />
    <br />
    <div className={style.why}>
      <div>
        <img src="https://www.edgistify.com/smartphone.png" />
        <h4>Live Tracking</h4>
        <p>
          Track your product across sorting, warehousing & last mile delivery
        </p>
      </div>
      <div>
        <img src="https://www.edgistify.com/route.png" />
        <h4>Route Optimization & Planning</h4>
        <p>
          Find the best route for your product, optimizing vehicle capacity
        </p>
      </div>
      <div>
        <img src="https://www.edgistify.com/aggregate.png" />
        <h4>Courier Aggregater</h4>
        <p>Get access to a network of 50+ courier shipping providers</p>
      </div>
      <div>
        <img src="https://www.edgistify.com/inventory.png" />
        <h4>Omnichannel Inventory Management</h4>
        <p>A single dashboard to manage orders from multiple marketplaces</p>
      </div>
      <div>
        <img src="https://www.edgistify.com/storage.png" />
        <h4>Flexible Inventory Storage</h4>
        <p>Scalable fulfillment services based on fluctuating orders</p>
      </div>
      <div>
        <img src="https://www.edgistify.com/van.png" />
        <h4>Accelerated Delivery Speed</h4>
        <p>
          10 minutes to 2 hour product delivery through a robust dark store
          network
        </p>
      </div>
    </div>
    <br />
    <br />
    <p className={style.p}>How are we different</p>
    <br />
    <div className={style.how}>
      <div>
        <img src="https://www.edgistify.com/solution.png" />
        <p>One point solution</p>
      </div>
      <div>
        <img src="https://www.edgistify.com/data-management.png" />
        <p>Tech-enabled platform</p>
      </div>
      <div>
        <img src="https://www.edgistify.com/warehouse1.png" />
        <p>Shared dark stores</p>
      </div>
      <div>
        <img src="https://www.edgistify.com/cost-perclick.png" />
        <p>Order per cost model</p>
      </div>
      <div>
        <img src="https://www.edgistify.com/coding.png" />
        <p>Minimal coding integeration</p>
      </div>
      <div>
        <img src="https://www.edgistify.com/cross-platform.png" />
        <p>Flexible platform</p>
      </div>
    </div>
    <br />
    <br />
    <p className={style.p}>Edgistify Effect</p>
    <br />
    <div className={style.effect}>
      <div>
        <h1>99%</h1>
        <h4>Delivery TAT accuracy</h4>
      </div>
      <div>
        <h1>12%</h1>
        <h4>Reduction in order fulfillment cost</h4>
      </div>
      <div>
        <h1>10%</h1>
        <h4>Increase in delivery NPS</h4>
      </div>
      <div>
        <h1>80%</h1>
        <h4>Reduction in invoicing errors</h4>
      </div>
    </div>
    <br/><br/>
     </div>
  )
}

export default WhyUs