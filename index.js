console.log("hii");
var app = require("express")();
app.listen(3000);
let uptime = 0;
setIntervalsetInterval(() => {
  uptime++;
}, 1000);
app.get("/", (q, res) => {
  res.send(`${uptime}`);
});
