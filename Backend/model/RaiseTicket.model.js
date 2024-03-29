let mongoose = require("mongoose");

mongoose.pluralize(null);

let raiseTicketSchema = mongoose.Schema({
    userId:{type:String, unique:true},
    resolved:{type:Boolean},
    msg:{type:String}
  
});

let raiseTicketModel = mongoose.model("raiseTicket", raiseTicketSchema);

module.exports = raiseTicketModel;