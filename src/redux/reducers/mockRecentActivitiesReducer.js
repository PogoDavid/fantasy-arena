import { SET_RECENT_ACTIVITIES } from '../actions/mockRecentActivitiesActions';

const initialState = {
  recentActivities: [],
};

// eslint-disable-next-line default-param-last
const mockRecentActivitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECENT_ACTIVITIES:
      return {
        ...state,
        recentActivities: action.payload,
      };
    default:
      return state;
  }
};

export default mockRecentActivitiesReducer;
