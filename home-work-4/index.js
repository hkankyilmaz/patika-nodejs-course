const fs = require("fs");

let temparr = '{ "name": "Employee 1 Name", "salary": 2000 }';

fs.writeFile("employess.json", temparr, "utf-8", (err, data) => {
  if (err) throw err;
});

fs.readFile("employess.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(
  "employess.json",
  '{ "name": "Employee 1 Name", "salary": 3000 }',
  "utf-8",
  (err, data) => {
    if (err) throw err;
  }
);

fs.unlink("employess.json", (err, data) => {
  if (err) throw err;
  console.log(data);
});
