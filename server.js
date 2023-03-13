const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());

const connectDB = require("./config/connectDB");
connectDB();

app.use("/api/team", require("./routes/team"));

app.use("/api/user", require("./routes/user"));

app.use("api/admin", require("./routes/admin"));

const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  error
    ? console.error(`Failed to connect to server !!!${PORT}`)
    : console.log(`Server is running on port ${PORT}...`);
});
