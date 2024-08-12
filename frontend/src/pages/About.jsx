import React from 'react'
import '../styles/about.css'
import { Container, Row, Col} from 'reactstrap'
import img from '../assets/images/ours.jpg'

import Subtitle from './../shared/subtitle'
const About = () => {
  return <>
  <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'About Developers'} />
                     <h2>We're here to provide you with our Wealth of expertise.</h2>
                     <p style={{ textAlign: 'justify' }}>A Travel Tourism Website(<b>Travel-Trek</b>) is made by <b>Jeewant Balyan, Shubham Chaudhary and Mayank Parashar </b> of Diploma in Computer Engineering as a <b>Major Project</b> at University Polytechnic, AMU under the Supervision of <b>Mr. Mohammad Naved Qureshi</b>.</p>
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                     <div className="counter__box">
                        <span>100+</span>
                        <h6>Successfully Booked trips</h6>
                     </div>
                     <div className="counter__box">
                        <span>20+</span>
                        <h6>Regular Clients</h6>
                     </div>
                  </div>
                  <br /><br /><br /><br />
                  
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                     <img src={img} alt="" />
                  </div>
               </Col>
               <br/>
               <div className="experience__content">
                  <br/>
                     <Subtitle subtitle={'Vision and Mission'} />
                     <h2 style={{ textAlign: 'justify' }} >Empowering global explorers to discover India's rich tapestry of culture, heritage, and Natural wonders by curating immersive and sustainable travel experiences.</h2>
                     <br/>
                     <p style={{ textAlign: 'justify' }}>This mission statement focuses on enabling travelers worldwide to experience the diversity and beauty of India while emphasizing Travel Trek's commitment to sustainability and immersion in local cultures.<br/><br/>
                     The vision of Travel-Trek centers on becoming a leading force in facilitating authentic travel experiences that go beyond tourism, fostering connection between travelers and India's cultural, historical, and natural marvels.
                     </p>

                  </div>

                <div className="experience__content">
                  <br /><br />
                     <Subtitle subtitle={'Achievements or Milestones'} />
                     <p style={{ textAlign: 'justify' }}>
                     <b>1. Establishment and Launch:</b> Travel Trek was founded in 2023 with a vision to promote immersive and sustainable travel experiences in India, catering to both local and global travelers.<br/><br/>
                     <b>2. Continuous Innovation and Adaptation: </b>Stayed abreast of technological advancements, constantly updating the website interface, incorporating user-friendly features, and utilizing innovative tools to enhance the user experience.<br/><br/>
                     <b>3. Adaptability During Challenges: </b>Showcased resilience and adaptability during challenging times, such as global travel restrictions or unforeseen events, by providing flexible options and support to travelers.
                     </p>

                </div>
            </Row>
         </Container>
      </section>
  </>
    
  
}

export default About