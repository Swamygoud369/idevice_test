import { getAllTestimonials, addTestimonials } from "../../../../api-helpers/controllers/books-controller";
import { dbConnect } from "../../../../utils/dbConnect";

export default async function handler(req, res){
    await dbConnect();
    if(req.method === "GET"){
        return getAllTestimonials(req, res);
    } else if(req.method === "POST"){
        return addTestimonials(req, res);
    }
}