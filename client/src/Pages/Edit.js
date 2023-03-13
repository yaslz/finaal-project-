import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editTeam, getTeam } from "../JS/Actions/team";

const Edit = () => {
  const [newTeam, setNewTeam] = useState({ name: "", lastName: "", poste: "" });
  const dispatch = useDispatch();
  const teamToGet = useSelector((state) => state.teamReducer.teamToGet);
  const match = useMatch("/edit/:id");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewTeam({ ...newTeam, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(getTeam(match.params.id));
  });
  const handleEdit = () => {
    dispatch(editTeam(match.params));
    navigate(-1);
  };

  return (
    <div>
      <Form.Label>Add team </Form.Label>
      <Form.Control
        type="text"
        placeholder={`${teamToGet.name}`}
        name="name"
        value={newTeam.name}
        onChange={handleChange}
      />
      <Form.Label>Add team </Form.Label>
      <Form.Control
        type="text"
        placeholder={`${teamToGet.lastName}`}
        name="lastName"
        value={newTeam.lastName}
        onChange={handleChange}
      />
      <Form.Label>Add team </Form.Label>
      <Form.Control
        type="text"
        placeholder={`${teamToGet.poste}`}
        name="poste"
        value={newTeam.poste}
        onChange={handleChange}
      />
      <Link to="/team">
        <Button variant="primary" type="submit" onClick={handleEdit}>
          Edit Team..
        </Button>
      </Link>
    </div>
  );
};

export default Edit;
