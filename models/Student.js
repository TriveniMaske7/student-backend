var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
    
    name: { type: String, require: true },
    email: { type: String, require: true },
    contact: { type: String, require: true },
    profile_pic: {type:String, require:true},
    marksheet:{type:String, require:true},
    address:{type:String, require:true}
    

    
});


var Student = mongoose.model("students", schema);
module.exports =Student;