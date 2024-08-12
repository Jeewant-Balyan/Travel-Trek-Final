import React from 'react'
import { amountTotal } from './components/Booking/Booking'
// import { Container, Row, Col, Button } from 'reactstrap'
// import { Link } from 'react-router-dom'
// import '../styles/thank-you.css' 
import {Box,Stack} from "@chakra-ui/react"
import Card  from './Card'
import axios from "axios";
// import Booking from '../components/Booking';

const ThankYou = () => {
    
   const checkoutHandler = async(amount) => {
      const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

      const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })
      const options = {
         key,
         amount: order.amount,
         currency: "INR",
         name: "Travel-Trek",
         description: "Jeewant and Shubham",
         image: "https://d2zzm7keqb9fq6.cloudfront.net/wp-content/uploads/2018/06/2018_Trek_Travel_logo_blue.png",
         order_id: order.id,
         callback_url: "http://localhost:4000/api/paymentverification",
         prefill: {
             name: "Jeewant Balyan",
             email: "shubhamchaudhary.st@gmail.com",
             contact: "9999999999"
         },
         notes: {
             "address": "Village + Post - Bisara, Khair, Aligarh"
         },
         theme: {
             "color": "#528FF0"
         }
     };
     const razor = new window.Razorpay(options);
     razor.open();
   }

   return (
         <Box>
               <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
                  <Card amount={amountTotal} img={"https://st.depositphotos.com/1000764/2519/i/450/depositphotos_25199313-stock-photo-thank-you-word-over-white.jpg"} checkoutHandler={checkoutHandler}/>
               </Stack>
         </Box>
   )
}

export default ThankYou