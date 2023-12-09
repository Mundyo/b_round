 import React, { useState } from 'react';
//  import { useNavigate } from 'react-router-dom';
 import { Link } from 'react-router-dom';
import './loginform1.css';


const LoginForm1 = () => {
 
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });
  
      //  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  };

  const handleCreateAccountClick = () => {
    window.location.href ='/createAccount';
  };
  
  
  
  
  
  return (
   <div className="loginform1-card   d-flex align-items-center justify-content-center">
      <div className="card-body ">
        <h5 className="card-title mb-4">B~Round</h5>

        <form onSubmit={handleSubmit} style={{ width: '80%' }}>
          <div className="mb-31">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile number or email"
              name="usernameOrEmail"
              value={formData.usernameOrEmail}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-31 ">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        <div className='forgotpassword'>
    
      <Link to='/forgotpassword'> Forgot password </Link>
    </div>
          
      </div>

      <div className="card-body text-center">
        <p className="card-text" style={{ marginRight: '1.5rem'}}>or</p>

        <button className="btn1 btn-success" onClick={handleCreateAccountClick}>
          Create new Account
        </button>
      </div>
    </div>
   
  );
};

export default LoginForm1;





 







 