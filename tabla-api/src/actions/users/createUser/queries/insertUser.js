const { submitQuery, getInsertId } = require("src/actions/events/createEvent/queries/node_modules/~root/lib/database");

const insertUser = ({
    first_name,
    last_name,
    email,
    password,
    city,
    phone_number
}) => submitQuery`
    INSERT INTO users (        
        first_name,
        last_name,
        email,
        password,
        city,
        phone_number
    )
    VALUES 
    (${first_name},${last_name},${email},SHA512(CONCAT(${password},${process.env.PASSWORD_SALT}), 224),${city},${phone_number})
`;

module.exports = getInsertId(insertUser);