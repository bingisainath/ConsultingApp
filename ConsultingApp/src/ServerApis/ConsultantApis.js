import instance from "../config/axiosConfig";

export const consultantAuth = async (consultant) => {
    try{
        const  consultantData  = await instance.post('consultant/auth', consultant);
        //console.log(consultantData);
        return consultantData;
    }catch(e){
        console.log(e);
    }
}

export const consultantLogout = async () => {
    const consultantData  = await instance.post('consultant/logout');
    console.log(consultantData);
}

export const getConsultantDetials = async () => {
    const consultantData  = await instance.get('consultant/getConsultantDetials');
    console.log(consultantData.data);
    return consultantData.data;
}

export const consultantAddSlot = async (data) => {
    const data1 = {
        ...data,
        status:false
    }
    const consultantData  = await instance.post('consultant/addSlot',data1);
    //console.log(consultantData);
    return consultantData.data;
}

export const getAppointments = async () => {
    const consultantData  = await instance.get('consultant/getAppointments');
    //console.log(consultantData.data);
    return consultantData.data;
}