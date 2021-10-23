const request = require("express");

const app = express();

app.use(express.json());

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
