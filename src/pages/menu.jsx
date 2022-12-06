import React from 'react'

function Menu() {
  return (
    <div className='contain'>
    <div className="heading">
        <h1 className='cent'>Our various categories of meals </h1>
    </div>

    <h3 className="cent  att">
        Classy Appetizers 
    </h3>
    <br/>
    <br />
<div className="appetizers">
<div className="appt">
        <img src="./images/beerdip.jpg" alt="beerdip" className='img' loading='lazy' />
       <div className="options">
       <h4 className="food-name">Beer Dip</h4>
        <p className='amt'>$ 13 /plate</p>
       </div>
    </div>
    <div className="appt">
        <img src="./images/Antipasto kabobs.jpg" alt="beerdip"className='img ' loading='lazy'/>
      <div className="options">
      <h4 className="food-name"> Kabobs</h4>
        <p className='amt'>$ 10 /plate</p>
      </div>
    </div>
    <div className="appt">
       
        <img src="./images/tortilla.jpg" alt="beerdip" className='img' loading='lazy' />
    <div className="options">
    <h4 className="food-name"> Pinwheels</h4>
        <p className='amt'>$ 18 /plate</p>
    </div>
    </div>
    <div className="appt">
       
       <img src="./images/japaleno.jpg" alt="beerdip" className='img' loading='lazy'/>
    <div className="options">
    <h4 className="food-name">Poppers</h4>
       <p className='amt'>$ 12 /plate</p>
    </div>
   </div>
   <div className="appt">
       
       <img src="./images/burger.avif" alt="beerdip" className='img' loading='lazy'/>
     <div className="options">
     <h4 className="food-name">steak burger</h4>
       <p className='amt'>$ 15 /plate</p>
     </div>
   </div>
</div>
<div className="appetizers">
<div className="appt">
        <img src="./images/crostini.jpg" alt="beerdip" className='img' loading='lazy' />
   <div className="options">
   <h4 className="food-name">Crostini</h4>
        <p className='amt'>$ 12 /plate</p>
   </div>

    </div>
    <div className="appt">
        <img src="./images/main/pasta.jfif" alt="beerdip"className='img' loading='lazy'/>
  <div className="options">
  <h4 className="food-name">pasta</h4>
        <p className='amt'>$ 12 /plate</p>
  </div>
    </div>
    <div className="appt">
       
        <img src="./images/eggs.jpg" alt="beerdip" className='img' loading='lazy'/>
       <div className="options">
       <h4 className="food-name">Deviled Eggs</h4>
        <p className='amt'>$ 16 /plate</p>
       </div>
    </div>
    <div className="appt">
       
       <img src="./images/french toast.avif" alt="beerdip" className='img' loading='lazy'/>
<div className="options">
<h4 className="food-name">French Toast</h4>
       <p className='amt'>$ 10 /plate</p>
</div>
   </div>
   <div className="appt">
       
       <img src="./images/pizza.avif" alt="beerdip" className='img' loading='lazy'/>
   <div className="options">
   <h4 className="food-name">pizza</h4>
       <p className='amt'>$ 19 /plate</p>
   </div>
   </div>

   

</div>
<h3 className="cent  att alert alert-info">main dishes</h3>
<div className="main">
<div className="appt">
        <img src="./images/wraps.jpg" alt="beerdip"className='img' loading='lazy'/>
        <h4 className="food-name">Smoky Bacon Wraps</h4>
        <p className='amt'>$ 10 /plate</p>
       
    </div>
    <div className="appt">
       
        <img src="./images/main/carnitas.jpg" alt="beerdip" className='img' loading='lazy'/>
        <h4 className="food-name">Carnitas</h4>
        <p className='amt'>$ 13 /plate</p>

    </div>
    <div className="appt">
       
       <img src="./images/main/comida.avif" alt="beerdip" className='img' loading='lazy'/>
       <h4 className="food-name">comida</h4>
       <p className='amt'>$ 53 /plate</p>
   </div>
   <div className="appt">
       
       <img src="./images/main/Rollatini.jpg" alt="beerdip" className='img' loading='lazy'/>
       <h4 className="food-name">Rollatini</h4>
       <p className='amt'>$ 15 /plate</p>
   </div>
   <div className="appt">
       
       <img src="./images/main/stir fry.avif" alt="beerdip" className='img' loading='lazy'/>
       <h4 className="food-name">Rice stir fry</h4>
       <p className='amt'>$ 18 /plate</p>
   </div>
</div>


<div className="main">
<div className="appt">
        <img src="./images/main/flatlaypasta.avif" alt="beerdip"className='img' loading='lazy'/>
        <h4 className="food-name">Flat-lay pasta</h4>
        <p className='amt'>$ 19 /plate</p>
    </div>
    <div className="appt">
       
        <img src="./images/main/birria-tacos-hero.jpg" alt="beerdip" className='img' loading='lazy'/>
        <h4 className="food-name">Biria Tacos</h4>
        <p className='amt'>$ 12 /plate</p>
    </div>
    <div className="appt">
       
       <img src="./images/log.avif" alt="beerdip" className='img' loading='lazy'/>
       <h4 className="food-name">Boiled eggs</h4>
       <p className='amt'>$ 23 /plate</p>
   </div>
   <div className="appt">
       
       <img src="./images/main/omelettes.avif" alt="beerdip" className='img' loading='lazy'/>
       <h4 className="food-name">Omelettes</h4>
       <p className='amt'>$ 15 /plate</p>
   </div>
   <div className="appt">
       
       <img src="./images/main/vermicelli.avif" alt="beerdip" className='img' loading='lazy'/>
       <h4 className="food-name">vermicelli</h4>
       <p className='amt'>$ 18 /plate</p>
   </div>
</div>
</div>

  )
}

export default Menu