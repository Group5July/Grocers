let adminModel = require("../model/Admin.model");

let getAdminDetails = (request,response)=>{
    adminModel.find({},(err,result)=>{
        if(!err){
            response.json(result);
        }
    })
}
module.exports = {getAdminDetails};