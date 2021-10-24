const express = require('express');
const getVenues = require("../controllers/venues/getVenues")

const router = express.Router();


//Venues
router.get("/venues", getVenues)

router.get("/events", getEvents)
router.get("event/:eventId", getEventById)
//Users
router.get("/users", getUsers)


router.post("/post-event", postEvent)
router.post("/post-venues", postVenues)
router.post("/post-users", postusers)