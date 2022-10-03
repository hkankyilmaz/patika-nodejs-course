const express = require("express");
const app = express();
const port = 2000;

const blog = { id: 1, title: "Blog title", description: "Blog description" };

app.get("/", (req, res) => {
  app.send(blog);
});

app.listen(port, () => {
  console.log(`App has been started on ${port} port...`);
});
