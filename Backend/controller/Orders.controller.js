const { response } = require("express");
let orderModel = require("../model/order.model");


//insert data
let addOrderDetails = async (request, response)=>{

    let orderName = request.body;   

        orderModel.insertMany(orderName, (error, result)=> {
            if(!error) {
                response.send(`Order successfully`);
            }
            else {
                response.send(`Did not order`);
            }
        });
    }

    //delete products from the cart

    //retrive products from the ccart
        
  

module.exports = {addOrderDetails};