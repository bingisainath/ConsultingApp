import users from '../models/users';
import consultants from '../models/consultants.';
import Bcrypt from '../services/bcrypt'
import bookings from "../models/appointments";
import slots from '../models/slots';

export default class CtrlUsers {

    static async create(body:any){

        const hash = await Bcrypt.hashing(body.password);
        const data = {
            ...body,
            password: hash,
        }

        const user = await users.create(data);
        //return user;
        const returnData = {
            ...user,
            success:true,
        }
        return returnData;

    }

    static async auth(body:any){
        
        const user1 = await users.aggregate([
            {
                $match:{
                    email: body.email
                }
            }
        ]).exec();

        const user = user1[0];

        if(!user){
            //console.log("Not Found");
            return ({
                success:false,
                message:'User not found'
            });
        }

        const isMatch = await Bcrypt.comparing(body.password, user.password);

        if(!isMatch){
            //throw new Error('Password is incorrect');
            return ({
                success:false,
                message:'Invalid password'
            });
        }
        const returnData = {
            ...user,
            success:true,
        }
        return returnData;
    
    }


    static async getProfile(body:any){
                
        // const user = await users.findOne({
        //     where: {
        //         email: body.email
        //     }
        // });

        const user1 = await users.aggregate([
            {
                $match:{
                    email: body
                }
            }
        ]).exec();

        const user = user1[0];

        if(!user){
            //throw new Error('User not found');
            return ({
                success:false,
                message:'User not found'
            });
        }

        //return user;
        const returnData = {
            ...user,
            success:true,
        }
        return returnData;
        
    }

    static async getConsultants() {
        const consultant = await consultants.find();
        return consultant;
    }

    static async updatePassword(email:string,body:any){
        // const user = await users.findOne({
        //     where: {
        //         email: email
        //     }
        // });
        
        const user1 = await users.aggregate([
            {
                $match:{
                    email: email
                }
            }
        ]).exec();

        const user = user1[0];

        const hash = await Bcrypt.hashing(body);
        if(!user){
            //throw new Error('User not found');
            return ({
                success:false,
                message:'User not found'
            });
        }
        const updatedUser = await users.updateOne({email: email}, {$set:{password: hash}});

        //return updatedUser;
        const returnData = {
            ...updatedUser,
            success:true,
        }


        return returnData;
    }

    static async updateProfile(email:string,body:any){
        // const user = await users.findOne({
        //     where: {
        //         email: email
        //     }
        // });

        const user1 = await users.aggregate([
            {
                $match:{
                    email: email
                }
            }
        ]).exec();

        const user = user1[0];

        console.log(user);
        
        if(!user){
            //throw new Error('User not found');
            return ({
                success:false,
                message:'User not found'
            });
        }
        const updatedUser = await users.updateOne({email: email}, {$set: {...body}});

        //return updatedUser;
        const returnData = {
            ...updatedUser,
            success:true,
        }

        
        return returnData;
    }

    static async bookAppointment(userEmail: string, body: any) { 
            console.log("body : ",body);
            const result = await bookings.create(body);
            const updatedData = await users.findOneAndUpdate({email:userEmail},{$push:{slotBooked:result._id}});
            return result;
      }

      static async ChangeSlot(userEmail:string,body:any){
        const result = await bookings.findOneAndUpdate({_id:body.id},{date:body.date,time:body.time});
        return result;
      }

      static async getSlots(body:any){
        //console.log("body : ",body);
        const result = await slots.find({doctorEmail:body.doctorEmail});
        //console.log(result);
        return result;
      }

      static async getMyAppointments(userEmail:string){
        // const result = await bookings.find({email:userEmail});
        // return result;

        const result = await bookings.aggregate([
            {
              $match:{
                userEmail:userEmail,
              }
            }
        ]).exec(); 
        const returnData = {
          data :result,
          success: true,
        }
        return returnData;
      }

      static async updateSlot(body:any){
        //console.log("called method",body);  
        const result = await slots.findOneAndUpdate({slotId:body.slotId,doctorEmail:body.doctorEmail},{$set: {status:true}});
        //console.log("called method 2",result);
        return result;
      }

}