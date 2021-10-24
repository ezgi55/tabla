const insertUser = require("./queries/insertUser.js");

const createUser = async ({
  first_name,
  last_name,
  email,
  password,
  city,
  phone_number
}) => {
  const user = await insertUser({
    first_name,
    last_name,
    email,
    password,
    city,
    phone_number
  });

  return { user };
};

module.exports = createUser;