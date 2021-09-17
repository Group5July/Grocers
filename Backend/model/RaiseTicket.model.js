let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    userId:{type:String, unique:true},
    resolved:{type:Boolean},
    msg:{type:String}
  
});

let raiseTicketModel = mongoose.model("user", userSchema);

module.exports = raiseTicketModel;