const express = require('express');
const getVenues = require("../controllers/venues/getVenues")

const router = express.Router();


//Venues
router.get("/venues", getVenues)