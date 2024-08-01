import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import PitchLayout from '../../components/PitchLayout/PitchLayout';
import './Draft.css';

const Draft = () => {
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
          <div className="remaining-budget">Remaining Budget: {budget}M</div>
          <PitchLayout formation={formation} />
          <div className="buttons">
            <button>Save Team and Exit</button>
            <button>Add Team to a League</button>
            <button>Reset</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Draft;




