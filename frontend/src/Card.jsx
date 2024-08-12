import { Button, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import './styles/card.css';
import {tourName1, userId, userName1, guestSize1, phone1, bookAt1, userEmail1} from './components/Booking/Booking';
import { photo2 } from './pages/TourDetails';
let tourNameUse, userNameUse, userIdUse, guestSize1Use, phone1Use, bookAtUse,amountUse;
const Card = ({ amount, checkoutHandler }) => {
  
  localStorage.setItem('userName', userName1);
  localStorage.setItem('tourName', tourName1);
  localStorage.setItem('userId', userId);
  localStorage.setItem('guestSize', guestSize1);
  localStorage.setItem('phone', phone1);
  localStorage.setItem('amount', amount);
  localStorage.setItem('book', bookAt1);
  localStorage.setItem('userEmail', userEmail1);
  localStorage.setItem('photo2', photo2);

  return (
    <>
      <VStack spacing="4" alignItems="center" className="card-container">
        <img src={photo2} alt="Tour Image" className="tour-image" />
        <div className="details">
          <Text fontSize="lg">
            <b>UserID : </b> {userId}
          </Text>
          <Text fontSize="lg">
            <b>Name : </b> {userName1} 
          </Text>
          <Text fontSize="lg">
            <b>Tour : </b> {tourName1}
            {/* <b>Tour : </b> */}
          </Text>
          <Text fontSize="lg">
          <b>Date Of Tour : </b> {bookAt1.split('-').reverse().join('-')}
          </Text>
          <Text fontSize="lg">
            <b>Phone : </b> {phone1}
            {/* <b>Tour : </b> */}
          </Text>
          <Text fontSize="lg">
            <b>No. Of Guests : </b> {guestSize1}
            {/* <b>Tour : </b> */}
          </Text>
          <Text fontSize="lg">
            <b>Amount : </b> ₹{amount}
          </Text>
        </div>
        <Button className="btn primary__btn" onClick={() => checkoutHandler(amount)}>
          Pay Now ₹{amount}
        </Button>
      </VStack>
    </>
  );

};
export default Card;
export { tourNameUse, userNameUse, userIdUse, guestSize1Use, phone1Use, bookAtUse, amountUse, photo2 };
