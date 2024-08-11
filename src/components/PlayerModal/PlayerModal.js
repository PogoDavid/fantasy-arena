import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import './PlayerModal.css';

function PlayerModal({ position, onClose }) {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const recommendedPlayers = useSelector(
    (state) => state.mockData.recommendedPlayers
  );

  const getPlayerKey = (pos) => {
    if (pos.toLowerCase().includes('def')) return 'defenders';
    if (pos.toLowerCase().includes('mid')) return 'midfielders';
    if (pos.toLowerCase().includes('fwd')) return 'forwards';
    return 'goalkeepers';
  };

  const positionKey = getPlayerKey(position);
  const players = recommendedPlayers[positionKey];

  const handlePlayerSelect = (player) => {
    console.log('Selected player:', player);
    onClose();
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{t('selectPlayer', { position: position.toUpperCase() })}</h2>
        <input
          type="text"
          placeholder={t('searchPlayer')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <h3>{t('topRecommendedPlayers')}</h3>
        <ul className="player-list">
          {filteredPlayers.map((player) => (
            <li key={player.id} className="player-item">
              <div className="player-info">
                <div className="player-header">
                  <div className="player-photo-placeholder" />
                  <div className="club-logo-placeholder" />
                </div>
                <div className="player-details">
                  <h3>{player.name}</h3>
                  <p>
                    {t('price')}: ${player.price} MM
                  </p>
                  <p>
                    {t('goals')}: {player.goals}, {t('assists')}:{' '}
                    {player.assists}
                  </p>
                  <p>
                    {t('matches')}: {player.matches}, {t('avgRating')}:{' '}
                    {player.avgRating}
                  </p>
                  <p>
                    {t('yellowCards')}: {player.yellowCards}, {t('redCards')}:{' '}
                    {player.redCards}
                  </p>
                </div>
                <div className="recent-performance">
                  <h4>{t('lastFiveGames')}</h4>
                  <div className="performance-icons">
                    {player.lastFiveGames.map((game) => (
                      <div key={game.match} className="game-performance">
                        <div className="opponent-logo-placeholder" />
                        <div className="performance-indicators">
                          {game.goals > 0 && <div className="goal-indicator" />}
                          {game.assists > 0 && (
                            <div className="assist-indicator" />
                          )}
                          {game.yellowCards > 0 && (
                            <div className="yellow-card-indicator" />
                          )}
                          {game.redCards > 0 && (
                            <div className="red-card-indicator" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handlePlayerSelect(player)}
                >
                  {t('select')}
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button type="button" onClick={onClose}>
          {t('close')}
        </button>
      </div>
    </div>
  );
}

PlayerModal.propTypes = {
  position: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PlayerModal;
