import {useEffect,useState} from 'react'
import axios from 'axios'
const Restaurants = () => {
    const [info,setInfo] = useState([])

    useEffect( ()=> {
        axios
        .get("http://localhost:5000/api/restaurants")
       
        .then( response=> {setInfo(response.data)})
        .catch((error)=>{
            console.log(error)
        })
       
    },[info] )
     
    return(
  <div>

<div className="row  py-4 ">
      <div className="col text-center">
        <h1 className="">available Restaurants </h1>
      </div>
    </div>

    <div className="map">{ info && info.map((data)=><>
      <div className="key" key={data.id}></div>
       <div className='name' >{data.companyName}</div>
        <div className='descr'>{data.description}</div>
        <div className='address'>{data.address}</div>
        <div  className='takeout'>{data.takeOut}</div>
        <div className='price'>{data.deliveryPrice}</div>
        <div className='locations'>{data.deliveryLocations}</div>

        </>
        )}
   </div>

  </div>

    )
}

export default Restaurants