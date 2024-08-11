import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './PitchLayout.css';
import PropTypes from 'prop-types';
import PlayerModal from '../PlayerModal/PlayerModal';

function PitchLayout({ formation }) {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formations = useSelector((state) => state.mockData.formations);

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
          style={{
            gridColumn: formationPositions[pos].column,
            gridRow: formationPositions[pos].row,
          }}
          onClick={() => handlePositionClick(pos)}
          onKeyDown={(e) => e.key === 'Enter' && handlePositionClick(pos)}
          role="button"
          tabIndex={0}
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
