const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

//Middlewares
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
