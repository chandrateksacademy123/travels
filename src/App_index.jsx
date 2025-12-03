import React from 'react'

import { BrowserRouter ,Routes,Route } from 'react-router-dom'

import Trips from './User/Trips'
import Prev_trips from './User/Prev_trips'
import Login from './User/Login'
import Registrations from './User/Registrations'
import Help from './User/Help'
import Booking from './User/Booking'

// admin
import Adminlog from './Agency/Adminlog'
import Add_trips from './Agency/Add_trips'
import Booking_details from './Agency/Booking_details'
import Customer_details from './Agency/Customer_details'
import Trip_details from './Agency/Trip_details'
import App_navbar from './App_navbar'
import User_queries from './Agency/User_queries'


const App_index = () => {
  return (
    <div>
        <BrowserRouter>
        <App_navbar />
            <Routes>
                <Route path={'/trip'} element={<Trips />} />
                <Route path={'/prev_trips'} element={<Prev_trips />} />
                <Route path={'/travels'} element={<Login />}/>
                 <Route path={'/Reg'} element={<Registrations />}/>
                 <Route path={'/customer_support'} element={<Help />} />
                 <Route path={'/booking'} element={<Booking />} />
                
                 {/* Addmin */}
                  <Route path={'/admin'} element={<Adminlog />} />
                        <Route path={'/add_trips'} element={<Add_trips />} />
                        <Route path={'/booking_details'} element={<Booking_details />} />
                        <Route path={'/customer_details'} element={<Customer_details />} />
                        <Route path={'/trip_details'} element={<Trip_details />} />
                        <Route path={'/query_details'} element={<User_queries />} />
            </Routes>
        </BrowserRouter>


      
    </div>
  )
}

export default App_index
