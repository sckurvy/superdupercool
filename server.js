import express from "express";
import fs from "fs";
const app = express();

app.use(express.json());

// Log endpoint
app.post("/log", (req, res) => {
  const entry = `${new Date().toISOString()} - ${req.body.name} - ${req.ip}\n`;
  fs.appendFileSync("visits.log", entry);
  res.sendStatus(200);
});

// Serve everything in the current folder
app.use(express.static("."));

app.listen(3000, () => console.log("Server running on port 3000"));
