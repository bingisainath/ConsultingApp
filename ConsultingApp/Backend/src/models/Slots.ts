import {Schema,model} from 'mongoose';

export interface ISlots{
    slotId: string;
    doctorEmail: string;
    date: Date;
} 

const schema = new Schema({
    slotId: {
        type: String,
        required: true,
    },
    doctorEmail: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status:{
        type:Boolean,
        required: true,
    }
})

export default model<ISlots>('slots', schema);