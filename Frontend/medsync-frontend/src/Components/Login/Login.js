import React from 'react';
import './styles/Login.css';

const Login = () => {
  return (
    <div className='RegisterForm'>
    
    <h2 className='head'>MedSync</h2>
    <div className='innerForm'>
        <div className='InputForm'>
            <h2 className='account'>Login to Your Account</h2>
            <p className='enter'>Enter your username & password to login</p>
            <form action='' method='POST'>

                <label>username</label>
                <input type='text' ></input>

                <label>Password</label>
                <input type='password' />
                
                <label className='checkbox' >
                <input className='checkboxInput' type='checkbox' />
                Remember me
                </label>
                
                

                <button>Login</button>
            </form>
            <p>Don't have account? Create an account</p>
        </div>
    </div>

    </div>
  )
}

export default Login