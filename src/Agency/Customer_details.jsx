import React, { useState } from 'react'

import axios from 'axios'

const Customer_details = () => {

      let [C_details,setCustomer]=useState([])

      axios.get('https://travelagency-dee31-default-rtdb.firebaseio.com/user.json').then(r1=>{
            // console.log(r1.data)
            setCustomer(r1.data)

        })

        let All_customers=[]


        // console.log(Object.keys(C_details))
        for (let x of Object.keys(C_details)){
             All_customers.push({
              'Name':C_details[x].Name,
              'Email':C_details[x].Email,
              'Mobile':C_details[x].Mobile,
              'Password':C_details[x].Password,
             })
        }


        




  return (
     <div class='container mt-5'>
<center><u><h5><b>Customer details</b></h5></u></center>
       <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
             <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {All_customers.map((x,index)=>  <tr>
            <th scope="row">{index+1}</th>
           
            <td>{x.Name}</td>
            <td>{x.Mobile}</td>
            <td>{x.Email}</td>
           
               <td>{x.Password}</td>
           
          </tr>)}
        
         
        </tbody>
      </table>
      
    </div>
  )
}

export default Customer_details
