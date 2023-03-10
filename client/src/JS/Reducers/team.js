import { FAIL_TEAM, LOAD_TEAM, ONE_TEAM, SUCC_TEAM } from "../ActionTypes/team";

const initialState = {
  listTeams: [],
  errors: null,
  load: false,
  teamToGet: {},
};

const teamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TEAM:
      return { ...state, load: true };
    case SUCC_TEAM:
      return { ...state, load: false, listTeams: payload.listTeams };
    case FAIL_TEAM:
      return { ...state, load: false, errors: payload };
    case ONE_TEAM:
      return { ...state, load: false, teamToGet: payload.teamToGet };
    default:
      return state;
  }
};

export default teamReducer;
