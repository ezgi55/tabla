const selectVenues = require("./queries/selectVenues");


const fetchVenues = async () => {
  const venues = await selectVenues();

  return { venues };
};


module.exports = fetchVenues;
