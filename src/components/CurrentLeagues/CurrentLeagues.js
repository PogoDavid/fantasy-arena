import React from 'react';
import {
  Card, CardContent, Typography, Grid,
} from '@mui/material';
import './CurrentLeagues.css';
import { useTranslation } from 'react-i18next';

function CurrentLeagues() {
  const { t } = useTranslation();
  return (
    <Card className="current-leagues-card">
      <CardContent>
        <Typography variant="h5">{t('currentLeagues')}</Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <div className="league-circle">
              <Typography variant="h6" className="league-text">{t('league1')}</Typography>
            </div>
          </Grid>
          <Grid item>
            <div className="league-circle">
              <Typography variant="h6" className="league-text">{t('league2')}</Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CurrentLeagues;
