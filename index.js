const express = require('express')

const newConnection = require('./DBConnection');

const app = express();

// static content
app.use(express.static('static'));

app.get('/allDoodles', (request, response) => {
    let conn = newConnection()
    conn.connect();
    let DBlist;
    conn.query(`select * from Availability`, (err, rows, fields) =>{

        DBlist = rows;
        let dbContent = '';
        for (l of DBlist){
            dbContent += '<div>';
            dbContent += l.personName + ': ' + l.nine + ' ' + l.ten + ' ' + l.eleven + ' ' + l.twelve + ' ' + l.one + ' ' + l.two + ' ' + l.three + ' ' + l.four + ' ' + l.five + ' ' + l.six;
            dbContent += '</div>\n';
        }

        response.send(dbContent);
    })


    conn.end();
})



app.use(express.urlencoded({
    extended: true
}))
let content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="submit">
        <input type="text" name="name">
        <input type="checkbox" value="9" id="9" name="a1">
        <input type="checkbox" value="10" id="10" name="a2">
        <input type="checkbox" value="11" id="11" name="a3">
        <input type="checkbox" value="12" id="12" name="a4">
        <input type="checkbox" value="1" id="1" name="a5">
        <input type="checkbox" value="2" id="2" name="a6">
        <input type="checkbox" value="3" id="3" name="a7">
        <input type="checkbox" value="4" id="4" name="a8">
        <input type="checkbox" value="5" id="5" name="a9">
        <input type="checkbox" value="6" id="6" name="a10">
        <input type="submit">
    </form>
</body>
</html>
`
app.get('/add-doodle', (req, res) => {
    let conn = newConnection();
    conn.connect();
    let t1 = req.query.a1
    let t2 = req.query.a2
    let t3 = req.query.a3
    let t4 = req.query.a4
    let t5 = req.query.a5
    let t6 = req.query.a6
    let t7 = req.query.a7
    let t8 = req.query.a8
    let t9 = req.query.a9
    let t10 = req.query.a10
    if(t1 === undefined){t1 = 0;}
    if(t2 === undefined){t2 = 0;}
    if(t3 === undefined){t3 = 0;}
    if(t4 === undefined){t4 = 0;}
    if(t5 === undefined){t5 = 0;}
    if(t6 === undefined){t6 = 0;}
    if(t7 === undefined){t7 = 0;}
    if(t8 === undefined){t8 = 0;}
    if(t9 === undefined){t9 = 0;}
    if(t10 === undefined){t10 = 0;}
    conn.query(`insert into Availability values ('${req.query.name}', ${t1}, ${t2}, ${t3}, ${t4}, ${t5}, ${t6}, ${t7}, ${t8}, ${t9}, ${t10})`,
    (err, rows, fields) => {
        if(err)
            console.log(err);
        res.redirect('/allDoodles');
    }
    )
    //res.send(content)
});

app.post('/add-doodle-admin', (req, res) => {
    console.log("GOT HERE");
    let username = req.body.username;
    let password = req.body.password;

    if (username == 'admin' && password == '123') {
        message = 'welcome ' + username;

        let conn = newConnection();
        conn.connect();
        let t1 = req.query.a1
        let t2 = req.query.a2
        let t3 = req.query.a3
        let t4 = req.query.a4
        let t5 = req.query.a5
        let t6 = req.query.a6
        let t7 = req.query.a7
        let t8 = req.query.a8
        let t9 = req.query.a9
        let t10 = req.query.a10
        if(t1 === undefined){t1 = 0;}
        if(t2 === undefined){t2 = 0;}
        if(t3 === undefined){t3 = 0;}
        if(t4 === undefined){t4 = 0;}
        if(t5 === undefined){t5 = 0;}
        if(t6 === undefined){t6 = 0;}
        if(t7 === undefined){t7 = 0;}
        if(t8 === undefined){t8 = 0;}
        if(t9 === undefined){t9 = 0;}
        if(t10 === undefined){t10 = 0;}
        conn.query(`insert into Availability values ('${req.query.name}', ${t1}, ${t2}, ${t3}, ${t4}, ${t5}, ${t6}, ${t7}, ${t8}, ${t9}, ${t10})`,
        (err, rows, fields) => {
            if(err)
                console.log(err);
            res.redirect('/allDoodles');
        }
    )
    }
    res.send("Access Denied");
})



app.listen(2000);