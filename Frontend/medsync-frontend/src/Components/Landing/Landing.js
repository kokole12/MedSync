import React from 'react';
import './Styles/Landing.css';
import MedSync1 from '../Images/medsync12.png';
import MedSync2 from '../Images/medsync15.jpg';
import MedSync3 from '../Images/medsync13.jpeg';
import MedSync4 from '../Images/medsync14.jpeg';
import MedSync5 from '../Images/medsync16.jpg';
import MedSync6 from '../Images/medsync17.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Landing = () => {
  return (
    <div className='LandingPage'>
            <div className='Header'>
            <div className='NavBar' class="NavBar">
            <div>
            <h1 class="Nav-title">MedSync</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Doctors</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li className='SignUp'>
	  		<a href="#" class="signup">Sign Up</a>
                    </li>
                </ul>
            </div>
            </div>
            <div className='CaptionImg'>
                <div>
                    <h2 className='Caption'>
                        Your Trusted Source <br />for Medical Record<br /> Keeping
                    </h2>
                    <p className='text1'>
                        Welcome to MedSync where we help Doctors keep track <br /> of thier patients medical record, and also share <br /> information to make treatment more <br /> convenient.
                    </p>
                    <button className='GetStarted'><a href="#" class="button-get-started">Get Started</a></button>

                    <div className='NumText'>
                        <div className='NumText1'>
                            <h1 className='num'>200k+</h1>
                            <p className='text'>Patients</p>
                        </div>
                        <div className='NumText2'>
                            <h1 className='num'>50+</h1>
                            <p className='text'>Doctors</p>
                        </div>
                        <div className='NumText3'>
                            <h1 className='num'>20+</h1>
                            <p className='text'>Nurse</p>
                        </div>
                    </div>
                </div>

                <div className='backgroundImg'>
                <div className='img1Background' id='img1Background'>

                </div>
                <img  className='MedSync1' src={MedSync1} alt='MedSync8' />
                </div>
            </div>
            
        </div>

        <div className='categoryDiv'>
            <h2 className='categoryH2'>
                What we have
            </h2>
            <div className='category2Div'>
                <div className='category1'>
                    <div className='backgroundIcon'>
                        <i class="fa-solid fa-laptop-medical fa-2xl" style={{color: '#0775F4'}}></i>
                    </div>
                    <h3 className='categoryH3'>
                    Electronic Health Record
                    </h3>
                    <p className='categoryP'>
                    Allowing healthcare providers <br />to store and organize patient <br /> medical data digitally.
                    </p>

                </div>
                <div className='category2'>
                <div className='backgroundIcon'>
                <i class="fa-solid fa-notes-medical fa-2xl" style={{color: '#0775F4'}}></i>
                </div>
                    <h3 className='categoryH3'>
                    Interoperability
                    </h3>
                    <p className='categoryP'>
                    Enabling <br />seamless data sharing and <br /> continuity of care.
                    </p>

                </div>
                <div className='category3'>
                <div className='backgroundIcon'>
                <i class="fa-solid fa-house-medical-flag fa-2xl" style={{color: '#0775F4'}}></i>
                    </div>
                    <h3 className='categoryH3'>
                    Secure Data Storage
                    </h3>
                    <p className='categoryP'>
                    Offer secure storage<br /> solutions to protect sensitive patient <br />information.
                </p>

                </div>
                <div className='category4'>
                <div className='backgroundIcon'>
                <i class="fa-solid fa-file-medical fa-2xl" style={{color: '#0775F4'}}></i>
                </div>
                    <h3 className='categoryH3'>
                    Data Analytics
                    </h3>
                    <p className='categoryP'>
                    Offering data analytics tools <br />to help healthcare professionals<br />gain insights from patient data.
                </p>

                </div>
            </div>
        </div>

        <h2 className='Meet'>Meet Our Specialist</h2>

        <div className='Specialist'>
        <div className='Doctor1'>
            <img className='ImageDoctor1' src={MedSync2} alt='MedSync2' />
            <h3>Dr Comfort James</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div className='Doctor2'>
            <img className='ImageDoctor2' src={MedSync3} alt='MedSync3' />
            <h2>Dr Ben Jacob</h2>
            <p>Lorem Ipsum is simply dummy text of<br /> the printing and typesetting industry.</p>
        </div>

        <div className='Doctor3'>
            <img className='ImageDoctor3' src={MedSync4} alt='MedSync4' />
            <h2>Dr John Endurance</h2>
            <p>Lorem Ipsum is simply dummy text of<br /> the printing and typesetting industry.</p>
        </div>
        </div>

        <div className='DesignationImg'>
            <div>
                <h3 className='h3Designation'>DESIGNATION</h3>
                <h2 className='h2Designation'>Why You Choose MedSync</h2>
                <div className='iconH4P'>
                    <div className='desIcon'>
                        <i class="fa-solid fa-plug fa-2xl" style={{color: '#ebecf0'}}></i>
                    </div>
                    <div className='desImg'>
                        <h4>Best Expert Doctors</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing<br /> and typesetting industry</p>
                    </div>
                </div>

                <div className='iconH4P'>
                    <div className='desIcon'>
                        <i class="fa-solid fa-headset fa-2xl" style={{color: '#f0f2f5'}}></i>
                    </div>
                    <div className='desImg'>
                        <h4>24/7 Support & Health Care</h4>
                        <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry</p>
                    </div>
                </div>

                <div className='iconH4P'>
                    <div className='desIcon'>
                        <i class="fa-solid fa-truck-medical fa-2xl" style={{color: '#edeff2'}}></i>
                    </div>
                    <div className='desImg'>
                        <h4>Emergency Service</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing<br /> and typesetting industry</p>
                    </div>
                </div>
            </div>
            <div className='imgDiv'>
                <img className='imgDesignation' src={MedSync6} alt='MedSync' />
                <div className='AfterImg'></div>
            </div>
        </div>

        <div className='Testimonial'>
            <div className='patient-container'>
            <img className='MedSync5' src={MedSync5} alt='MedSync5'/>
            <div className='patient1'>
            <p>
            Contrary to popular belief, Lorem Ipsum is not simply 
            <br /> random text. It has roots in a piece of classical Latin 
            <br/>literature from 45 BC, <br />
            </p>
            <h4>
                James David
            </h4>
            <p>Lagos Lekki</p>

            </div>
            <div className='patient2'>
            <h4 className='Ifeoma'>
                Ifeoma David
            </h4>
            <p className='Abuja'>Abuja Gwagwalada</p>

            </div>

            </div>
            <div className='TestimonialDiv2'>
            <h4 className='testh4'>TESTIMIONAL</h4>
            <h2 className='CaptionTest1'>What Patients Say</h2>
            <h2 className='CaptionTest2'>About Us</h2>

            </div>
        </div>

        <div className='subSend'>
            <div className='subscribeDiv'>
                <h2 className='SubText'>Subscribe to get information, latest news and other <br />interesting things about MedSync</h2>
                <i class="fa-regular fa-envelope fa-lg" style={{color: '#b0b2b5'}}></i>
                <input className='SubInput' placeholder='Your email'></input>
                <button className='SubButton'>Subscribe</button>
            </div>
            <div className='sendIcon'>
            <i class="fa-solid fa-paper-plane fa-2xl" style={{color: '#fbfcfe'}}></i>
            </div>
        </div>
        
        <footer>
        <div className='footerDiv'>
            <div className='footerTitle'>
            <h2>MedSync</h2>
            <p>Get Register and save you <br /> medical record</p>
            </div>
            <div className='ServiceInfoContact'>
                <div className='Service'>
                <h4>Services</h4>
                <p>About</p>
                <p>Home</p>
                <p>Services</p>

                </div>
                <div className='Info'>
                <h4>information</h4>
                <p>Help/FAQ</p>
                <p>An Appointment</p>
                <p>Community</p>
                <p>Sign Up</p>

                </div>
                <div className='Contact'>
                <h4>Contact</h4>
                <p>+8867445</p>
                <p>medsync@gmail.com</p>

                </div>
            </div>
            <div className='footerIcon'>
            <i class="fa-brands fa-facebook fa-2xl" style={{color: '#d4d7de'}}></i>
            <i class="fa-brands fa-square-instagram fa-2xl" style={{color: '#d4d7de'}}></i>
            <i class="fa-brands fa-x-twitter fa-2xl" style={{color: '#d4d7de'}}></i>
            </div>
        </div>
        </footer>
    </div>
  )
}

export default Landing
