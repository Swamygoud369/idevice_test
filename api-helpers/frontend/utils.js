import axios from "axios";


// var Port_num = "http://localhost:3000";

// var Port_num = "0.0.0.0:3000";




/***************** Testimonials Page **********************/

export const getAllTestimonials = async () => {
    const res = await axios.get(`http://localhost:3000/api/testimonials`);
    if(res.status !== 200){
        return new Error("Internal Server Error");
    }

    const data = await res.data;
    return data.testimonials;
}

export const sendTestimonials = async (data) => {
    //console.log(data);
    const res = await axios.post(`http://localhost:3000/api/testimonials`, {
        imageUrl:data.imageUrl,
        name:data.name,
        title:data.title,
        description:data.description,
        designation:data.designation,
        rating:data.rating,
    });
    if(res.status !== 201){
        return new Error("Database Request Rejected");
    }
    const resdata = await res.data;
    return resdata;
};

export const getTestimonialsFromId = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/testimonials/${id}`);
    if(res.status !== 200){
        return new Error("Unable to fetch blog from given id");
    }
    const resdata = await res.data;
    return resdata.testimonials;
};

export const updateTestimonials = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/testimonials/${id}`, {
        imageUrl:data.imageUrl,
        name:data.name,
        title:data.title,
        description:data.description,
        designation:data.designation,
        rating:data.rating,
    });
    if(res.status !== 200){
        return new Error("Unable to Upload Blog");
    }
    const resData = await res.data;
    return resData;
};


export const deleteTestimonials = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/testimonials/${id}`);
    if(res.status !== 200){
        return new Error("Unable to delete");
    }
    const resdata = await res.data;
    return resdata;
};