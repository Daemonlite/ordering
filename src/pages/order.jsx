import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'

import {Modal} from  'antd'


const Order = () => {
const [fullName,setFullName]=useState("")
const [address,setAddress]=useState("")
const [phone,setPhone]=useState("")
const [email,setEmail]=useState("")
const [mealType,setMealType]=useState("")
const [quantity,setQuantity]=useState("")
const [ok,setOk] = useState(false)





 const handleSubmit = (e) =>{
    e.preventDefault()

    axios
.post("http://localhost:5000/api/orders",{
    fullName:fullName,
    address:address,
    phone:phone,
    email:email,
    mealType:mealType,
    quantity:quantity,

})

.then( res =>setOk(true) )
.catch((err)=>toast.error(err.response.data))
 }
    return (
        
    <div className="col-md-6 offset-md-3">
    <br />
<div className="row  py-4 ">
  <div className="col text-center">
    <h1 className="card-title alert alert-secondary">Place an order </h1>
  </div>
</div>
<form  onSubmit={handleSubmit} className='form-group'> 
<div className="name">
    <label htmlFor="Name">Full Name</label>
    <input type="text" className='form-control' placeholder='name here...'onChange={(event) => { setFullName(event.target.value) } } value={fullName}/>
</div>
<div className="description">
    <label htmlFor="">Phone Number</label>
    <input type="number"  className='form-control' placeholder='phonenumber...' onChange={(event) => { setPhone(event.target.value) } } value={phone}/>
</div>
<div className="address">
    <label htmlFor="description">address</label>
    <textarea  className='form-control' type="text" placeholder='address here...' onChange={(event) => { setAddress(event.target.value) } } value={address}/>
</div>

<div className="takeout">
    <label htmlFor="takeout">Email</label>
    <input type="email"  onChange={(event) => { setEmail(event.target.value) } }className='form-control' value={email}/>
  
</div>
<div className="delivery">
    <label htmlFor="delivery">Meal</label>
    <input type="text"  onChange={(event) => { setMealType(event.target.value) } } className='form-control' value={mealType} placeholder='enter the type of meal you want to order'/>
 
</div>
<div className="deliveryPrice">
    <label htmlFor="deliveryPrice">quantity</label>
    <select type="number" className='form-control' placeholder='price here...' onChange={(event) => { setQuantity(event.target.value) } } value={quantity}>
        <option value="select quantity">select quantity</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
</div>

<br />
<button type='submit' value='submit' className='btn btn-secondary  col-12' >Submit</button>
</form>


<div className="col text-center">
  
   </div>
     <div className='col'>
          <Modal
            title='congrats'
            open={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
              <p>order successful</p>

              <Link to='/menu' className='btn btn-primary btn-sm'>menu</Link>
             
             <Link to='/'  className='btn btn-info btn-sm'>home</Link>
            </Modal>
            </div>
</div>
    )
}

export default Order