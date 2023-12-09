// import React from "react";
import "./createAccount.css";
// import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const CreateAccount = () => {
  // const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState('1');
  const [month, setMonth] = useState('1');
  const [year, setYear] = useState('2000');

  const postDataToBackend = async () => {
    try {
      console.log('Data to be sent:', { firstName, lastName, day, month, year });
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
        }),
      });

      if (response.ok) {
        console.log('Data sent successfully!');
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        console.error('Failed to send data to the backend.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLastStep = () => {
    if (!firstName || !lastName || day === 'day' || month === 'month' || year === 'year') {
      alert('Please fill all the fields!!');
    } else {
      postDataToBackend();
      // navigate('/LastStep.jsx');
    }
  };

  return (
    <div className="container mt-5">
      <div className="createAccount-card d-flex align-items-center justify-content-center">
        <div className="createAccount-card-body">
          <h2>Create Account</h2>

          <form action='submit'>
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
            </div>

            <button type="button" className="btn2 btn-primary" onClick={handleLastStep}>
              Next
            </button>
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
