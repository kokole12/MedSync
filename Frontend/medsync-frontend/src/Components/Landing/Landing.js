import React from 'react';
import './Styles/Landing.css';
import MedSync8 from '../Images/medsync10 (1).png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Landing = () => {
  return (
    <div className='LandingPage'>
            <div className='Header'>
            <div className='NavBar'>
            <div>
            <h1>MedSync</h1>
            </div>
            <div>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Doctors
                    </li>
                    <li>
                        Login
                    </li>
                    <li className='SignUp'>
                        Sign Up
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
                        Welcome to MedSync where we help Doctors keep track <br /> of thier patients medical record, and also share <br /> informaton to make treatment more <br /> convenient.
                    </p>
                    <button className='GetStarted'>Get Started</button>

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
                <img  className='MedSync1' src={MedSync8} alt='MedSync8' />
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

        <div>
            <h2>Meet Our Specialist</h2>
        </div>
    </div>
  )
}

export default Landing
