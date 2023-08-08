import { updateTestimonials, deleteTestimonials, getTestimonialsFromId } from "../../../../api-helpers/controllers/books-controller";
import { dbConnect } from "../../../../utils/dbConnect";

export default async function handler(req, res){
    await dbConnect();
    if(req.method === "PUT"){
        return updateTestimonials(req, res);
    } else if(req.method === "DELETE"){
        return deleteTestimonials(req, res);
    } else if(req.method === "GET"){
        return getTestimonialsFromId(req, res);
    }
}