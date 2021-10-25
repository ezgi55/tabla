require("module-alias/register");
const helmet = require("helmet");
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const morgan = require("morgan");
const monitoring = require("~root/utils/monitoring");
// prevent running against production database by mistake
require("~root/utils/exitIfProductionDatabase")();

const port = process.env.PORT || 3001;
const app = express();
// see https://expressjs.com/en/guide/behind-proxies.html
app.set("trust proxy", 1);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(compression());
app.use(morgan("combined", { stream: monitoring.stream }));

if (process.env.APP_ENVIRONMENT === "PRODUCTION") {
  // 30 requests per minute per IP
  const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 60 // limit each IP to 30 requests per windowMs
  });
  app.use(limiter);
}

const router = require("./apps/platform/routes");

app.use(router);

app.listen(port, () => monitoring.log(`API listening on port ${port}!`));

<<<<<<< HEAD
module.exports = app; 
=======
app.route('/users')
   .get(function (req, res) {
       res.send(req.params)
   })
   .post('/users/:first_name/:last_name/:email/:password/:city/:phone_number', 
   function (req, res) {
       res.send(req.params)
   })
   .post('/users/:user_id/:first_name/:last_name/:email/:password/:city/:phone_number', 
   function (req, res) {
       res.send(req.params)
   })
   .post('/users/:user_id', function (req, res) {
       res.send(req.params)
   })

app.route('/events')
   .get(function (req, res) {
       res.send(req.params)
   })
   .post('/events/:name/:artist/:date/:description', 
   function (req, res) {
       res.send(req.params)
   })
   .post('/events/:event_id/:name/:artist/:date/:description', 
   function (req, res) {
       res.send(req.params)
   })
   .post('/events/:event_id/', function (req, res) {
       res.send(req.params)
   })


   
app.route('/venues')
   .get(function (req, res) {
       res.send(req.params)
   })
   .post('/venues/:name/:type/:phone_number/:adress/:city', 
   function (req, res) {
       res.send(req.params)
       
   })
   .post('/venues/:user_id/:name/:type/:phone_number/:adress/:city', 
   function (req, res) {
       res.send(req.params)
       
   })
   .post('/venues/:user_id/', function (req, res) {
       res.send(req.params)
       
   })

module.exports = app;
>>>>>>> 320dbb085a3a993802e6cff5bc9015ced0a7bd27
