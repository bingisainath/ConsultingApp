import express from "express";
import expressResponse from "../middleware/expressResponse";
import bodyParser from "body-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
//import Joi from "joi";
import JoiDate from "@hapi/joi-date";
import JoiBase from "@hapi/joi";
//import moment from "moment";

import CtrlUsers from "../controllers/users";
import CtrlConsultants from "../controllers/consultants";
import CtrlAppoinments from "../controllers/appoinments";

const Joi = JoiBase.extend(JoiDate);

export default class Server {
    //initializing the express with app const
    app = express();

    //starting the express-server,mongo,middleware,routes & defRoutes
    async start(){
        try{
            
            console.log("Listening the Server");

            //listening the port
            this.app.listen(process.env.PORT);
            console.log("Successfully connected to http://localhost:"+process.env.PORT)

            //calling the middleware method where all middleware are present
            this.middleware();

            //calling the routes methods where all HTTP request are present
            this.routes();

            //calling the defroutes fro server testing
            this.defRoutes();
        }catch(e){

            //catching and printing the error in console if something happens 
            console.log("Error"+e);
        }
    }

    //middleware for requests
    middleware(){

        //bpdy-parser middleware for parsing the body data providing in postman
        this.app.use(bodyParser.json())

        //session middleware 
        this.app.use(
            session({

                //providing the secret to store in cookie
                secret: process.env.SESSION_SECRET,
                resave: false,
                saveUninitialized: false,

                //storing the session in mongodb URL
                store: MongoStore.create({
                    mongoUrl: process.env.SESSION_URL,
                }),

                //fixing age of cookie to 24hours
                cookie: {
                    maxAge : 24 * 60 * 60 * 1000,
                },
            }
        ))
    }

    //defining the all required Routes
    routes(){

        this.app.post("/user/create", 
            expressResponse(async(req,resp)=>{
                const schema = Joi.object().keys({
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                    name: Joi.string().required(),
                    phone: Joi.string().required(),
                    DOB: Joi.date().required(),
                    address:Joi.string().required(),
                })

                const data = await schema.validateAsync(req.body);

                const result = await CtrlUsers.create(data);

                return result;

            })
        )

        this.app.post("/user/auth",
            expressResponse(async(req,resp)=>{
                const schema = Joi.object().keys({
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                })

                const data = await schema.validateAsync(req.body);

                const result = await CtrlUsers.auth(data);

                req.session.users = result;

                return result;

            })
        )

        this.app.get("/user/getProfile",
            expressResponse(async(req,resp)=>{

                if(req.session && req.session.users){

                    const result = await CtrlUsers.getProfile(req.session.users.email);

                    return result;

                }else{
                    throw new Error("User not Authenticated");
                }

            })
        )

        this.app.post("/user/bookAppointment",
            expressResponse(async(req,resp)=>{
                if(req.session && req.session.users){

                    const schema = Joi.object().keys({
                        doctorEmail: Joi.string().required(),
                        userEmail: Joi.string(),
                        date: Joi.date().required(),
                        bookingStatus: Joi.boolean().required(),
                        reason: Joi.string().required(),
                        slotId: Joi.string().required(),
                    })

                    console.log("1 : ",req.body);
                    
                    const data = await schema.validateAsync(req.body);
                    console.log("2 : ",req.body);
                    
                    const result = await CtrlUsers.bookAppointment(req.session.users.email,data);

                    return result;

                }else{
                    throw new Error("User not Authenticated");
                }
            })
        )

        this.app.post("/consultant/auth",
            expressResponse(async(req,resp)=>{
                const schema = Joi.object().keys({
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                })
                const data = await schema.validateAsync(req.body)

                const data1 = {
                    doctorEmail: data.email,
                    password: data.password
                }

                req.session.consultant = data1;

                const returnData = {
                    ...data,
                    success: true,
                }

                return returnData;

            })
        )

        this.app.post("/consultant/addSlot",
            expressResponse(async(req,resp)=>{
                if(req.session && req.session.consultant){

                    const schema = Joi.object().keys({
                        slotId: Joi.string().required(),
                        doctorEmail: Joi.string().email().required(),
                        date: Joi.date().format('YYYY-MM-DD HH:mm').utc().required(),
                        status:Joi.boolean().required().default(false)
                    })

                    const data = await schema.validateAsync(req.body);

                    const result = await CtrlConsultants.addSlot(req.session.consultant.doctorEmail,data);

                    return result;

                }else{
                    throw new Error("Consultant not Authenticated");
                }
            })
        )

        this.app.post("/consultant/cancelAppointment",
            expressResponse(async(req,resp)=>{
                if(req.session && req.session.consultant){

                    const schema = Joi.object().keys({
                        email: Joi.email().string().required(),
                        reason: Joi.string().required(),
                        slotId: Joi.string().required(),
                    })

                    const data = await schema.validateAsync(req.body);

                    const result = await CtrlConsultants.cancelAppointment(req.session.consultant.doctorEmail,data);

                    return result;

                }else{
                    throw new Error("User not Authenticated");
                }
            })
        )

        this.app.get("/user/getConsultantSlots",
        expressResponse(async(req,resp)=> {

            if(req.session && req.session.users){

                const schema = Joi.object().keys({
                    doctorEmail: Joi.string().email().required(),
                })
                console.log(req.query);
                const data = await schema.validateAsync(req.query);
                console.log("data ",data);
                
                const result = await CtrlUsers.getSlots(data);

                return result;

            }else{
                
                return {
                    success: false,
                    message: "User not Authenticated"
                }
            }
        })
        )

        this.app.get("/consultant/getConsultantDetials",
            expressResponse(async(req,resp)=>{
                if(req.session && req.session.consultant){
                    const data = {
                        doctorEmail: req.session.consultant.doctorEmail,
                        password: req.session.consultant.password
                    }
                    return data;
                }
            })
        )

        this.app.get("/consultant/getAppointments",
            expressResponse(async(req,resp)=>{
                if(req.session && req.session.consultant){

                    console.log(req.session.consultant.doctorEmail);
                
                    const result = await CtrlConsultants.getAppointments(req.session.consultant.doctorEmail);

                    return result;

                }else{
                    throw new Error("User not Authenticated");
                }
            })
        )

        this.app.post("/user/updateProfile",
            expressResponse(async(req,resp)=>{
                if(req.session && req.session.users){

                    const schema = Joi.object().keys({
                        name: Joi.string(),
                        phone: Joi.string(),
                        DOB: Joi.date(),
                        address: Joi.string(),
                    })

                    
                    
                    const data = await schema.validateAsync(req.body);

                    const result = await CtrlUsers.updateProfile(req.session.users.email,data);

                    return result;

                }else{
                    throw new Error("User not Authenticated");
                }
            })
        )

        this.app.post("/user/updatePassowrd",
            expressResponse(async(req,resp)=>{
                if(req.session && req.session.users){

                    const schema = Joi.object().keys({
                        password:Joi.string(),
                    })

                    const data = await schema.validateAsync(req.body);

                    const result = await CtrlUsers.updatePassword(req.session.users.email,data);

                    return result;

                }else{
                    throw new Error("User not Authenticated");
                }
            })
        )

        this.app.get("/user/MyAppointments",
            expressResponse(async (req,resp) => {
                if(req.session && req.session.users){
                    const result = await CtrlUsers.getMyAppointments(req.session.users.email);
                    return result;
                }else{
                    throw new Error("User not Authenticated");
                }
            })
        )

        this.app.post("/user/forgetPassowrd",
            expressResponse(async(req,resp)=>{
                    const schema = Joi.object().keys({
                        email:Joi.string().required(),
                        password:Joi.string().required(),
                    })
                    
                    const data = await schema.validateAsync(req.body);

                    console.log(req.body);
                    const result = await CtrlUsers.updatePassword(data.email,data.password);

                    return result;
            })
        )

        this.app.post("/user/updateSlot",
            expressResponse(async(req,resp)=>{
                if(req.session && req.session.users){
                    const schema = Joi.object().keys({
                        slotId:Joi.string().required(),
                        doctorEmail:Joi.string().email().required(),
                    })
                    const data = await schema.validateAsync(req.body);
                    const result = await CtrlUsers.updateSlot(data);
                }else{
                    throw new Error("User not Authenticated");
                }
            })
        )

        this.app.post("/user/cancelSlot",
            expressResponse(async(req,resp)=>{
                const schema = Joi.object().keys({
                    date: Joi.date().format('YYYY-MM-DD HH:mm').utc().required(),
                })
                const result = await CtrlUsers.ChangeSlot(req.session.users.email,req.body);
            })
        )


        //logout of admin
        this.app.post("/user/logout",async(req,resp)=>{

            //destroying the session stored in cookie for admin (logging out)
            req.session.destroy(() => {});

            //sending a success response with status code 200 in postman 
            resp.status(200).send({success:true,message:"User is logged out"})
        }) 

        //logout of admin
        this.app.post("/consultant/logout",async(req,resp)=>{

            //destroying the session stored in cookie for admin (logging out)
            req.session.destroy(() => {});

            //sending a success response with status code 200 in postman 
            resp.status(200).send({success:true,message:"User is logged out"})
        })
        
        
        

}

    //default routes for testing
    defRoutes(){
        // check if server running
        this.app.all("/", (req, resp) => {
            resp.status(200).send({ success: true, message: "Server is working" });
        });

        this.app.all("*", (req, resp) => {
            resp.status(404).send({ success: false, message: `given route [${req.method}] ${req.path} not found` });
        });
    }

}