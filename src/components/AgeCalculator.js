import React, { useState } from 'react';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));

    setAge(ageInYears);
  };

  const containerStyle = {
    marginTop: '100px',
    padding: '90px',
  };

  const buttonStyle = {
    backgroundColor: '#3897f0',
    color: 'white',
    padding: '15px 20px',
    border: 'none',
    cursor: 'pointer',
    margin: '20px 0', 
  };
  const inputStyle = {
    height : '40px',
    width  :'250px', 
  };

  return (
    <div style={containerStyle}>
      <h1>Age Calculator</h1>
      <h3>Enter your date of birth:</h3>
      <br />
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={inputStyle} 
      />
      <br />
      <button onClick={calculateAge} style={buttonStyle}>
        Calculate Age
      </button>
      <br/>
      {age !== null && (
        <h1>
          Your are {age} years old
        </h1>
      )}
    </div>
  );
}

export default AgeCalculator;