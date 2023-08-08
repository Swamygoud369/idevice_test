import Testimonials from "../model/Testimonials";


/*************   Testimonials Design  **************/

export const getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonials.find({})
        if(!testimonials){
            return res.status(500).json({message : "Internal Server Error"});
        }
        return res.status(200).json({testimonials});
    } catch (err){
        return new Error(err)
    }
};


export const addTestimonials = async (req, res) => {
    const {imageUrl, name, title, description, designation, rating} = req.body;
    if(!name && name.trim() === "" && !address && address.trim() === "" && !phone && !email){
        return res.status(422).json({message : "Invalid Inputs"});
    }
    try{
        let testimonials;
        testimonials = new Testimonials({imageUrl, name, title, description, designation, rating});
        testimonials = await testimonials.save();
        if(!testimonials){
            return res.status(500).json({message : "Invalid Server Error"});
        }
        return res.status(200).json({testimonials});
    } catch (err){
        return new Error(err);
    }
};


export const updateTestimonials = async (req, res) => {
    const id = req.query.id;
    const {imageUrl, name, title, description, designation, rating} = req.body;
    if(!name && name.trim() === "" && !address && address.trim() === "" && !phone && !email){
        return res.status(422).json({message : "Invalid Inputs"});
    }
    try{
        const testimonials = await Testimonials.findByIdAndUpdate(id, {
            imageUrl, name, title, description, designation, rating
        })
        if(!testimonials){
            return res.status(500).json({message:"Internal Server Error"});
        }
        return res.status(200).json({message:"Succesfully Updated"});
    } catch(err){
        return new Error(err);
    }
};

export const deleteTestimonials = async (req, res) => {
    const id = req.query.id;
    try{
        const testimonials = await Testimonials.findByIdAndRemove(id);
        if(!testimonials){
            return res.status(500).json({message : "Unable to Delete"})
        }
        return res.status(200).json({message: "Successfully Deleted"});
    } catch (err){
        return new Error(err);
    }
};


export const getTestimonialsFromId = async (req, res) => {
    const id = req.query.id;
    try {
        const testimonials = await Testimonials.findById(id);
        if(!testimonials){
            return res.status(500).json({message : "No Blog Found from given Id"});
        }
        return res.status(200).json({ testimonials });
    } catch (err){
        return new Error(err);
    }
};