import React from 'react';
import './WelcomeSection.css';
import { useTranslation } from 'react-i18next';

const mockUser = {
  name: 'John Doe',
};

function WelcomeSection() {
  const { t } = useTranslation();
  return (
    <div className="welcome-section">
      <h1>{t('welcome', { name: mockUser.name })}</h1>
    </div>
  );
}

export default WelcomeSection;
