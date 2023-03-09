const mongoose = require("mongoose");

const schema = mongoose.Schema;

const teamSchema = new schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  poste: { type: String, required: true },
});

module.exports = Team = mongoose.model("team", teamSchema);
