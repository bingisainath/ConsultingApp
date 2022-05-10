import bookings from "../models/appointments";
import slots from "../models/slots";

export default class CtrlConsultants {
  
  static async getAppointments(doctorEmail:any){
  
    const result = await bookings.aggregate([
        {
          $match:{
            doctorEmail:doctorEmail,
          }
        }
    ]).exec(); 
    const returnData = {
      data :result,
      success: true,
    }
    return returnData;
  }

  static async cancelAppointment(doctorEmail: string, body: any) {
    
    console.log(body);
    
    // const result = await bookings.findOneAndUpdate(
    //   { _id: body.id },
    //   { bookingStatus: false, reason: body.reason }
    // );
    // const returnData = {
    //   ...result,
    //   success: true,
    // }
    // return returnData;
  }

  static async addSlot(doctorEmail: string, body: any) {
    
    const result = await slots.create(body);
    return result;
  }

}
