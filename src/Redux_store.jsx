import React from 'react'

import { createStore } from 'redux'

const Store_details={
    user_login:false,
    admin_login:false,
      Travels_name:'',
      Contact:'',
      From:'',
      To:'',
      Available_seats:0,
      Ticket_price:'',
      From_Date_time:'',
      To_Date_time:'',
      Bus_type:'',
      Trip_id:'',
}




const Redux_store = (state=Store_details,action) => {
            switch (action.type){
                case 'USER':
                    return {...state,user_login:true,admin_login:false}
                case 'ADMIN':
                    return {...state,user_login:false,admin_login:true}
                case 'RM_USER':
                    return {...state,user_login:false}
                case 'RM_ADMIN':
                    return {...state,admin_login:false}
                case 'Travels_name':
                    return {...state,Travels_name:action.Travels_name}
                case 'From':
                    return {...state,From:action.From}
                case 'To':
                    return {...state,To:action.To}
                case 'Available_seats':
                    return {...state,Available_seats:action.Available_seats}
                case 'Bus_type':
                    return {...state,Bus_type:action.Bus_type}
                case 'From_Date_time':
                    return {...state,From_Date_time:action.From_Date_time}
                case 'To_Date_time':
                    return {...state,To_Date_time:action.To_Date_time}
                case 'Ticket_price':
                    return {...state,Ticket_price:action.Ticket_price}
                case 'Trip_id':
                    return {...state,Trip_id:action.Trip_id}

                
                default:
                    return {...state}
            }
}

const Store=createStore(Redux_store)

export default Store
