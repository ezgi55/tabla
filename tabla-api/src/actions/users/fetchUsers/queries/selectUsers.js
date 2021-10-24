const { submitQuery } = require("src/actions/events/createEvent/queries/node_modules/~root/lib/database");



const selectUsers = () => submitQuery`
SELECT * FROM users 
`;
module.exports = selectUsers;

//star yerine isteğimizi seçelim
//your SQL query goes here
 