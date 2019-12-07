const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the files in the client build folder. Necessary for the React frontend
app.use(express.static(path.join(__dirname, "./client/build/")))

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
  console.log(`Server now listening on PORT ${PORT}!`);
});
