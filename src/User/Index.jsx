import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import Trips from './Trips'
import Navbar from './Navbar'
import Prev_trips from './Prev_trips'
import Help from './Help'
import Login from './Login'
import Registrations from './Registrations'

const Index = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Trips />} />
                <Route path={'/prev_trips'} element={<Prev_trips />} />
                <Route path={'/help'} element={<Help />} />
                <Route path={'/Login'} element={<Login />}/>
                 <Route path={'/Reg'} element={<Registrations />}/>
                 <Route path={'/customer_support'} element={<Help />} />
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Index
