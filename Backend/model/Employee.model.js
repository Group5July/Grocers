let mongoose = require("mongoose");

mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({
    employeeID:{type:String,unique:true},
    employeePassword:{type:String}
});

let employeeModel = mongoose.model("Employee",employeeSchema);

module.exports=employeeModel;