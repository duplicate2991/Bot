console.log("hii");
var app = require("express")();
app.listen(3000);
// Get the current UTC time
var currentUTCDate = new Date();

// Adjust the UTC time by adding 5 hours and 30 minutes
currentUTCDate.setUTCHours(currentUTCDate.getUTCHours() + 5);
currentUTCDate.setUTCMinutes(currentUTCDate.getUTCMinutes() + 30);

// Format the date as a string (you can adjust the format as needed)
var formattedDate = currentUTCDate.toISOString();

console.log(formattedDate);

let uptime = 0;
setInterval(() => {
  uptime++;
}, 1000);
app.get("/", (q, res) => {
  res.send(`${uptime} , started: ${formattedDate}`);
});
