import {useEffect,useState} from 'react'
import axios from 'axios'
const Orders = () => {
    const [info,setInfo] = useState([])

    useEffect( ()=> {
        axios
        .get("http://localhost:5000/api/orders")
       
        .then( response=> {setInfo(response.data)})
        .catch((error)=>{
            console.log(error)
        })
       
    },[info] )
     
    return(
  <div className="col-md-6 offset-md-3">


<div className="row  py-4 ">
  <div className="col text-center">
    <h1 className="card-title alert alert-secondary tit">Pending orders </h1>
</div>
    </div>

    <div className="map">{ info && info.map((data)=>
    <div className='list-group'>
      <div className="key" key={data._id}>
      <div className='name alert alert-primary' >
       {data.fullName}</div>
       
        <div className='phone list-group-item'>{data.phone}</div>
        <div className='address list-group-item'>{data.address}</div>
        <div  className='email list-group-item'>{data.email}</div>
        <div className='meal list-group-item'>{data.mealType}</div>
        <div className='quantity list-group-item'>{data.quantity} piece(s)</div>
      </div>
        <br/>

        </div>
        )}
   </div>

  </div>

    )
}

export default Orders