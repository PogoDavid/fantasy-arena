import React, { useEffect, useState } from 'react';
import { recommendedPlayers } from '../../data/mockData';
import { useTranslation } from 'react-i18next';
import './PlayerModal.css';

const PlayerModal = ({ position, onClose }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const positionKey = position.toLowerCase().includes('def') ? 'defenders' :
                         position.toLowerCase().includes('mid') ? 'midfielders' :
                         position.toLowerCase().includes('fwd') ? 'forwards' : 'goalkeepers';
      setPlayers(recommendedPlayers[positionKey]);
      setLoading(false);
    }, 2000);
  }, [position]);

  const handlePlayerSelect = (player) => {
    console.log('Selected player:', player);
    onClose();
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="modal">{t('loading')}</div>;
  }

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
          {filteredPlayers.map(player => (
            <li key={player.id} className="player-item">
              <div className="player-info">
                <div className="player-header">
                  <div className="player-photo-placeholder"></div>
                  <div className="club-logo-placeholder"></div>
                </div>
                <div className="player-details">
                  <h3>{player.name}</h3>
                  <p>{t('price')}: ${player.price}MM</p>
                  <p>{t('goals')}: {player.goals}, {t('assists')}: {player.assists}</p>
                  <p>{t('matches')}: {player.matches}, {t('avgRating')}: {player.avgRating}</p>
                  <p>{t('yellowCards')}: {player.yellowCards}, {t('redCards')}: {player.redCards}</p>
                </div>
                <div className="recent-performance">
                  <h4>{t('lastFiveGames')}</h4>
                  <div className="performance-icons">
                    {player.lastFiveGames.map((game, index) => (
                      <div key={index} className="game-performance">
                        <div className="opponent-logo-placeholder"></div>
                        <div className="performance-indicators">
                          {game.goals > 0 && <div className="goal-indicator"></div>}
                          {game.assists > 0 && <div className="assist-indicator"></div>}
                          {game.yellowCards > 0 && <div className="yellow-card-indicator"></div>}
                          {game.redCards > 0 && <div className="red-card-indicator"></div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={() => handlePlayerSelect(player)}>{t('select')}</button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>{t('close')}</button>
      </div>
    </div>
  );
};

export default PlayerModal;





