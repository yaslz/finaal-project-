import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTeam } from "../JS/Actions/team";

const TeamCard = ({ team }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?s=612x612&w=0&k=20&c=BVOfS7mmvy2lnfBPghkN__k8OMsg7Nlykpgjn0YOHj0="
        />
        <Card.Body>
          <Card.Title>{team.name}</Card.Title>
          <Card.Text>{team.lastName}</Card.Text>
          <Card.Text>{team.poste}</Card.Text>
          <Button
            variant="primary"
            onClick={() => dispatch(deleteTeam(team._id))}
          >
            Delete Team..
          </Button>
          <Button
            variant="primary"
            onClick={() => navigate(`/edit/${team._id}`)}
          >
            Edit Team..
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamCard;
