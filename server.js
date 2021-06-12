var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
  
// mongoose instance connection url connection
const db = require('./api/models/index');
mongoose.Promise = global.Promise;
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    // process.exit();
  });

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // call by default index.html page  
// app.get("*",function(req,res){   
//   res.sendFile(path.join(__dirname,'/') +'/index.html');  
// })

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
// app.use(express.static(path.join(__dirname, 'public')))


var routes = require('./api/routes/index'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);







