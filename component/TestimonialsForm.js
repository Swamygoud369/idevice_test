import { useRouter } from 'next/router'
import React, {useState} from 'react'
//import QuillForm from './Quill';

const TestimonialsForm = ({data, onSubmit}) => {
    const router = useRouter();
    const [inputs, setInputs] = useState(
        data ? {
            name:data.name,
            address:data.address,
            phone:data.phone,
            email:data.email,
        } : {
            name:"",
            address:"",
            phone:"",
            email:"",
        }
    );
    //console.log(createObjectURL);
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value,
        }));
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {...inputs};
        // console.log(formData);
        onSubmit(formData);
        router.push("/admin/testimonials");
    }

//console.log(data);

  return (
    <div>
        <form onSubmit={handleSubmit}>
    <div className='row'>
    <div className="col-md-6 mb-3">
        <label className="form-label">Person Name</label><br/>
    <input type="text" name="name" className="form-control" value={inputs.name} onChange={handleChange} required/>
    </div><br/>
    <div className="col-md-6 mb-3">
        <label className="form-label">Title</label><br/>
    <input type="text" name="title" className="form-control" value={inputs.title} onChange={handleChange} required/>
    </div><br/>
    
    <div className="col-md-6 mb-3">
        <label className="form-label">Description</label><br/>
    <input type="text" name="description" className="form-control" value={inputs.description} onChange={handleChange} required/>
    </div><br/>
    <div className="col-md-6 mb-3">
        <label className="form-label">Designation</label><br/>
    <input type="text" name="designation" className="form-control" value={inputs.designation} onChange={handleChange} required/>
    </div><br/>
    <div className="col-md-6 mb-3">
        <label className="form-label">Rating</label><br/>
    <input type="number" name="rating" className="form-control" min="1" max="5" value={inputs.rating} onChange={handleChange} required/>
    </div><br/>
    
    </div>
    <button type='submit' className='adminsubmit_btn'>Submit</button>
    <br/><br/>
    
</form>
</div>
  )
}

export default TestimonialsForm