let mongoose = require("mongoose");
mongoose.pluralize(null);

let OrderSchema = mongoose.Schema({
  
    orderId: {type: String},
    userID: {type:String},
    firstname: {type: String}, 
    lastname: {type: String}, 
    quantity: {type: Number},
    price: {type:Number},
    orderdate: {type:Date}
  
});

let OrderModel = mongoose.model("order", OrderSchema);

module.exports = cartModel;