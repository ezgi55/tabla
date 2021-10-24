const insertEvent = require("./queries/insertEvent.js");

const createEvent = async ({
  name,
  artist,
  date,
  description
}) => {
  const event = await insertEvent({
    name,
    artist,
    date,
    description
  });

  return { event };
};

module.exports = createEvent;