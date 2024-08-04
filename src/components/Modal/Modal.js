import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Modal.css';

const Modal = ({ show, onClose, onSetup }) => {
  const { t } = useTranslation();
  const [selectedFormation, setSelectedFormation] = useState('4-3-3');
  const [budget, setBudget] = useState('');

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budget > 0) {
      onSetup(selectedFormation, budget);
      onClose();
    } else {
      alert(t('invalidBudget'));
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <form className="formation-setup" onSubmit={handleSubmit}>
          <h2>{t('selectFormation')}</h2>
          <label htmlFor="formation">{t('formation')}:</label>
          <select
            id="formation"
            value={selectedFormation}
            onChange={(e) => setSelectedFormation(e.target.value)}
          >
            <option value="4-3-3">4-3-3</option>
            <option value="4-4-2">4-4-2</option>
            <option value="3-5-2">3-5-2</option>
            <option value="4-2-3-1">4-2-3-1</option>
          </select>
          <label htmlFor="budget">{t('budget')}:</label>
          <input
            type="number"
            id="budget"
            placeholder="Enter budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <button type="submit">{t('setupTeam')}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

