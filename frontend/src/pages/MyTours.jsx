import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import '../styles/mytours.css'; // Import CSS file for styling
// import tourImg01 from "../assets/images/Bookings01.jpg";

const formatBookingDateTime = (bookingDate) => {
  // Define options for formatting date
  const dateOptions = {
    day: '2-digit',
    month: 'long', // Change 'short' to 'long' to display full month name
    year: 'numeric',
  };

  // Define options for formatting time
  // const timeOptions = {
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   hour12: true,
  // };

  // Get the formatted date and time separately
  const formattedDate = new Date(bookingDate).toLocaleDateString('en-IN', dateOptions);
  // const formattedTime = new Date(bookingDate).toLocaleTimeString('en-IN', timeOptions);

  // Combine the formatted date and time
  const formattedDateTime = `${formattedDate}`;

  return formattedDateTime;
};


const MyTours = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/booking/user/${user.email}`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });
        setBookings(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    if (user && user.email) {
      fetchBookings();
    }
  }, [user]);  

  if (!user || !user.email) {
    return (
      <section>
        <Container>
          <h2 className='text-center pt-5'style={{ color: '#355cfa', fontWeight: 'bold',marginBottom:'10px', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }}>Please Login to Your Account</h2>
          <div className='text-center'>
            <Link to="/login">
            <button className='btn primary__btn text-white'>Login Here </button>
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      {loading && <h4 className='text-center pt-5'>LOADING.....(Slow Internet Connection)</h4>}
      {error && <h4 className='text-center pt-5'>{error}</h4>}
      {!loading && !error && (
        <div className="tour-list">
          {/* Check if there are bookings */}
          {bookings.length === 0 ? (
            <div className="no-bookings-message">
              <h2 className='text-center pt-5'style={{ color: '#355cfa', fontWeight: 'bold',marginBottom:'10px', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }}>No Booking Found</h2>
            </div>
          ) : (
            /* Render bookings if available */
            bookings.map(booking => (
              <div key={booking._id} className="tour-item">
                <div className="tour-image-0001">
                  <img src={booking.photo} alt="" />
                </div>
                <div className="tour-details">
                  <h3 className="tour-name" style={{ color: 'black', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{booking.tourName}</h3>
                  <p className="booking-info">Tourist Name : {booking.fullName}</p>
                  <p className="booking-info">Date of Tour : {formatBookingDateTime(booking.bookAt)}</p>
                  <p className="booking-info">Booked On : {formatBookingDateTime(booking.createdAt)}</p>
                </div>
                <div className="guest-info">
                &#8377; {booking.amount}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
  
};

export default MyTours;
