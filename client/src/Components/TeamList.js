import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../JS/Actions/team";
import TeamCard from "../Components/TeamCard";

const TeamList = () => {
  const listTeams = useSelector((state) => state.teamReducer.listTeams);
  const load = useSelector((state) => state.teamReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <div>
      {load ? (
        <h2>LOADING...</h2>
      ) : (
        listTeams.map((el) => <TeamCard team={el} key={el._id} />)
      )}
    </div>
  );
};

export default TeamList;
