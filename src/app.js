const fs = require("fs");
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const path = require("path");

//Configure the View Directory and Engine
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");//configuration property for the view engine

//serve static files-- css and js files
app.use(express.static(path.join(__dirname,"public")));

//render the index in view
app.get("/", (req,res) => res.render("index",{title:"Index"}));

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
