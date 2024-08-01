import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import './CurrentLeagues.css';

function CurrentLeagues() {
  return (
    <Card className="current-leagues-card">
      <CardContent>
        <Typography variant="h5">Current Leagues</Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <div className="league-circle">
              <Typography variant="h6" className="league-text">League 1</Typography>
            </div>
          </Grid>
          <Grid item>
            <div className="league-circle">
              <Typography variant="h6" className="league-text">League 2</Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CurrentLeagues;
