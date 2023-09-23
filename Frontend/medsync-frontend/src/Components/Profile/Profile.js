import React from 'react';
import medsync13 from '../Images/medsync13.jpeg';
import './styles/Profile.css';

const Profile = () => {
  return (
    <div className='mainProfile'>
        <h2>Profile</h2>
        <p className='ProfileP'>Home / User / Profile</p>
        <div className='Profile'>
            <div className='ProfileDiv1'>
                <img className='ProfileImage' src={medsync13} alt='medsync13' />
                <h1>Kevin Anderson</h1>
                <p>Medical Doctor</p>
                <div className='followIcon'>
                <i class="fa-brands fa-x-twitter fa-lg" style={{color: '#2f4160'}}></i>
                <i class="fa-brands fa-facebook fa-lg" style={{color: '#2f4160'}}></i>
                <i class="fa-brands fa-instagram fa-lg" style={{color: '#2f4160'}}></i>
                <i class="fa-brands fa-linkedin fa-lg" style={{color: '#2f4160'}}></i>
                </div>
            </div>

            <div className='ProfileAbout'>
                <h3>About</h3>
                <p>Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. 
                Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam 
                autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>

                <h3>Profile Details</h3>
                <div className='Details'>
                    <div>
                    <h4>Full Name</h4>
                    <h4>Company</h4>
                    <h4>Job</h4>
                    <h4>Country</h4>
                    <h4>Address</h4>
                    <h4>Phone</h4>
                    <h4>Email</h4>
                    </div>
                    <div>
                    <p>Kevin Anderson</p>
                    <p>Lueilwitz, Wisoky and Leuschke</p>
                    <p>Medical Doctor</p>
                    <p>USA</p>
                    <p>A108 Adam Street, New York, NY 535022</p>
                    <p>(436) 486-3538 x29071</p>
                    <p>k.anderson@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile