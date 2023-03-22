const express = require("express");
const Team = require("../models/Team");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("hello yasmine ellouze");
});

router.post("/add", async (req, res) => {
  try {
    const { name, lastName, poste } = req.body;
    const newTeam = new Team({ name, lastName, poste });
    await newTeam.save();
    res.status(200).send({ msg: "Team add successfully...", newTeam });
  } catch (error) {
    res.status(400).send({ msg: "Team can not be added!!", error });
  }
});

router.get("/all", async (req, res) => {
  try {
    const listTeams = await Team.find();
    res.status(200).send({ msg: "This is the list of all team...", listTeams });
  } catch (error) {
    res.status(400).send({ msg: "Can not get all the list!!", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const teamToGet = await Team.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "I get the team...", teamToGet });
  } catch (error) {
    res.status(400).send({ msg: "Can not get the team with this id!!", error });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Team.findOneAndDelete({ _id });
    res.status(200).send({ msg: "Team deleted..." });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete this team !!", error });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Team.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ msg: "Team updated..." });
  } catch (error) {
    res.status(400).send({ msg: "Can not update this team !!", error });
  }
});

module.exports = router;
