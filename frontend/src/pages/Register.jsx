import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Register = () => {
   const [credentials, setCredentials] = useState({
      username: '',
      email: '',
      password: ''
   });
   const [errors, setErrors] = useState({});

   const { dispatch } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleChange = e => {
      const { id, value } = e.target;
      setCredentials(prev => ({ ...prev, [id]: value }));
      // Clear previous error message when user starts typing
      setErrors(prev => ({ ...prev, [id]: '' }));
   };

   const handleClick = async e => {
      e.preventDefault();

      // Validate fields
      const validationErrors = {};
      if (!credentials.username.trim()) {
         validationErrors.username = 'Username is required';
      } else if (!/^[A-Za-z]+$/.test(credentials.username.trim())) {
         validationErrors.username = 'Username must contain only letters';
      }
      if (!credentials.email.trim()) {
         validationErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
         validationErrors.email = 'Email is invalid';
      }
      if (!credentials.password.trim()) {
         validationErrors.password = 'Password is required';
      } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(credentials.password)) {
         validationErrors.password = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special symbol';
      }

      if (Object.keys(validationErrors).length > 0) {
         setErrors(validationErrors);
         return;
      }

      try {
         const res = await fetch(`${BASE_URL}/auth/register`, {
            method: 'post',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
         });
         const result = await res.json();

         if (!res.ok) {
            alert(result.message);
         }

         dispatch({ type: 'REGISTER_SUCCESS' });
         navigate('/login');
      } catch (err) {
         alert(err.message);
      }
   };

   return (
      <section>
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className='login__container d-flex justify-content-between'>
                     <div className='login__img'>
                        <img src={registerImg} alt='' />
                     </div>

                     <div className='login__form'>
                        <div className='user'>
                           <img src={userIcon} alt='' />
                        </div>
                        <h2>Register</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input
                                 type='text'
                                 placeholder='Username'
                                 id='username'
                                 value={credentials.username}
                                 onChange={handleChange}
                                 required
                              />
                              {errors.username && <span className='error'>{errors.username}</span>}
                           </FormGroup>
                           <FormGroup>
                              <input
                                 type='email'
                                 placeholder='Email'
                                 id='email'
                                 value={credentials.email}
                                 onChange={handleChange}
                                 required
                              />
                              {errors.email && <span className='error'>{errors.email}</span>}
                           </FormGroup>
                           <FormGroup>
                              <input
                                 type='password'
                                 placeholder='Password'
                                 id='password'
                                 value={credentials.password}
                                 onChange={handleChange}
                                 required
                              />
                              {errors.password && <span className='error'>{errors.password}</span>}
                           </FormGroup>
                           <Button className='btn secondary__btn auth__btn' type='submit'>
                              Create Account
                           </Button>
                        </Form>
                        <p>
                           Already have an account? <Link to='/login'>Login</Link>
                        </p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default Register;
