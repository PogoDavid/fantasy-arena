import React, { useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { setRecentActivities } from '../../redux/actions/mockRecentActivitiesActions';
import './RecentActivity.css';

function RecentActivity() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const activities = useSelector(
    (state) => state.recentActivities.recentActivities
  );

  useEffect(() => {
    dispatch(setRecentActivities());
  }, [dispatch]);

  return (
    <Card className="recent-activity-card">
      <CardContent>
        <Typography variant="h5">{t('recentActivity')}</Typography>
        {activities.map((activity) => (
          <div key={activity.id}>
            <Typography variant="body2" color="textSecondary" component="p">
              {activity.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {activity.timestamp}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default RecentActivity;
