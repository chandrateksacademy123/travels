import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Booking = () => {
    const trip_details= useSelector(state=>state)
    // console.log(trip_details)
    const user_name=localStorage.getItem('user_Name')
    const user_mobile=localStorage.getItem('user_mobile')
   const nav= useNavigate()
    const [booking,addbooking]=useState({
      user_name:user_name,
      user_mobile:user_mobile,
        'Available_seats':trip_details.Available_seats,
              'Bus_type':trip_details.Bus_type,
              'From':trip_details.From,
              'From_Date_time':trip_details.From_Date_time,
              'Ticket_price':trip_details.Ticket_price,
              'To':trip_details.To,
              'To_Date_time':trip_details.To_Date_time,
              'Travels_name':trip_details.Travels_name,
      Person_name:'',
      Person_mobile:'',
    })

    console.log('booking :',booking)

    const booking_form=(e)=>{
      e.preventDefault()
      console.log('booking :',booking)
      axios.post('https://travelagency-dee31-default-rtdb.firebaseio.com/booking.json',booking).then(r1=>{
        alert('Booking Success!')
      })
      nav('/trips')
    }

   
  return (
    <div>
        
        <div className="col-6 offset-3">
          <center><h2><b>Booking details</b></h2></center>
            <form onSubmit={booking_form} >
                  <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Travelling Name</label> 
                <input type="text"  value={trip_details.Travels_name} name='Travels_name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
             
             
             <div class="mb-3">
                            <div class="input-group">
                             <input type="text"  value={trip_details.From} name='Travels_name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              <input type="text"  value={trip_details.To} name='Travels_name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                
                               
                </div>
            </div>
            
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Available Seats</label> 
                <input type="number" name='Available_seats'   value={trip_details.Available_seats}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
               <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ticket Price</label> 
                <input type="number" name='Ticket_price'   value={trip_details.Ticket_price}   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
          
            <div class="mb-3">
                            <div class="input-group">
                                <span class="input-group-text">Date|Timings</span>
                                <b>From</b>
                                 <input name='From_Date_time'  value={trip_details.From_Date_time}   type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                     <b>To</b>
                                  <input name='To_Date_time'   value={trip_details.To_Date_time}   type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                               
                </div>
            </div>

             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Person Name</label> 
                <input type="text" name='Person_name' onChange={(e)=>addbooking({...booking,[e.target.name]:e.target.value})}   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Person  Mobile</label> 
                <input type="tel" name='Person_mobile' onChange={(e)=>addbooking({...booking,[e.target.name]:e.target.value})}   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>

           



           <div className='text-center'>
            
            <button type="submit" class="btn btn-success">Book Now</button>
            </div>
            </form>
    </div>


      
    </div>
  )
}

export default Booking
