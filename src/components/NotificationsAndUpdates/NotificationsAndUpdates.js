import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './NotificationsAndUpdates.css';

function NotificationsAndUpdates() {
  const { t } = useTranslation();

  const notifications = Array.from({ length: 20 }, (_, index) => ({
    id: `notif-${index + 1}`,
    message: t('notification', { number: index + 1 }),
  }));
  return (
    <Card className="notifications-card">
      <CardContent>
        <Typography variant="h5">{t('notificationsAndUpdates')}</Typography>
        {notifications.map((notification) => (
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            key={notification.id}
          >
            {notification.message}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default NotificationsAndUpdates;
