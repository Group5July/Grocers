const { response } = require("express");
let raiseTicketModel = require("../model/raiseTicket.model");


//insert data
let raiseTicketDetails = async (request, response)=>{

    let ticketName = request.body;  //recieve the data from the post method
    // let userInfo = await cartModel.findOne({userId:productName.userId});
    // console.log(userInfo)
    // console.log(userInfo.price); 

        raiseTicketModel.insertMany(ticketName, (error, result)=> {
            if(!error) {
                response.send(`Ticket Sent Successfully`);
            }
            else {
                response.send(`Error: could not Send`);
            }
        });
    }  

module.exports = {raiseTicketDetails};