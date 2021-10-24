const selectUsers = require("./users/fetchUsers/queries/selectUsers");



const fetchUserss = async () => {
  const users = await selectUsers();

  return { users };
}; 


module.exports = fetchusers;
