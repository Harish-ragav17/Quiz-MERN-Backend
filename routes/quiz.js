const express = require("express");
const router = express.Router();

router.get("/getalltopics", (req, res) => {
  res.send("Users");
});

router.get("/getquizquestions", (req, res) => {
    res.send("Users");
  });

router.post("/getquizquestions", (req, res) => {
    res.send("Users");
  });

  

module.exports = router;
