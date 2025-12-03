import axios from 'axios'
import React, { useEffect, useState } from 'react'

const User_queries = () => {


    const [query,setquery]=useState([])

    useEffect(()=>{
            axios.get('https://travelagency-dee31-default-rtdb.firebaseio.com/help.json').then(r1=>{
                // console.log(r1.data)
                setquery(r1.data)
            })
    },[])

    let All_queries=[]
    for (let x of Object.keys(query)){
            All_queries.push({
                'Name':query[x].Name,
          'Mobile':query[x].Mobile,
          'Query':query[x].Query
            })
    }

  return (
    <div class='container mt-5'>
<center><u><h5><b>Query details</b></h5></u></center>
       <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Query</th>
           
          </tr>
        </thead>
        <tbody>

            {All_queries.map((x,index)=><tr>
                <td>{index+1}</td>
                <td>{x.Name}</td>
                <td>{x.Mobile}</td>
                <td>{x.Query}</td>
            </tr>)}
        
         
        </tbody>
      </table>
      
    </div>
  )
}

export default User_queries
