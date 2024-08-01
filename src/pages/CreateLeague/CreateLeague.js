import React from 'react';
import './CreateLeague.css';

function CreateLeague() {
  return (
    <div className="create-league">
      <form>
        <h2>Create a League</h2>
        <div className="form-group">
          <label htmlFor="leagueName">League Name:</label>
          <input type="text" id="leagueName" name="leagueName" />
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget:</label>
          <input type="number" id="budget" name="budget" />
        </div>
        <div className="form-group">
          <label htmlFor="numLeagues">Number of Leagues:</label> 
          <input type="number" id="numLeagues" name="numLeagues" min="1" /> 
        </div>
        <div className="form-group">
          <label>Points for:</label>
          <div className="sub-group">
            <label htmlFor="scoredGoal">- Scored Goal:</label>
            <input type="number" id="scoredGoal" name="scoredGoal" />
          </div>
          <div className="sub-group">
            <label htmlFor="assist">- Assist:</label>
            <input type="number" id="assist" name="assist" />
          </div>
          <div className="sub-group">
            <label htmlFor="yellowCard">- Yellow Card:</label>
            <input type="number" id="yellowCard" name="yellowCard" />
          </div>
          <div className="sub-group">
            <label htmlFor="redCard">- Red Card:</label>
            <input type="number" id="redCard" name="redCard" />
          </div>
          <div className="sub-group">
            <label htmlFor="ownGoal">- Own Goal:</label>
            <input type="number" id="ownGoal" name="ownGoal" />
          </div>
          <div className="sub-group">
            <label htmlFor="cleanSheet">- Keeper Clean Sheet:</label>
            <input type="number" id="cleanSheet" name="cleanSheet" />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit">Create League</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateLeague;


