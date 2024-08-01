import React from 'react';
import './WelcomeSection.css';

const mockUser = {
  name: 'John Doe',
};

function WelcomeSection() {
  return (
    <div className="welcome-section">
      <h1>Welcome, {mockUser.name}!</h1>
    </div>
  );
}

export default WelcomeSection;
