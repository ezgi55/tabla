const insertVenue = require("./queries/insertVenue.js");

const createVenue = async ({
  name,
  type,
  phone_number,
  address,
  image,
  city
}) => {
  const user = await insertVenue({
    name,
    type,
    phone_number,
    address,
    image,
    city
  });

  return { venue };
};

module.exports = createVenue;