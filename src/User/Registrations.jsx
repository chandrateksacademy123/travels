import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Registrations=()=>{
    const [reg,setreg]=useState({
        Name:'',
        Email:'',
        Mobile:'',
        Password:'',
    })

    const nav=useNavigate()


    const register=(e)=>{
        e.preventDefault()
        axios.post('https://travelagency-dee31-default-rtdb.firebaseio.com/user.json',reg).then(r1=>{
            alert('Registraton Success ')
        })
        nav('/')
    }


    return (<>
    
    <div className="col-6 offset-3">
          <center><h2><b>Registration Form</b></h2></center>
            <form onSubmit={register}>
                  <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Name</label> 
                <input type="text" name='Name' onChange={(e)=>setreg({...reg,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Mobile</label> 
                <input type="tel" name='Mobile' onChange={(e)=>setreg({...reg,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email </label> 
                <input type="email" name='Email' onChange={(e)=>setreg({...reg,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name='Password' onChange={(e)=>setreg({...reg,[e.target.name]:e.target.value})} class="form-control" id="exampleInputPassword1" />
            </div>
            
            <div className='text-center'>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
             <center><a  href='/'>Go to User Login</a></center>
            </form>
    </div>
    </>)
}
export default Registrations