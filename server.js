// server.js
// where your node app starts


const express = require("express");
const app = express();


const api = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];



app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname +  "/views/index.html");
});

app.get("/data", (req, res) => {
  res.sendFile(__dirname +  "/views/get-data.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});


app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})


app.get("/api", (request, res) => {

  res.json(api);
  console.log(api); 
  res.sendFile("views/index.html")
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);

});


