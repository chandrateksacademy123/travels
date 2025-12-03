import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Prev_trips = () => {
  const Trips=[{'Travels':'Sri Krishna Travels','Semi_info':'Ac / 2+1 sleeper','Bus_no':'AP03BR7898','Price':500,'Start_time':'09:00PM','End_time':'08:30AM','Available_seats':54},{'Travels':'Sri Krishna Travels','Semi_info':'Non-Ac/2+1 sleeper','Bus_no':'AP03AC6789','Price':300,'Start_time':'10:00PM','End_time':'09:30AM','Available_seats':34},{'Travels':'Sri Krishna Travels','Semi_info':'Ac / 2+1 sleeper','Bus_no':'AP03BR7898','Price':1000,'Start_time':'08:00PM','End_time':'06:30AM','Available_seats':109}]
   
    const [All_previous_trips,set_previous]=useState([])

  useEffect(()=>{
        axios.get('https://travelagency-dee31-default-rtdb.firebaseio.com/booking.json').then(r1=>{
    console.log(r1.data)
    set_previous(r1.data)

  })
  },[])


  let previous_trips=[]
  
  
  console.log("trips :",All_previous_trips)
  for (let x of Object.keys(All_previous_trips)){

        const user_name=localStorage.getItem('user_Name')
        const user_mobile=localStorage.getItem('user_mobile')
    
        if(String(user_mobile)===String(All_previous_trips[x].user_mobile)){
                 previous_trips.push(  {
            'Available_seats':All_previous_trips[x].Available_seats,
          'Bus_type':All_previous_trips[x].Bus_type,
          
          'From':All_previous_trips[x].From,
          'From_Date_time':All_previous_trips[x].From_Date_time,
          'Ticket_price':All_previous_trips[x].Ticket_price,
          'To':All_previous_trips[x].To,
          'To_Date_time':All_previous_trips[x].To_Date_time,
          'Travels_name':All_previous_trips[x].Travels_name,
          'Person_mobile':All_previous_trips[x].Person_mobile,
          'Person_name':All_previous_trips[x].Person_name,
          })
        }
      
  }
  console.log('previous trips :',previous_trips)




  
   
   
   return (<>
     <div class='container mt-5'>
<center><u><h5><b>Previous Trip details</b></h5></u></center>
       <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Travels Name</th>
            <th scope="col">Person Name</th>
            <th scope="col">Person Mobile</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">From Date|time</th>
            <th scope="col">To Date|time</th>
            <th scope="col">Ticket Price</th>
          </tr>
        </thead>
        <tbody>
            {previous_trips.map((x,index)=> <tr>
            <th scope="row">{index+1}</th>
            <td>{x.Travels_name}</td>
            <td>{x.Person_name}</td>
            <td>{x.Person_mobile}</td>
             <td>{x.From}</td>
              <td>{x.To}</td>
               <td>{x.From_Date_time}</td>
               <td>{x.To_Date_time}</td>
               <td>{x.Ticket_price}</td>
          </tr>)}
         
         
        </tbody>
      </table>
      
    </div>
       
    </>)
}

export default Prev_trips
