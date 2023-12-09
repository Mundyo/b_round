import './LastStep.css';
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';






const LastStep = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  
const navigate = useNavigate();      





 const handleAccountCreation = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3006/createAccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber,
        email,
      }),
    });

    if (response.ok) {
      console.log('Account created successfully!');
    } else {
      console.error('Failed to create an account.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
      };
        const returnHome = () => {
        console.log('Returning Home...');
        navigate('/');
      }


    return(
        <div className="container mt-5">
          <div className="createAccount-card d-flex align-items-center justify-content-center">
            <div className="createAccount-card-body">
                 <h2>Create Account</h2>

                 <form onSubmit={handleAccountCreation}>
            <div className="row mb-3">
              <div className="halfy-width">
                <label htmlFor="PhoneNumber" className="form-labell">
                  Phone Number
                </label>
                <input
                  type="text"
                  inputMode='numeric'
                  pattern='[0-9]*'
                  className="form-control1"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}

                  required
                /> 

              <label htmlFor="email" className="form-labell1">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control1"
                  id="email"
                  placeholder="Email"
                  value={email}
                  // onChange={(e) => setEmail(e.target.value);
                  //    console.log('Email:', e.target.value)};
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log('Email:', e.target.value);
                  }}
                  required
                /> 

            
              </div>
            </div>  
            <button type="Submit" className="btn3 btn-primary">
              Submit
            </button>
           
                </form>
                <button  className='btn5 btn-success' onClick={returnHome} type='button'> Cancel</button>
            </div>
          </div>  
       </div>
    )
}

export default LastStep;