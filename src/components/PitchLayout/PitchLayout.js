import React, { useState } from 'react';
import './PitchLayout.css';
import PropTypes from 'prop-types';
import formations from '../../data/formations';
import PlayerModal from '../PlayerModal/PlayerModal';

function PitchLayout({ formation }) {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formationPositions = formations[formation] || formations['4-3-3'];

  const handlePositionClick = (pos) => {
    setSelectedPosition(pos);
    setIsModalOpen(true);
  };

  return (
    <div className="pitch">
      {Object.keys(formationPositions).map((pos) => (
        <div
          key={pos}
          className={`position ${pos.toLowerCase()}`}
          style={{ gridColumn: formationPositions[pos].column, gridRow: formationPositions[pos].row }}
          onClick={() => handlePositionClick(pos)}
        >
          {pos.toUpperCase()}
        </div>
      ))}
      {isModalOpen && (
        <PlayerModal
          position={selectedPosition}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

PitchLayout.propTypes = {
  formation: PropTypes.string.isRequired,
};

export default PitchLayout;
