import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
 
const NewsLetter = () => {
   return (
      <section className='newsletter'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="newsletter__content">
                     <h2>For more travelling informations...Subscribe!</h2>
                     <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email here' />
                        <button className="btn newsletter__btn" onClick="clearPlaceholder()">Subcribe</button>
                     </div>
                     
                     <p>Stay informed about travel – Subscribe for more destination details, tips, and updates.
                        Your adventure awaits with each subscription!
                     </p>
                  </div>
               </Col>
               <Col lg='6'>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default NewsLetter