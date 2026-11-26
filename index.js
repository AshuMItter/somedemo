function add(a, b) {
  return a + b;
}

module.exports = { add };
console.log("App running:", add(2, 3));
console.log("App is running and is getting CI / CDed ....")