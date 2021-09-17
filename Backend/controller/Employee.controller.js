let employeeModel = require("../model/employee.model"); 

let signUp = async (request,response)=> {
    let employee = request.body;    // receive the data from post method
    let employeeInfo = await employeeModel.findOne({employeeID:employee.employeeID});
    if(employeeInfo==null){
        let result = await employeeModel.insertMany(employee);
        response.send("Account created successfully");
    }else {
        response.send("Email Id must be unqiue");
    }    
}
let signIn = async (request,response)=> {
    let employee = request.body;    // receive the data from post method
    let employeeInfo = await employeeModel.findOne({employeeID:employee.employeeID,employeePassword:employee.employeePassword});
    if(employeeInfo!=null){
        response.send("Success");      
    }else {
        response.send("InValid username or password");
    }
}

let updateEmployeeDetails = (request,response)=> {
    let employee = request.body;
    productModel.updateOne({_id:employee._id},{$set:{employeePassword:employee.employeePassword,emailID:employee.emailID}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}

let getEmployeeInfo = (request,response)=>{
    let temp_employee = request.body;
    employeeModel.find({employeeID: temp_employee.employeeID},(err,data)=>{
      
        if(!err){
            response.json(data);
        }else{
            response.json(err);
        }
    })
}

module.exports={signIn,signUp,updateEmployeeDetails,getEmployeeInfo}