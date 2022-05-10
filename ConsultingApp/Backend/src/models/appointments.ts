import { Schema,model } from "mongoose";

export interface IBooking{
    doctorEmail: string;
    userEmail: string;
    date: Date;
    time: string;
    bookingStatus : boolean;
    reason : string;
}

const schema = new Schema({
    doctorEmail: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
    },
    bookingStatus : {
        type: Boolean,
    },
    reason : {
        type: String,
        required: true,
    },
    slotId:{
        type:String,
        required:true,
    }
})

export default model<IBooking>("booking", schema);