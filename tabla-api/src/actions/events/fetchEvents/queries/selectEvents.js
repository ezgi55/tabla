const { submitQuery } = require("src/actions/events/createEvent/queries/node_modules/~root/lib/database");



const selectEvents = () => submitQuery`
SELECT * FROM events 
`;
module.exports = selectEvents;

//star yerine isteğimizi seçelim
//your SQL query goes here
 