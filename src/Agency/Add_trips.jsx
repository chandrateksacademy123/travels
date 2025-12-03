import axios from 'axios'
import React, { useState } from 'react'

const Add_trips = () => {

  const [trip,Addtrip] = useState({
      Travels_name:'',
      Contact:'',
      From:'',
      To:'',
      Available_seats:0,
      Ticket_price:'',
      From_Date_time:'',
      To_Date_time:'',
      Bus_type:'',

  })


  const Tripsubmit=(e)=>{
      e.preventDefault()
      axios.post('https://travelagency-dee31-default-rtdb.firebaseio.com/trips.json',trip).then(r1=>{
        alert('Trip Added')
      })
  }



  return (
    <div>

            <div className="col-6 offset-3">
          <center><h2><b>Add Trip</b></h2></center>
            <form onSubmit={Tripsubmit}>
                  <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Travelling Name</label> 
                <input type="text"  name='Travels_name' onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Contact</label> 
                <input type="tel" name='Contact'  onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})}   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
             
             <div class="mb-3">
                            <div class="input-group">
              
                                <select name='From'  onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})}   class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>From</option>
                <option value="HYD">HYD</option>
                <option value="BNGL">BNGL</option>
                <option value="TPT">TPT</option>
                </select>
                                <select name='To'  onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})}   class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>To</option>
                <option value="HYD">HYD</option>
                <option value="BNGL">BNGL</option>
                <option value="TPT">TPT</option>
                </select>
                </div>
            </div>
            
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Available Seats</label> 
                <input type="number" name='Available_seats'  onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})}   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
               <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ticket Price</label> 
                <input type="number" name='Ticket_price'  onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})}   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
          
            <div class="mb-3">
                            <div class="input-group">
                                <span class="input-group-text">Date|Timings</span>
                                <b>From</b>
                                 <input name='From_Date_time'  onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})}  type="datetime-local" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                     <b>To</b>
                                  <input name='To_Date_time'  onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})}  type="datetime-local" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                               
                </div>
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Bus Type</label> 
                 <select name='Bus_type'  onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})}  class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>--------Select Your Bus Type---------</option>
                <option value="AC/2+1 Sleeper">AC/2+1 Sleeper</option>
                <option value="NON-AC/2+1 Sleeper">NON-AC/2+1 Sleeper</option>
                <option value="AC/Sleeper">AC/Sleeper</option>
                <option value="NON-AC/Sleepe">NON-AC/Sleeper</option>
                
                </select>
                
            </div>



           
            
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    </div>


    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Travels_name</th>
      <th scope="col">Contact</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Available_seats</th>
      <th scope="col">Ticket_price</th>
      <th scope="col">From_Date_time</th>
      <th scope="col">To_Date_time</th>
      <th scope="col">Bus_type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="col">{trip.Travels_name}</th>
      <th scope="col">{trip.Contact}</th>
      <th scope="col">{trip.From}</th>
      <th scope="col">{trip.To}</th>
      <th scope="col">{trip.Available_seats}</th>
      <th scope="col">{trip.Ticket_price}</th>
      <th scope="col">{trip.From_Date_time}</th>
      <th scope="col">{trip.To_Date_time}</th>
      <th scope="col">{trip.Bus_type}</th>
    </tr>
   
  </tbody>
</table>
    </div>

      
    </div>
  )
}

export default Add_trips
