import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../ThankYou'
import Home from './../pages/Home'
import About from '../pages/About'
// import ChatBot from '../pages/ChatBot'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import MyTours from './../pages/MyTours'
import PaymentSuccess from './../PaymentSuccess'

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path='/mytours' element={<MyTours/>} />
         {/* <Route path='/ChatBot' element={<ChatBot/>} /> */}
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
      </Routes>
   )
}

export default Routers