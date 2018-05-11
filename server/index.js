const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

const controller = require('./controller');
const app = express();

massive( process.env.SECRET ).then( dbInstance => {
    // dbInstance.seedFile()
    // .then(res => console.log('seed successful'))
    // .catch(err => console.log('seed failed', err))
    app.set( 'db', dbInstance );
    console.log('Outer database is connected.')
})

app.use( bodyParser.json() );
app.use( cors() );
app.use( express.static( `${__dirname}/build`));


app.get('/api/houses' , controller.getAll);
app.delete('/api/house/:id', controller.deleteHouse);
app.post('/api/house/submitnew', controller.postNewHouse);

const PORT = process.env.PORT || 4000 ;
app.listen(PORT, () => console.log(`Port: ${PORT} is working`))