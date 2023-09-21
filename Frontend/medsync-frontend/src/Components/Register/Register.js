import React, {useState} from 'react';
import './styles/Register.css';

const Register = () => {
    const [InputValue, setInputValue] = useState("")
  return (
    <div className='RegisterForm'>
    
    <h2 className='head'>MedSync</h2>
    <div className='innerForm'>
        <div className='InputForm'>
            <h2 className='account'>Create an Account</h2>
            <p className='enter'>Enter your personal details to create account</p>
            <form action='' method='POST'>
                <label>Your Name</label>
                <input type='text' />

                <label>Your Email</label>
                <input type='email' />

                <label>username</label>
                <input type='text' ></input>

                <label>Password</label>
                <input type='password' />
                
                <label className='checkbox' >
                <input className='checkboxInput' type='checkbox' />
                I agree and accept the terms and conditions
                </label>
                
                

                <button>Create Account</button>
            </form>
            <p>Already have an account? <a href="../Login/Login.js">Log in</a></p>
        </div>
    </div>

    </div>
  )
}

export default Register
