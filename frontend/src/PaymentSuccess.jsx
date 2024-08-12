import React, { useRef, useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import Logo from '../src/assets/images/logo.png';
import TourImage from '../src/assets/images/Bookings01.jpg';
import { Text, Center, Button, Heading } from '@chakra-ui/react';
import { Container, Row, Col } from 'reactstrap';
// import { useSearchParams } from 'react-router-dom';
import './styles/paymentSuccess.css';
import { BASE_URL } from './utils/config';

const PaymentSuccess = () => {
    const pdfRef = useRef();
    const [paymentId, setPaymentId] = useState(null);

    useEffect(() => {
        const fetchPaymentId = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/v1/payment');
                if (response.ok) {
                    const data = await response.json();
                    if (data.razorpay_payment_id) {
                        setPaymentId(data.razorpay_payment_id);
                        localStorage.setItem('paymentId', data.razorpay_payment_id);
                    } else {
                        console.error('Payment ID not found.');
                    }
                } else {
                    console.error('Failed to fetch payment ID.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchPaymentId();
    }, []);

    useEffect(() => {
        if (paymentId) {
            sendDataToDatabase();
        }
    }, [paymentId]);

    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jspdf('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('travel-trek.pdf');
        });
    };

    const sendDataToDatabase = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const userEmail = localStorage.getItem('userEmail');
            const fullName = localStorage.getItem('userName');
            const tourName = localStorage.getItem('tourName');
            const bookAt = localStorage.getItem('book');
            const phone = localStorage.getItem('phone');
            const guestSize = localStorage.getItem('guestSize');
            const amount = localStorage.getItem('amount');
            const photo = localStorage.getItem('photo2');

            if (!photo || !userId || !userEmail || !fullName || !tourName || !bookAt || !phone || !guestSize || !amount) {
                throw new Error('Booking data missing in localStorage');
            }

            const response = await fetch(`${BASE_URL}/booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    userEmail,
                    fullName,
                    tourName,
                    bookAt,
                    phone,
                    guestSize,
                    amount,
                    photo
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send data to the database');
            }
            console.log('Data sent to the database successfully');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div ref={pdfRef} className='manager'>
                <Container className="payment-success-container">
                    <Row className="justify-content-between align-items-center mb-4">
                        <Col>
                            <img src={Logo} alt="Logo" className="logoPayment" />
                        </Col>
                        <Col className="text-end">
                            <Text style={{ fontSize: '1.5rem' }}><b>{localStorage.getItem('userName')}</b></Text>
                        </Col>
                    </Row>
                    <Heading textTransform="uppercase" fontSize='3rem' fontWeight="bold" color="blue.500" textAlign="center" mb={4} fontFamily="cursive">
                        Payment Successful 😍
                    </Heading>
                    <Row className="justify-content-center">
                        <Col xs={12} md={6}>
                            <img src={TourImage} alt="Tour Image" className="tourImage" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={15} md={11}>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>UserID</td>
                                        <td>{localStorage.getItem('userId')}</td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>{localStorage.getItem('userName')}</td>
                                    </tr>
                                    <tr>
                                        <td>Tour</td>
                                        <td>{localStorage.getItem('tourName')}</td>
                                    </tr>
                                    <tr>
                                        <td>Date Of Tour</td>
                                        <td>{localStorage.getItem('book')}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone No.</td>
                                        <td>{localStorage.getItem('phone')}</td>
                                    </tr>
                                    <tr>
                                        <td>No. Of Tourists</td>
                                        <td>{localStorage.getItem('guestSize')}</td>
                                    </tr>
                                    <tr>
                                        <td>Amount Paid</td>
                                        <td>₹{localStorage.getItem('amount')}</td>
                                    </tr>
                                    <tr>
                                        <td>Payment</td>
                                        <td>Successful</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                    <Heading textDecoration="blink" textShadow="0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 1px 1px 2px red" textColor="Yellow" fontSize="5xl" textAlign="center" fontWeight="bold" fontStyle="italic" paddingTop="110px" mb={8}>
                        Thank You for Visting Travel-Trek 😍 !!
                    </Heading>
                </Container>
            </div>
            <Center>
                <Button className="btn primary__btn" onClick={downloadPDF}>
                    Download Tour Info
                </Button>
            </Center>
        </>
    );
};
export default PaymentSuccess;
