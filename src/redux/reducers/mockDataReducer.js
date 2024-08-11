import { recommendedPlayers } from '../data/mockData';
import formations from '../data/formations';

const initialState = {
  recommendedPlayers,
  formations,
};

// eslint-disable-next-line default-param-last
const mockDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECOMMENDED_PLAYERS':
      return {
        ...state,
        recommendedPlayers: action.payload,
      };
    default:
      return state;
  }
};

export default mockDataReducer;
