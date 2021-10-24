const { submitQuery } = require("src/actions/venues/fetchVenues/events/fetchEvents/queries/node_modules/~root/lib/database");



const selectVenues = () => submitQuery`
SELECT * FROM venues 
`;
module.exports = selectVenues;

//star yerine isteğimizi seçelim
//your SQL query goes here
 