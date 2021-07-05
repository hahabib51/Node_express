const express = require("express");
let axios = require("axios");
var app = express();

// Old broken code
/* app.post("/", function (req, res, next) {
  try {
    let results = req.body.developers.map(async (d) => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch {
    next(err);
  }
}); */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Refactored
app.post("/", async function (req, res, next) {
  try {
    let devs = req.body.developers;
    let payload = [];
    let usernamePromises = [];

    for (i in devs) {
      usernamePromises.push(
        axios.get(`https://api.github.com/users/${devs[i]}`)
      );
    }

    Promise.all(usernamePromises)
      .then((usernameArr) =>
        usernameArr.forEach((u) =>
          payload.push({ name: u.data.name, bio: u.data.bio })
        )
      )
      .then(() => {
        return res.send(JSON.stringify(payload));
      })
      .catch((err) => console.log(err));
  } catch (err) {
    next(err);
  }
});

module.exports = app;

