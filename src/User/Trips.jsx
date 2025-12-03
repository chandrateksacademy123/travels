
import { useState } from "react"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Trips=()=>{
    const Trips=[{'Travels':'Sri Krishna Travels','Semi_info':'Ac / 2+1 sleeper','Bus_no':'AP03BR7898','Price':500,'Start_time':'09:00PM','End_time':'08:30AM','Available_seats':54},{'Travels':'Sri Krishna Travels','Semi_info':'Non-Ac/2+1 sleeper','Bus_no':'AP03AC6789','Price':300,'Start_time':'10:00PM','End_time':'09:30AM','Available_seats':34},{'Travels':'Sri Krishna Travels','Semi_info':'Ac / 2+1 sleeper','Bus_no':'AP03BR7898','Price':1000,'Start_time':'08:00PM','End_time':'06:30AM','Available_seats':109}]

    let nav=useNavigate()

    let dispatch=useDispatch()

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

      

   

     var [finall_data,setfinall]=useState([])
      const changing=(e)=>{
        
        let From_value=  document.querySelector('#From').value
        let To_value=  document.querySelector('#To').value
        console.log(From_value,To_value)
         if (From_value!=='' & To_value!=='' ){
                console.log('filter data :')
                let filter_trips=[]
                Available_trips.filter((x)=>{
                    if (String(x.From) ===String(From_value) & String(x.To) ===String(To_value)  ){
                        console.log('From Value :',x)
                        filter_trips.push(x)
                    }
                })
                 console.log('status :',filter_trips)
                //  finall_data.push(filter_trips)
                setfinall(filter_trips)

      }

      }
      console.log('finall :',finall_data)

     

      const trips_avl=(index)=>{
        console.log('select :',Available_trips[index])
        
       
        dispatch({type:'Available_seats','Available_seats':Available_trips[index].Available_seats})
        dispatch({type:'Bus_type','Bus_type':Available_trips[index].Bus_type})
        dispatch({type:'From','From':Available_trips[index].From})
        dispatch({type:'To','To':Available_trips[index].To})
        dispatch({type:'From_Date_time','From_Date_time':Available_trips[index].From_Date_time})
        dispatch({type:'Ticket_price','Ticket_price':Available_trips[index].Ticket_price})
        dispatch({type:'To_Date_time','To_Date_time':Available_trips[index].To_Date_time})
        dispatch({type:'Travels_name','Travels_name':Available_trips[index].Travels_name})
        
        nav('/booking')
      }


      const filter_index=(index)=>{
            console.log('select ;',finall_data[index])
            dispatch({type:'Available_seats','Available_seats':finall_data[index].Available_seats})
        dispatch({type:'Bus_type','Bus_type':finall_data[index].Bus_type})
        dispatch({type:'From','From':finall_data[index].From})
        dispatch({type:'To','To':finall_data[index].To})
        dispatch({type:'From_Date_time','From_Date_time':finall_data[index].From_Date_time})
        dispatch({type:'Ticket_price','Ticket_price':finall_data[index].Ticket_price})
        dispatch({type:'To_Date_time','To_Date_time':finall_data[index].To_Date_time})
        dispatch({type:'Travels_name','Travels_name':finall_data[index].Travels_name})
        nav('/booking')
      }


    

     

    
      
   
   
   
   return (<>
    <div className='container mt-3'>
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">Filter Here</span>
   <select name='From' id='From'  onChange={changing}   class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>From</option>
                <option value="HYD">HYD</option>
                <option value="BNGL">BNGL</option>
                <option value="TPT">TPT</option>
                </select>
                                <select name='To' id='To'   onChange={changing}   class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>To</option>
                <option value="HYD">HYD</option>
                <option value="BNGL">BNGL</option>
                <option value="TPT">TPT</option>
                </select>
</div>
    <div className='row '>
            { finall_data.length==0?  Available_trips.map((x,index)=> <div onClick={()=>trips_avl(index)} className='col-lg-4 col-md-4 col-sm-6'>
            <div className='border border-1 rounded rounded-3 p-3 m-1 bg-light'>
                <div className='d-flex justify-content-between'>
                    <span className='h4'><b>{x.Travels_name}</b> <br /> <span className='h6'> {x.Bus_type}  </span> </span>
                    <span>{x.Ticket_price}</span>
                </div>

                <div className='d-flex justify-content-between'>
                    <span>{x.From_Date_time.split('T')[1]} - {x.To_Date_time.split('T')[1]} </span>
                    <span><b>{x.Available_seats} Seats</b></span>
                </div>
                </div>
        </div>)
        
       :  finall_data.map((x,index)=> <div onClick={()=>filter_index(index)} className='col-lg-4 col-md-4 col-sm-6'>
            <div className='border border-1 rounded rounded-3 p-3 m-1 bg-light'>
                <div className='d-flex justify-content-between'>
                    <span className='h4'><b>{x.Travels_name}</b> <br /> <span className='h6'> {x.Bus_type}  </span> </span>
                    <span>{x.Ticket_price}</span>
                </div>

                <div className='d-flex justify-content-between'>
                    <span>{x.From_Date_time.split('T')[1]} - {x.To_Date_time.split('T')[1]} </span>
                    <span><b>{x.Available_seats} Seats</b></span>
                </div>
                </div>
        </div>) }
    </div>
    </div>
       
    </>)
}

export default Trips