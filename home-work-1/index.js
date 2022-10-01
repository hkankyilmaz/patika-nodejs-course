let r = +process.argv.slice(2)[0];
const getPlace = (r) => {
  console.log("radius:", r, "place:", 2 * Math.PI * r * r);
  return null;
};

getPlace(process.argv.slice(2)[0]);
