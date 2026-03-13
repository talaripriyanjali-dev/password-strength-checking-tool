import React from "react";
import PasswordStrength from "./PasswordStrength";
import "./App.css";

function App() {
  return (

    <div className="app-wrapper">

      {/* Header */}
      <header className="app-header">
        <h1>Password Strength Checker Tool</h1>
        <p>Create secure passwords to protect your accounts</p>
      </header>

      {/* Password Component */}
      <PasswordStrength />

      {/* Password Rules */}
      <div className="password-rules">
        <h3>Strong Password Guidelines</h3>
        <ul className="rule">
          <ul>
          <li>Minimum 8 characters</li>
          <li>At least one uppercase letter</li>
          <li>At least one lowercase letter</li>
          </ul>
          <ul>
          <li>Include at least one number</li>
          <li>Include one special character (!@#$%^&*)</li>
          <li>Avoid using common words or personal info</li></ul>
        </ul>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        
        <p>© 2026 Password Strength Checker | Secure Your Digital Life</p>
      </footer>

    </div>

  );
}

export default App;