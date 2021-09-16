let mongoose = require("mongoose");

mongoose.pluralize(null);

let adminSchema = mongoose.Schema({
    adminUsername:{type:String,unique:true},
    employeePassword:{type:String}
});

let adminModel = mongoose.model("Admin",adminSchema);

module.exports = adminModel;