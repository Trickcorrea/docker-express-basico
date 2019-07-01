var express = require("express");

var app = express();
var router = express.Router();

const PORT = process.env.PORT | 3000;

const home = router.get("/",function(req,res){
  res.send("Ola mundo - home");
});

const App = router.get("/app",function(req,res){
    res.send("Ola mundo - app");
});

app.use("/", home);
app.use("/", App);

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!')
})