const express = require('express');
const getVenues = require("../controllers/venues/getVenues")
const getEvents = require("../controllers/events/getEvents")


const router = express.Router();


//Venues
router.get("/venues", getVenues)

//Events
router.get("/events", getEvents)
/*
router.get("event/:eventId", getEventById)
//Users
router.get("/users", getUsers)

//post

router.post("/post-event", postEvent)
router.post("/post-venues", postVenues)
router.post("/post-users", postUsers)


router.post("/post-userId", postUserId)
router.post("/post-venueId", postVenueId)
router.post("/post-eventId", postEventId)

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
*/