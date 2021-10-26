const fetchVenues = require("../../../../../actions/venues/fetchVenues");
const handleAPIError = require("../../../../../../utils/handleAPIError");

const getVenues = async (req, res) => {
  try {
    const { venues } = await fetchVenues();

    res.status(201).send({
      venues
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getVenues;
