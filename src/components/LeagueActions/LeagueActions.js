import React from 'react';
import { useTranslation } from 'react-i18next';
import './LeagueActions.css';

const LeagueActions = () => {
    const { t } = useTranslation();
    return (
        <div className="league-actions">
            <button className="league-button">{t('createLeague')}</button>
            <button className="league-button">{t('joinLeague')}</button>
        </div>
    );
};

export default LeagueActions;
