

import "./createAccount.css";
import { useState } from "react";

const CreateAccount = () => {
  const [step, setStep] = useState(1);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2000);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postDataToBackend = async () => {
    try {
      console.log('Data to be sent:', { firstName, lastName, day, month, year, phoneNumber, email, password });
      const response = await fetch('http://localhost:3006/createAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          day,
          month,
          year,
          phoneNumber,
          email,
          password
        }),
      });

      if (response.ok) {
        console.log('Data sent successfully!');
      } else {
        console.error('Failed to send data to the backend.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!firstName || !lastName || day === '1' || month === '1' || year === '2000') {
        alert('Please fill all the fields!!');
      } else {
        setStep(2);
      }
    } else if (step === 2) {
      if (!phoneNumber || !email || !password) {
        alert('Please fill all the fields!!');
      } else {
        postDataToBackend();
      }
    }
  };
 
  
  return (
    <div className="container mt-5">
      <div className="createAccount-card d-flex align-items-center justify-content-center">
        <div className="createAccount-card-body">
          <h2>Create Account</h2>

          <form>
            {step === 1 && (
              
              <div>
                <div className="row mb-3">
                  <div className="half-width">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="half-width">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="dob" className="form-label1">
                    Date of Birth
                  </label>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="day" className="form-label"></label>
                      <select
                        className="form-select"
                        id="day"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                      >
                        <option>Day</option>
                        {Array.from({ length: 31 }, (_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col">
                      <label htmlFor="month" className="form-label"></label>
                      <select
                        className="form-select"
                        id="month"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                      >
                        <option>Month</option>
                        {[
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December"
                        ].map((month, index) => (
                          <option key={index + 1} value={index + 1}>
                            {month}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col">
                      <label htmlFor="year" className="form-label"></label>
                      <select
                        className="form-select"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                      >
                        <option>Year</option>
                        {Array.from({ length: 100 }, (_, index) => {
                          const currentYear = new Date().getFullYear();
                          return (
                            <option key={currentYear - index} value={currentYear - index}>
                              {currentYear - index}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <button type="button" className="btn2 btn-primary" onClick={handleNext}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              
              <div className='row mb-3'>
                <div className="halfy-width">
                  <label htmlFor="PhoneNumber" className="form-labell1">
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

                  <label htmlFor="email" className="form-labell">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control1"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      console.log('Email:', e.target.value);
                    }}
                    required
                  />
                      <label htmlFor="password" className="form-labell2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control1"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="Submit" className="btn3 btn-primary" onClick={handleNext}>
                    Submit
                  </button> 
                </div>
              </div>
             
            )}

            <div className="already">
              <a href="/"> Already have an account </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
