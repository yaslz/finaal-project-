import { FAIL_TEAM, LOAD_TEAM, ONE_TEAM, SUCC_TEAM } from "../ActionTypes/team";
import axios from "axios";

export const getTeams = () => async (dispatch) => {
  dispatch({ type: LOAD_TEAM });
  try {
    let result = await axios.get("/api/team/all");
    dispatch({ type: SUCC_TEAM, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_TEAM, payload: error.response });
  }
};

export const addTeam = (newTeam) => async (dispatch) => {
  try {
    await axios.post("/api/team/add", newTeam);
    dispatch(getTeams());
  } catch (error) {
    dispatch({ type: FAIL_TEAM, payload: error.response });
  }
};

export const deleteTeam = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/team/${id}`);
    dispatch(getTeams());
  } catch (error) {
    dispatch({ type: FAIL_TEAM, payload: error.response });
  }
};

export const editTeam = (id, newTeam) => async (dispatch) => {
  try {
    await axios.put(`/api/team/${id}`, newTeam);
    dispatch(getTeams());
  } catch (error) {
    dispatch({ type: FAIL_TEAM, payload: error.response });
  }
};

export const getTeam = (id) => async (dispatch) => {
  dispatch({ type: LOAD_TEAM });
  try {
    let result = await axios.get(`/api/team/${id}`);
    dispatch({ type: ONE_TEAM, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_TEAM, payload: error.response });
  }
};
