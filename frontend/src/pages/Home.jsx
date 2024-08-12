import React from 'react'
import '../styles/home.css'
import { Container, Row, Col, CardSubtitle } from 'reactstrap'
import heroVideo from '../assets/images/hero-video.mp4'
import hero_Video from '../assets/images/herovideo.webm'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/subtitle'
// import SearchBar from './../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLetter from '../shared/Newsletter'

const Home = () => {
   return <>
      {/* ========== HERO SECTION ========== */}

      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="hero__content">
                     <div className="hero__subtitle d-flex align-items-center">
                        <Subtitle subtitle={'Explore India with Travel-Trek->'} />
                        {/* <img src={worldImg} alt="" /> */}
                     </div>
                     <h1 >Embark on a journey of a lifetime with <span className='hightlight'>Travel Trek- Where Adventure Awaits!</span></h1>
                     <p>
                     <b>Travel Trek </b>is your ultimate travel companion, guiding wanderers to extraordinary
                        destinations. With expert insights, personalized itineraries, and a focus on cultural
                        immersion, we transform your journey into <b>unforgettable adventures</b>.
                     </p>
                  </div>
               </Col>

               {/* <Col lg='2'>
                  <div className="hero__img-box">
                     <img src={heroImg} alt="" />
                  </div>
               </Col> */}
               <Col lg='2'>
                  <div className="hero__img-box hero__video-box mt-4">
                     <video src={heroVideo} autoPlay muted loop />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box hero__video-box2 mt-4">
                     <video src={hero_Video} autoPlay muted loop />
                  </div>
               </Col>
               {/* <Col lg='2'>
                  <div className="hero__img-box mt-5">
                     <img src={heroImg02} alt="" />
                  </div>
               </Col> */}

               {/* <SearchBar /> */}
            </Row>
         </Container>
      </section>
      {/* ============================================================== */}

      {/* ==================== HERO SECTION START ====================== */}
      <section>
         <Container>
            <Row>
               <Col lg='3'>
                  <h5 className="services__subtitle">What we Offer</h5>
                  <h2 className="services__title">Our best services</h2>
               </Col>
               <ServiceList />
            </Row>
         </Container>
      </section>

      {/* ========== FEATURED TOUR SECTION START ========== */}
      <section>
         <Container>
            <Row>
               <Col lg='12' className='mb-5'>
                  <Subtitle subtitle={'Explore'} />
                  <h2 className='featured__tour-title'>Our featured tours</h2>
               </Col>
               <FeaturedTourList />
            </Row>
         </Container>
      </section>
      {/* ========== FEATURED TOUR SECTION END =========== */}

      {/* ========== EXPERIENCE SECTION START ============ */}
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'Travel Article'} />
                     <h2>Travel Trek: Exploring the Unseen Beauty of Our India</h2>
                     <p>
                         At Travel Trek, we invite you to embrace adventure, immerse yourself in diverse cultures, and uncover the beauty that awaits in every corner of the India.
                         <br></br><br></br><b>Embracing Cultural Wonders.</b><br></br>
                        <br></br><b>Unlocking Nature's Treasures.</b><br></br>
                        <br></br><b>Unparalleled Service and Expert Guidance.</b><br></br>
                        <br></br><b>Sustainability and Responsible Travel.</b>
                     </p>
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                     {/* <div className="counter__box">
                        <span>10+</span>
                        <h6>Successful trips</h6>
                     </div>
                     <div className="counter__box">
                        <span>100+</span>
                        <h6>Regular Clients</h6>
                     </div> */}
                     {/* <div className="counter__box">
                        <span>1</span>
                        <h6>Year of experience</h6>
                     </div> */}
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                     <img src={experienceImg} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== EXPERIENCE SECTION END ============== */}

      {/* ========== GALLERY SECTION START ============== */}
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Clients Love❤️'} />
                  <h2 className="gallery__title">Visit our customers tour gallery</h2>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== GALLERY SECTION END ================ */}

      {/* ========== TESTIMONIAL SECTION START ================ */}
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Users Love'} />
                  <h2 className="testimonial__title">What our Customers say about us</h2>
               </Col>
               <Col lg='12'>
                  <Testimonials />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== TESTIMONIAL SECTION END ================== */}
      <NewsLetter />
   </>
}

export default Home