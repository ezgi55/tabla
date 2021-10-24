const express = require('express');
const getVenues = require("../controllers/venues/getVenues")

const router = express.Router();


//Venues
router.get("/venues", getVenues)

//Events
router.get("/events", getEvents)
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
