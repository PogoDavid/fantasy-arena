import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './NotificationsAndUpdates.css';

function NotificationsAndUpdates() {
  const { t } = useTranslation();
  return (
    <Card className="notifications-card">
      <CardContent>
        <Typography variant="h5">{t('notificationsAndUpdates')}</Typography>
        {Array.from({ length: 20 }).map((_, index) => (
          <Typography variant="body2" color="textSecondary" component="p" key={index}>
            {t('notification', { number: index + 1 })}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default NotificationsAndUpdates;
