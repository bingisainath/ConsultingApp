import { Schema, model } from "mongoose";

export interface Iconsultants {
  clinicName: string;
  doctorName: string;
  doctorEmail: string;
  password: string;
  Phone: string;
  clinicAddress: string;
}

const schema = new Schema({
    clinicName: {
        type: String,
        required: true,
    },
    doctorName: {
        type: String,
        required: true,
    },
    doctorEmail: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    specialization :{
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    clinicAddress: {
        type: String,
        required: true,
    },
})

export default model<Iconsultants>("consultants", schema);