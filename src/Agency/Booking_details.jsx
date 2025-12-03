import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Booking_details = () => {

  const [booking,addbooking]=useState([])

  useEffect(()=>{
     axios.get('https://travelagency-dee31-default-rtdb.firebaseio.com/booking.json').then(r1=>{
            console.log(r1.data)
            addbooking(r1.data)
          })
  },[])

  let All_booking=[]

  for (let x of Object.keys(booking)){

    All_booking.push({
              user_name:booking[x].user_name,
              user_mobile:booking[x].user_mobile,
              'Available_seats':booking[x].Available_seats,
              'Bus_type':booking[x].Bus_type,
              'From':booking[x].From,
              'From_Date_time':booking[x].From_Date_time,
              'Ticket_price':booking[x].Ticket_price,
              'To':booking[x].To,
              'To_Date_time':booking[x].To_Date_time,
              'Travels_name':booking[x].Travels_name,
               Person_name:booking[x].Person_name,
               Person_mobile:booking[x].Person_mobile,
    })

  }





  return (
    <div class='container mt-5'>
<center><u><h5><b>Booking details</b></h5></u></center>
       <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Travels Name</th>
            <th scope="col">User Name</th>
            <th scope="col">User Mobile</th>
             <th scope="col">Traveller Name</th>
            <th scope="col">Traveller Mobile</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Date|time</th>
            <th scope="col">Ticket Price</th>
          </tr>
        </thead>
        <tbody>
          {All_booking.map((x,index)=>  <tr>
            <th scope="row">{index+1}</th>
            <td>{x.Travels_name}</td>
            <td>{x.user_name}</td>
            <td>{x.user_mobile}</td>
            <td>{x.Person_name}</td>
            <td>{x.Person_mobile}</td>
             <td>{x.From}</td>
              <td>{x.To}</td>
               <td>{x.From_Date_time}</td>
               <td>{x.Ticket_price}</td>
          </tr>)}
        
         
        </tbody>
      </table>
      
    </div>
  )
}

export default Booking_details
