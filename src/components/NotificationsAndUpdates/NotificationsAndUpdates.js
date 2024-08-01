import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './NotificationsAndUpdates.css';

function NotificationsAndUpdates() {
  return (
    <Card className="notifications-card">
      <CardContent>
        <Typography variant="h5">Notifications and Updates</Typography>
        {Array.from({ length: 20 }).map((_, index) => (
          <Typography variant="body2" color="textSecondary" component="p" key={index}>
            Notification {index + 1}: +5 points: Goal by Player A
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default NotificationsAndUpdates;
