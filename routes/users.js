const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Users = require("../model/userModel");

router.post("/login", async (req, res) => {
  const userName = req.body.username;
  const password = req.body.password;

  await Users.findOne({ username: userName }).then((user) => {
    if (user) {
        if(user.password == password)
        {
            const token = jwt.sign({ id: user._id, username: user.username },"secret",{ expiresIn: "1d" });
            res.cookie("token", token);
            res.json({
              response:"login sucess",
              data: { username: user.username,name:user.name, role: user.role },
            });
        }
        else
        {
          res.cookie("token", "");
          res.json({
            response: "Please Check your Username and Password..!",
          });
        }
    } else {
      res.cookie("token", "");
      res.json({
        response: "User not found..! Please Signup.",
      });
    }
  });
});

router.get("/logout", async (req, res) => {
  res.cookie("token","");
  res.json({
    response:"Logged out!"
  })
});

router.post("/getScore",async(req,res)=>{
  await Users.findOne({ username: req.body.username }).then((user) => {
   res.send({score:user.score});
  })
})

router.post("/updateScore",async(req,res)=>{
  const user=await Users.findOne({ username: req.body.username });
  await Users.findOneAndUpdate(
    { username: req.body.username },
    {$set:{score:user.score+req.body.score}},
    {new : true}
    
  ).then((user) => {
   res.send({score:user.score});
  })
})

module.exports = router;
