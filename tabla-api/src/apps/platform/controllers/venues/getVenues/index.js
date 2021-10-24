const fetchVenues = require("~root/actions/venues/fetchVenues");
const handleAPIError = require("~root/utils/handleAPIError");

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