import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import TeamList from "../Components/TeamList";
import { addTeam } from "../JS/Actions/team";
import { Link } from "react-router-dom";

const Team = () => {
  const [newTeam, setNewTeam] = useState({ name: "", lastName: "", poste: "" });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewTeam({ ...newTeam, [e.target.name]: e.target.value });
  }
    const add = () => {
      dispatch(addTeam(newTeam));
    };
  
  return (
    <div>
      <Form.Label>Add team </Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter a name.."
        name="name"
        value={newTeam.name}
        onChange={handleChange}
      />
      <Form.Label>Add team </Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter a lastname.."
        name="lastName"
        value={newTeam.lastName}
        onChange={handleChange}
      />
      <Form.Label>Add team </Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter a poste.."
        name="poste"
        value={newTeam.poste}
        onChange={handleChange}
      />
      
      <Link to="/team">
        <Button variant="primary" type="submit" onClick={() => add()}>
          Add new Team..
        </Button>
      </Link>

      <TeamList />
    </div>
  );
};

export default Team;
