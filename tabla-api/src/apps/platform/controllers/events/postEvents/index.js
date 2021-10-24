const postEvents = require("~root/actions/events/postEvents");
const handleAPIError = require("~root/utils/handleAPIError");

const postEvents = async (req, res) => {
  try {
    const { events } = await fetchEvents();

    res.status(201).send({
      events
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getEvents; 