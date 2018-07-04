let mongoose = require('mongoose')

let User = new mongoose.Schema({
    name: {type: String, required: true, trim:true},
    age: { type: Number, required: true, min:0, max:200},
    location: { type: String, required: true, trim:true},
    isCool: Boolean,
    //favoriteHobby: { type: String, enum:['Baseball','Brewing Beer', 'Playing Music'] }
})


module.exports= mongoose.model('User',User)