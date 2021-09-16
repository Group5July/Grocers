let requestModel = require("../model/requests.model"); //I might need to capitalize

let getAllRequestDetails = (request,response)=>{
    requestModel.find({},(err,data)=>{
        if(!err){
            response.json(data);
        }else{
            response.json(err);
        }
    })
}

let storedRequestInfo = (req,response)=> {
    let request = req.body;

    requestModel.insertMany(request,(err,result)=> {
        if(!err){
                response.send("Record stored successfully")
        }else {
                response.send(err);
        }
    })
}

// let deleteRequestInfo = (request,response)=> {
//     let pid = request.params.pid;
//     requestModel.deleteOne({_id:pid},(err,result)=> {
//         if(!err){
//             response.send(result)
//         }else {
//             response.send(err);
//         }
//     })
// }

// let updateRequestDetails = (req,res)=> {
//     let request = req.body;
//     requestModel.updateOne({_id:product._id},{$set:{price:product.price}},(err,result)=> {
//         if(!err){
//             res.send(result);
//         }else {
//             res.send(err);
//         }
//     })
// }

module.exports= {getAllRequestDetails,storedRequestInfo/*,deleteRequestInfo,updateRequestDetails*/}