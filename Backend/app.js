// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let employeeRouter = require("./router/Employee.router");
let userRouter = require("./router/user.router");
let adminRouter = require("./router/Admin.router")
let requestRouter = require("./router/Requests.router");
let routerOrder = require("./router/Orders.router")
let raiseTicket = require("./router/RaiseTicket.router")

// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())

//url database 
let url = "mongodb://localhost:27017/capstone"

// connect the database 
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));


app.use("/api/employee",employeeRouter);
app.use("/api/order", routerOrder);
app.use("/api/user",userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/request",requestRouter);
app.use("/raiseTicket", raiseTicket);

app.listen(9090,()=>console.log("Server running on port number 9090"));