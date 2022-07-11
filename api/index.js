require("dotenv").config();
const { server } = require("./src/app");
const { dbconn } = require("./src/db");

const Port = process.env.PORT || 3001


dbconn.sync({force: false}).then(()=>{
    console.log("DATABASE ON")
    server.listen(Port, ( ) => {
        console.log(`listening on port ${Port}`);
    });
});