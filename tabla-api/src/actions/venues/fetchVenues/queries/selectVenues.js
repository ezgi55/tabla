const { submitQuery } = require("~root/lib/database");

const selectVenues = () => submitQuery`
SELECT * FROM venues 
`;
module.exports = selectVenues;

// star yerine isteğimizi seçelim
// your SQL query goes here
