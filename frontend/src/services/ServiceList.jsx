import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Weather of Tourist Destinations`,
      desc: `Travel-Trek provides weather informations of any Tourist Location`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Travel-Trek is growing exponentially in India because of your Love❤️.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Proper ChatBot and Map Facility',
      desc: `Travel-Trek provides a Chatbot where a Traveler can ask for their Queries.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList