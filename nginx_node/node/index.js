const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    database: 'nodedb',
    password: 'root'
}
const mysql = require('mysql')
const con = mysql.createConnection(config)

const query_create_table_people = `CREATE TABLE people(id int not null auto_increment, name varchar(255), primary key(id))`
const select_query = 'SELECT * FROM people'
const query_table_people_exist = `SHOW TABLES LIKE "people"`
const insert_query = `INSERT INTO people(name) values('beriloqueiroz - Full Cycle')`

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(query_table_people_exist, function (err, result) {
        if (err) {
            console.log(err)
            throw err;
        }
        if (result.length > 0) return;
        con.query(query_create_table_people, function (err, result) {
            if (err) throw err;
            console.log("Table created");
        });
    });

})


app.get('/', (req, res) => {
    con.query(insert_query)
    let result_select = [];
    con.query(select_query, function (err, result, fields) {
        if (err) throw err;
        result_select = result;
        console.log(result_select)
        const str = `</p>
        <p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p>
        <p>
        
        </p>
        <p>- Lista de nomes cadastrada no banco de dados.</p>
        <p>${JSON.stringify(result_select)}`;
        res.send(str)
    });
})

app.listen(port, () => {
    console.log('rodando na porta ' + port)
})