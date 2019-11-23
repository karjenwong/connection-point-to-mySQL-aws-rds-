const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

app.get("/allinventory", (req, res) => {
  res.json({ "response": data })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});