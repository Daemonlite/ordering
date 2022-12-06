import {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
function RegisterRestaurant() {
const  [profile,setProfile]=useState('')
const [companyName,setCompanyName]= useState('')
const [address,setAddress]= useState('')
const [description,setDescription]= useState('')
const [takeOut,setTakeOut]= useState('')
const [delivery,setDelivery]=useState('')
const [deliveryPrice,setDeliveryPrice]=useState('')
const [deliveryLocations,setDeliveryLocations]=useState('')

const handleSubmit = (e)=>{
    e.preventDefault()
   
    axios
    .post("http://localhost:5000/api/restaurants",{
        profile,
        companyName,
        address,
        description,
        takeOut,
        delivery,
        deliveryLocations,
        deliveryPrice,
    })
   
    .then( res =>toast.success(res.data) )
    .catch((err)=>{
        toast.error(err.response.data)
    })
}
  return (

    <div className="col-md-6 offset-md-3">
        <br />
    <div className="row  py-4 ">
      <div className="col text-center">
        <h1 className="card-title alert alert-secondary">Register Restaurant </h1>
      </div>
    </div>
 <form  onSubmit={handleSubmit} className='form-group'> 
 <div className="name">
        <label htmlFor="Name">Name of Restaurant</label>
        <input type="text" className='form-control' placeholder='name here...'onChange={(event) => { setCompanyName(event.target.value) } } value={companyName}/>
    </div>
    <div className="description">
        <label htmlFor="">Description</label>
        <textarea type="text"  className='form-control' placeholder='description here...' onChange={(event) => { setDescription(event.target.value) } } value={description}/>
    </div>
    <div className="address">
        <label htmlFor="description">address</label>
        <textarea  className='form-control' type="text" placeholder='address here...' onChange={(event) => { setAddress(event.target.value) } } value={address}/>
    </div>

    <div className="takeout">
        <label htmlFor="takeout">Takeout</label>
        <select type="text"  onChange={(event) => { setTakeOut(event.target.value) } }className='form-control' value={takeOut}>
            <option  className='form-control' value="choose">choose</option>
            <option className='form-control' value="Yes">Yes</option>
            <option className='form-control' value="No">No</option>
        </select>
    </div>
    <div className="delivery">
        <label htmlFor="delivery">Delivery</label>
        <select type="text"  onChange={(event) => { setDelivery(event.target.value) } } className='form-control' value={delivery}>
            <option className='form-control' value="choose">choose</option>
            <option className='form-control' value="Yes">Yes</option>
            <option className='form-control' value="No">No</option>
        </select>
    </div>
    <div className="deliveryPrice">
        <label htmlFor="deliveryPrice">deliveryPrice</label>
        <input type="text" className='form-control' placeholder='price here...' onChange={(event) => { setDeliveryPrice(event.target.value) } } value={deliveryPrice}/>
    </div>
    <div className="deliveryLocations">
        <label htmlFor="deliveryLocations">deliveryLocations</label>
        <textarea type="text" className='form-control' placeholder='delivery Locations here...' onChange={(event) => {setDeliveryLocations(event.target.value) } } value={deliveryLocations}/>
    </div>
    <br />
    <input type='submit' value='submit' className='btn btn-secondary  col-12'/>
 </form>
 
</div>
)
  }

  

export default RegisterRestaurant