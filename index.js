    require('dotenv').config()

let  express = require('express'),
    { json } = require('body-parser'),
    mongoose = require('mongoose'),
    app=express(),
    {PORT = 3001, CONNECTION_STRING} = process.env;

  const  userCtrl = require('./UserCtrl')

app.use(json());

    mongoose
        .connect(CONNECTION_STRING)
        .then(()=> console.log('now connected '))
        .catch(console.log)

app.post('/api/people',userCtrl.createUser)

app.get('/api/people',userCtrl.getUsers)

app.put('/api/people/:id',userCtrl.updateUser)

app.delete('/api/people/:name',userCtrl.deleteUser)

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))
