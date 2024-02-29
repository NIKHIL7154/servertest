const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/good",(req,res)=>res.send("Everything is fair in love and war."))

app.listen(5000, () => console.log("Server ready on port 3000."));

