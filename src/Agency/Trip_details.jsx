import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Trip_details = () => {

  const [trips,Addtrips]= useState([])
  useEffect(()=>{
       axios.get('https://travelagency-dee31-default-rtdb.firebaseio.com/trips.json').then(r1=>{
    // console.log(r1.data)
    Addtrips(r1.data)

  })
  
  },[])


  let Available_trips=[]
  

  console.log("trips :",trips)
  for (let x of Object.keys(trips)){

       Available_trips.push(  {
            'Available_seats':trips[x].Available_seats,
          'Bus_type':trips[x].Bus_type,
          'Contact':trips[x].Contact,
          'From':trips[x].From,
          'From_Date_time':trips[x].From_Date_time,
          'Ticket_price':trips[x].Ticket_price,
          'To':trips[x].To,
          'To_Date_time':trips[x].To_Date_time,
          'Travels_name':trips[x].Travels_name
          })
  }
  console.log('available trips :',Available_trips)
  
  
    

  return (
   <div class='container mt-5'>
<center><u><h5><b>Trip details</b></h5></u></center>
       <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Travels Name</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Driver Mobile</th>
            <th scope="col">Available Seats</th>

            <th scope="col">From Date|time</th>
             <th scope="col">To Date|time</th>
          </tr>
        </thead>
        <tbody>

          {
            Available_trips.map((x,index)=> <tr>
            <th scope="row">{index+1}</th>
           <td>{x.Travels_name}</td>
            <td>{x.From}</td>
            <td>{x.To}</td>
            <td>{x.Contact}</td>
            <td>{x.Available_seats}</td>
               <td>{x.From_Date_time}</td>
               <td>{x.To_Date_time}</td>
          </tr>)
          }
         
         
        </tbody>
      </table>
      
    </div>
  )
}

export default Trip_details
