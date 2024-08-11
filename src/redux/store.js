import { configureStore } from '@reduxjs/toolkit';
import mockDataReducer from './reducers/mockDataReducer';
import mockRecentActivitiesReducer from './reducers/mockRecentActivitiesReducer';

const store = configureStore({
  reducer: {
    mockData: mockDataReducer,
    recentActivities: mockRecentActivitiesReducer,
  },
});

export default store;
