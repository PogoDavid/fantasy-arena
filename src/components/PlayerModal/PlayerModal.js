import React, { useEffect, useState } from 'react';
import { recommendedPlayers } from '../../data/mockData';
import './PlayerModal.css';

const PlayerModal = ({ position, onClose }) => {
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
    return <div className="modal">Loading...</div>;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select a Player for {position.toUpperCase()}</h2>
        <input
          type="text"
          placeholder="Search for a player..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <h3>Top Recommended Players</h3>
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
                  <p>Price: ${player.price}M</p>
                  <p>Goals: {player.goals}, Assists: {player.assists}</p>
                  <p>Matches: {player.matches}, Avg. Rating: {player.avgRating}</p>
                  <p>Yellow Cards: {player.yellowCards}, Red Cards: {player.redCards}</p>
                </div>
                <div className="recent-performance">
                  <h4>Last 5 Games</h4>
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
                <button onClick={() => handlePlayerSelect(player)}>Select</button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PlayerModal;





