const mysql = require('mysql');

let conn = mysql.createConnection({
    host: '34.133.203.107',
    user: 'root',
    password: 'rootpassword123',
    database: 'doodlestuff'
});

conn.connect();

conn.query(`Drop Table Availability`, 
(err, rows, fields) => {
    if(err)
        console.log(err);
    else
        console.log('Table Dropped');
}

)

conn.query(` CREATE TABLE Availability (personName varchar(100), nine BOOL, ten BOOL, eleven BOOL, twelve BOOL, one BOOL, two BOOL, three BOOL, four BOOL, five BOOL, six BOOL)`,
(err, rows, fields) => {
    if(err)
        console.log(err);
    else
        console.log('Table Created');
})

conn.query(`insert into Availability values ('Axat', true, true, true, false, false, false, true, true, false, false)`,
 (err, rows, fields) => {
     if(err)
        console.log(err);
    else
        console.log('Row Inserted');
 })

 conn.query(`select * from Availability`,
    (err, rows, fields) => {
        if(err)
            console.log(err);
        else
            console.log('One row inserted');
        for (r of rows)
            console.log(r);
    }
 )
conn.end();