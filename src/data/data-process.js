const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

const fileDir = path.join(__dirname, "./covid-data-sample");

const files = fs
  .readdirSync(fileDir)
  .sort((a, b) => new Date(new Date(b.slice(0, 10))) - new Date(a.slice(0, 10)))
  .reverse();
const resultFile = path.join(__dirname, "./data.json");
const results = {};

files.forEach((file) => {
  const filePath = path.join(__dirname, `./covid-data/${file}`);
  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => {
      if (data["Country_Region"] === "India") {
        if (results[data["Province_State"]]) {
          results[data["Province_State"]].history.push({
            [file.slice(0, 10)]: data,
          });
        } else {
          results[data["Province_State"]] = {
            history: [{ [file.slice(0, 10)]: data }],
          };
        }
      }
    })
    .on("end", () => {
      fs.writeFileSync(resultFile, JSON.stringify(results));
    });
});
