import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import PitchLayout from '../../components/PitchLayout/PitchLayout';
import { useTranslation } from 'react-i18next';
import './Draft.css';

const Draft = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(true);
  const [formation, setFormation] = useState(null);
  const [budget, setBudget] = useState(null);

  const handleSetup = (selectedFormation, enteredBudget) => {
    setFormation(selectedFormation);
    setBudget(enteredBudget);
    setShowModal(false);
  };

  return (
    <div className="draft-container">
      {showModal && <Modal show={showModal} onClose={() => setShowModal(false)} onSetup={handleSetup} />}
      {formation && budget && (
        <>
          <div className="remaining-budget">{t('remainingBudget')}: {budget}M</div>
          <PitchLayout formation={formation} />
          <div className="buttons">
            <button>{t('saveTeamAndExit')}</button>
            <button>{t('addTeamToLeague')}</button>
            <button>{t('reset')}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Draft;




