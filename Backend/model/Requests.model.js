let mongoose = require("mongoose");

mongoose.pluralize(null);

let requestSchema = mongoose.Schema({
    employee_name:{type:String},
    product_id:{type:String}
});

let requestModel = mongoose.model("Request",requestSchema);

module.exports= requestModel;