import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='container '>
<div className="home">
<div className="header">
        <h1>FOOD FOR ALL OCCASIONS</h1>
        <p>Here are at swipe foods we serve all kinds of food
          ranging from different varieties. We offer the best delivery 
          and pick up services you can come accross.you can view a list of our delivery 
          locations and dispatch <Link to='#' className='a'>here</Link>
          <br />
          <br />
        <div className="buttons">
        <button className='btn btn-success'><Link to='/menu' className='lin'>view menu</Link></button>
        
          <button className='btn btn-info '><Link to='/order' className='lin'>order now</Link></button>
        </div>
        </p>
      </div>
      <div className="home-img">
      <img src="./images/home-image.avif" alt="img" className=''/>
      </div>

      
</div>
<div className="head">
      <h3 className='card-title'> Get your food delivered to you in minutes</h3>
        <p>we deliver to all parts of the country at a cheaper rate</p>
      </div>
<footer>

      <div className="foot">
        <h4 className='alert alert-info'>secure payments</h4>
        <p>here at swipe we have one of the most secured payment options
          and thus you don't have to worry about we sharing your payment info.

        </p>
      </div>
      <div className='foot'>
        <h4 className='alert alert-info'>refund policy</h4>
        <p>if you do not receive your order in time we are sure to refund your money
          to you but we will definately deliver to you
        </p>
      </div>
      <div className="foot">
        <h4 className='alert alert-info'>discounts</h4>
        for every frequent buyer you get to get a massive discount on all of your orders
      </div>
 
</footer>
</div>
  )
}

export default Home