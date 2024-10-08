/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Modal.css';

function Modal({ show, onClose, onSetup }) {
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

  const handleOverlayKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClose();
    }
  };

  const handleContentKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={handleOverlayKeyDown}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onKeyDown={handleContentKeyDown}
      >
        <button type="button" className="modal-close" onClick={onClose}>
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
            placeholder={t('enterBudget')}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <button type="submit">{t('setupTeam')}</button>
        </form>
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSetup: PropTypes.func.isRequired,
};

export default Modal;
