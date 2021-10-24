const selectEvents = require("./events/fetchEvents/queries/selectEvents");



const fetchEvents = async () => {
  const events = await selectEvents();

  return { events };
}; 


module.exports = fetchEvents;
