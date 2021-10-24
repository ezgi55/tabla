const { submitQuery } = require("~root/lib/database");



const selectEvents = () => submitQuery`
SELECT * FROM evets 
`;
module.exports = selectEvents;

//star yerine isteğimizi seçelim
//your SQL query goes here
