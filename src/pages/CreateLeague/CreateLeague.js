import React from 'react';
import { useTranslation } from 'react-i18next';
import './CreateLeague.css';

function CreateLeague() {
  const { t } = useTranslation();

  return (
    <div className="create-league">
      <form>
        <h2>{t('createLeague')}</h2>
        <div className="form-group">
          <label htmlFor="leagueName">{t('leagueName')}</label>
          <input type="text" id="leagueName" name="leagueName" />
        </div>
        <div className="form-group">
          <label htmlFor="budget">{t('budget')}</label>
          <input type="number" id="budget" name="budget" />
        </div>
        <div className="form-group">
          <label htmlFor="numLeagues">{t('numLeagues')}</label>
          <input type="number" id="numLeagues" name="numLeagues" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="pointsFor">{t('pointsFor')}</label>
          <div className="sub-group">
            <label htmlFor="scoredGoal">{t('scoredGoal')}</label>
            <input type="number" id="scoredGoal" name="scoredGoal" />
          </div>
          <div className="sub-group">
            <label htmlFor="assist">{t('assist')}</label>
            <input type="number" id="assist" name="assist" />
          </div>
          <div className="sub-group">
            <label htmlFor="yellowCard">{t('yellowCard')}</label>
            <input type="number" id="yellowCard" name="yellowCard" />
          </div>
          <div className="sub-group">
            <label htmlFor="redCard">{t('redCard')}</label>
            <input type="number" id="redCard" name="redCard" />
          </div>
          <div className="sub-group">
            <label htmlFor="ownGoal">{t('ownGoal')}</label>
            <input type="number" id="ownGoal" name="ownGoal" />
          </div>
          <div className="sub-group">
            <label htmlFor="cleanSheet">{t('cleanSheet')}</label>
            <input type="number" id="cleanSheet" name="cleanSheet" />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit">{t('createLeague')}</button>
          <button type="button">{t('cancel')}</button>
        </div>
      </form>
    </div>
  );
}

export default CreateLeague;
