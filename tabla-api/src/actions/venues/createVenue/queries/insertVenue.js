const { submitQuery, getInsertId } = require("src/actions/events/createEvent/queries/node_modules/~root/lib/database");

const insertVenue = ({
    name,
    type,
    phone_number,
    address,
    image,
    city
}) => submitQuery`
    INSERT INTO venues (        
        name,
        type,
        phone_number,
        address,
        image,
        city
    )
    VALUES 
    (${name},${type},${phone_number},${address},${image},${city})
`;

module.exports = getInsertId(insertVenue);