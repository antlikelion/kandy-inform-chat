const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const pubilcDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(pubilcDirectoryPath));

app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index");
});

app.get("/kpop", (req, res) => {
  res.render("kpop");
});

app.get("/bts", (req, res) => {
  res.render("bts");
});

app.get("/historical", (req, res) => {
  res.render("historical");
});

app.get(`/post/:topic`, (req, res) => {
  let object = {
    title,
    imgSrc,
    mid_title,
    content
  };
  switch (req.params.topic) {
    // case bulgogi:
    //   break;
    // case hotteok:
    //   break;
    // case sundubu:
    //   break;
    // case kfc:
    //   break;
    // case contemporary:
    //   break;
    // case toongcaron:
    //   break;
    case ocean:
      break;
    case mountain:
      break;
    case river:
      break;
    case bts:
      break;
    case exo:
      break;
    case twice:
      break;
    case dmz:
      object.title = "Korean Demilitarized Zone";
      object.imgSrc = "./img/dmz-2";
      object.mid_title = "Korean Demilitarized Zone(DMZ)";
      object.content = `The Korean Demilitarized is a strip of land running across the Korean Peninsula. It is established by the provisions of the Korean Armistice Agreement to serve as a buffer zone between North Korea and South Korea. The demilitarized zone (DMZ) is a border barrier that divides the Korean Peninsula roughly in half. It was created by agreement between North Korea, China and the United Nations Command in 1953. The DMZ is 250 kilometres (160 miles) long, and about 4 kilometres (2.5 miles) wide.
      The 38th parallel north—which divides the Korean Peninsula roughly in half—was the original boundary between the United States and Soviet Union's brief administration areas of Korea at the end of World War II. Upon the creation of the Democratic People's Republic of Korea (DPRK, informally "North Korea") and the Republic of Korea (ROK, informally "South Korea") in 1948, it became a de facto international border and one of the most tense fronts in the Cold War.
      Both the North and the South remained dependent on their sponsor states from 1948 to the outbreak of the Korean War. That conflict, which claimed over three million lives and divided the Korean Peninsula along ideological lines, commenced on 25 June 1950, with a full-front DPRK invasion across the 38th parallel, and ended in 1953 after international intervention pushed the front of the war back to near the 38th parallel.
      (source: Wikipedia)
      `;
      break;
    case wmok:
      break;
    case changdeokgung:
      break;
    case gyeongbokgung:
      break;
    case bulguksa:
      break;
    case myengdong:
      break;
  }
  res.render("post", object);
});

app.listen(port, () => {
  console.log("Server is up on port 3000");
});
