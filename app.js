var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
const cors = require("cors");


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
  
//Setup db connection
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


//Static files
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.use(express.static(path.join(__dirname, '/public')));

//Setup extensions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cookieParser());

// app.use(session({
//     secret: 'chat room',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {}
// }));
// app.use(flash());


//Setup router
// app.use('/', routes);

var routes = require('./api/routes/index'); //importing route
routes(app); //register the route

// app.listen(port);

// console.log('todo list RESTful API server started on: ' + port);

//Setup middlewares
// app.use(errorsHandler.notFound);

module.exports = app;
















