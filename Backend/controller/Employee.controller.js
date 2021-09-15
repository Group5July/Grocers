let employeeModel = require("../model/employee.model"); //load 

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
module.exports={signIn,signUp}