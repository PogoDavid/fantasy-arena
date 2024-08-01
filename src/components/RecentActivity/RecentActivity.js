import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './RecentActivity.css';

function RecentActivity() {
  return (
    <Card className="recent-activity-card">
      <CardContent>
        <Typography variant="h5">Recent Activity</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You joined League 1
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          2 hours ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You drafted a new player
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          1 day ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You traded Player A for Player B
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          2 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You updated your team lineup
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          3 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You won your last match
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          4 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You joined League 2
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          5 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You added a new player to your watchlist
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          6 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You removed Player C from your team
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          7 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You signed a new coach
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          8 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Your team won the league
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          9 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You participated in a draft event
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          10 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You scouted new players
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          11 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You held a press conference
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          12 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You upgraded your stadium
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          13 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You signed a new sponsorship deal
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          14 days ago
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          You attended a board meeting
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          15 days ago
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RecentActivity;
