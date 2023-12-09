import './forgotpassword.css';

import React, { useState } from 'react';


const ForgotPassword= () =>{
    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: '',
      });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    alert('Link sent to your email');
  }

   const returnHome = () => {
   
    window.location.href = '/';
   }

   
return(
    <div className="forgot-card    d-flex align-items-center justify-content-center">
            <div className="card-body1 ">
           <h5 className="card-title mb-4">B~Round</h5>
             
           <form onSubmit={handleSubmit} style={{ width: '80%' }}>
          <div className="mb-31">
            <input
              type="text"
              className="form-controler"
              placeholder="Enter Email"
              name="Email"
              value={formData.usernameOrEmail}
              onChange={handleInputChange}
              required
            />
            <button type='submit' className='btn btn-success'> Submit</button>
            <button  className='btn btn-success' onClick={returnHome} type='button'> Cancel</button>
          </div>
          </form>

            </div>  
    </div>


)
}
export default ForgotPassword;

