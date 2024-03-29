const { response } = require("express");
let userModel = require("../model/user.model");
       
let signUp = async (request, response)=>{     
   
    let user = request.body;  //recieve the data from the post method
    let userInfo = await userModel.findOne({userId:user.userId});
    let emailInfo = await userModel.findOne({email:user.email});
    // console.log(emailInfo, userInfo);
    if( userInfo == null || emailInfo == null){
        let result = await userModel.insertMany(user); //tells process to wait
        response.send("Account created")
    }else{
            response.send("User Id or Email must be unique");
        }                
}

let signIn = async (request, response)=>{
    let user = request.body;  //recieve the data from the post method
    let userInfo = await userModel.findOne({userId:user.userId, password:user.password});
    if(userInfo != null){
        response.send("Success");
    }else{
        response.send("Invalid ")
    }

}

let updateUser = async (request, response)=>{
    let user = request.body;
    userModel.updateOne({userId:user.userId}, 
    {firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        password:user.password,
        dob:user.dob,
        phoneNumber:user.phoneNumber,
        Address:user.Address,
    }, (error, result)=>{
        if (result.modifiedCount == 1) {
            response.send(`updated user successfully`);
        }
        else {
            response.send(`did not update user `);
        }
    }) 
}

let retriveUserId = (request, response)=>{
    let user = request.params.userId;
    userModel.findById({userId:user.userId}, (error,result)=>{
        if(error){
            response.send(error)
        }else{
            response.json(result)
            console.log(result);
        }
    })
}

module.exports = {signIn,signUp, updateUser, retriveUserId};