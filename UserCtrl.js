let User = require('./User');

module.exports = {
    createUser(req,res){
        new User(req.body).save((err, user)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json(user)
        })
        
    },
    getUsers(req,res){
        if(req.query.name){
            User.find({name: req.query.name, age:req.query.age},(err,users)=>{
                return res.status(200).json(users)
            })
        }else{
            User.find({},(err, users)=>{
               return res.status(200).json(users);
            })
        }
    },

    updateUser(req,res){
        User.findByIdAndUpdate(req.params.id, req.body, (err,user)=>{
            return res.status(200).json(user)
        })
    },

    deleteUser( req, res){
        User.findOneAndRemove({name: req.params.name},(err,user)=>{
            return res.status(200).json(user)
        })
    }
    
}