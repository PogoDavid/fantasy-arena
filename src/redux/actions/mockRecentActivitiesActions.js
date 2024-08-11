import { recentActivities } from '../data/mockRecentActivities';

export const SET_RECENT_ACTIVITIES = 'SET_RECENT_ACTIVITIES';

export const setRecentActivities = () => ({
  type: SET_RECENT_ACTIVITIES,
  payload: recentActivities,
});
