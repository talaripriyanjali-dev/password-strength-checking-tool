import React, { useState } from "react";

function PasswordStrength() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (value) => {
    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    if (score === 0) setStrength("");
    else if (score <= 2) setStrength("Weak");
    else if (score === 3) setStrength("Medium");
    else setStrength("Strong");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkStrength(value);
  };

  return (
    <div className="container"> 
    <h2> Enter Your Password 🔐</h2>

      {/* ✅ Single Parent Div */}
      <div className="box">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
        />

        {strength && (
          <p className={`strength ${strength.toLowerCase()}`}>
            Strength: {strength}
          </p>
        )}
      </div>

      {strength && (
        <div className="progress">
          <div className={`bar ${strength.toLowerCase()}`}></div>
        </div>
      )}
    </div>
  );
}

export default PasswordStrength;