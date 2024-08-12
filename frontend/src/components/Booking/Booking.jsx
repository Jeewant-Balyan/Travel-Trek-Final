import React, { useState, useContext } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { photo2 } from '../../pages/TourDetails'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'

let amountTotal;
let tourName1, userName1, userId, guestSize1, phone1, bookAt1, photoPS, userEmail1;
const Booking = ({ tour, avgRating }) => {
   const { price, reviews, title } = tour
   const navigate = useNavigate()

   const { user } = useContext(AuthContext)

   const [booking, setBooking] = useState({
      userId: user && user._id,
      userEmail: user && user.email,
      tourName: title,
      fullName: '',
      phone: '',
      guestSize: 1,
      bookAt: ''
   })
   
   tourName1=title;
   userId=booking.userEmail;
   userName1=booking.fullName;
   guestSize1=booking.guestSize;
   phone1=booking.phone;
   bookAt1=booking.bookAt;
   photoPS = booking.photo;
   userEmail1 = booking.userEmail;

   const handleChange = e => {
      setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
      
   }
   const handleChange2 = e => {
      const inputValue = e.target.value;
      if (inputValue > 0) {
          setBooking(prev => ({ ...prev, [e.target.id]: inputValue }));
      } else {
         alert("Please enter a value greater than zero.");
        e.target.value = "";
      }
  }
  
   const serviceFee = 1000
   const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)
   amountTotal=totalAmount;
   

   const handleClick = async e => {
      e.preventDefault()
      if (!booking.fullName || !booking.phone || !booking.bookAt || !booking.guestSize) {
         return alert('Please fill in all the details')
      }
      console.log(booking)

      try {
         if (!user || user === undefined || user === null) {
            return alert('Please sign in')
         }
         const bookingData = { ...booking, amount: totalAmount, photo: photo2};
         const res = await fetch(`${BASE_URL}/booking`, {
            // method: 'post',
            // headers: {
            //    'content-type': 'application/json'
            // },
            // credentials: 'include',
            // body: JSON.stringify(bookingData)
         })

         const result = await res.json()

         if(!res.ok) {
            return alert(result.message)
         }
         navigate('/thank-you')
      } catch (error) {
         alert(error.message)
      }   
   }

   return (
      <div className='booking'>
         <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>&#x20A8; {price} <span>/per person</span></h3>
            <span className="tour__rating d-flex align-items-center">
               <i className='ri-star-fill' style={{ 'color': 'var(--secondary-color)' }}></i>
               {avgRating === 0 ? null : avgRating} ({reviews?.length})
            </span>
         </div>

         {/* =============== BOOKING FORM START ============== */}
         <div className="booking__form">
            <h5>Information</h5>
            <Form className='booking__info-form' onSubmit={handleClick}>
               <FormGroup>
                  <input type="text" placeholder='Full Name (Max. 20 Char)' id='fullName' required
                     onChange={handleChange} />
               </FormGroup>
               <FormGroup>
                  <input type="tel" placeholder='Phone' id='phone' required
                     onChange={handleChange} />
               </FormGroup>
               <FormGroup className='d-flex align-items-center gap-3'>
                  {/* <input type="date" placeholder='' id='bookAt' required
                     onChange={handleChange} /> */}
                     <input type="date" placeholder='' id='bookAt' required
                        min={new Date().toISOString().split('T')[0]} // Set min attribute to today's date
                         onChange={handleChange} />

                  <input type="number" placeholder='Guest' id='guestSize' required
                     onChange={handleChange2} />
                     
               </FormGroup>
            </Form>
         </div>
         {/* =============== BOOKING FORM END ================ */}


         {/* =============== BOOKING BOTTOM ================ */}
         <div className="booking__bottom">
            <ListGroup>
               <ListGroupItem className='border-0 px-0'>
                  <h5 className='d-flex align-items-center gap-1'>&#x20A8; {price} <i className='ri-close-line'></i> 1 person</h5>
                  <span>&#x20A8; {price}</span>
               </ListGroupItem>
               <ListGroupItem className='border-0 px-0'>
                  <h5>Service charge</h5>
                  <span>&#x20A8; {serviceFee}</span>
               </ListGroupItem>
               <ListGroupItem className='border-0 px-0 total'>
                  <h5>Total</h5>
                  <span>&#x20A8; {totalAmount}</span>
               </ListGroupItem>
            </ListGroup>

            <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
         </div>
      </div>
   )
};

export default Booking
export {amountTotal, tourName1, userId, userName1, guestSize1, phone1, bookAt1, userEmail1};