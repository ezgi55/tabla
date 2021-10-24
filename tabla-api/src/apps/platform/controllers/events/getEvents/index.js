const fetchEvents = require("~root/actions/events/fetchEvents");
const handleAPIError = require("~root/utils/handleAPIError");

const getEvents = async (req, res) => {
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