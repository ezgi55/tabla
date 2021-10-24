const { submitQuery, getInsertId } = require("~root/lib/database");

const insertEvent = ({
    name,
    artist,
    date,
    description
}) => submitQuery`
    INSERT INTO events (        
    name,
    artist,
    date,
    description
    )
    VALUES 
    (${name},${artist},${date},${description})
`;

module.exports = getInsertId(insertEvent);