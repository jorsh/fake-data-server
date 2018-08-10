const jsf = require("json-schema-faker");
const schema = require("./schema");
const fs = require("fs");

jsf.extend("faker", function() {
  let faker = require("faker");
  faker.locale = "es_MX";

  return faker;
});

jsf.extend("chance", function() {
  let chance = require("chance").Chance();

  return chance;
});

let json = JSON.stringify(jsf(schema));

fs.writeFile("./data/db.json", json, function(err) {
  if (err) {
    return console.error(err);
  } else {
    console.info("Data generated.");
  }
});
