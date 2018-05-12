const mysql = require('mysql');
const express = require('express');
const app = express();




const mysqlConnection = mysql.createConnection({
    host: "db4free.net",
    user: "db_administrator",
    password: "1tclub_db_pass!",
    database:"db_itclub"
});

mysqlConnection.connect(function(err) {
    if (err)
        throw err;
    console.log("Connected!");
});


require("./routers/students.js")(app, mysqlConnection);
require("./routers/classes.js")(app, mysqlConnection);
require("./routers/enrollments.js")(app, mysqlConnection);





app.listen(3000, () => console.log('Example app listening on port 3000!'));