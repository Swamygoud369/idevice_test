import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { deleteTestimonials } from '../api-helpers/frontend/utils'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';


const TestimonialsItem = ({id, imageUrl, name, title, description, designation, rating}) => {
  const router = useRouter();
  const handleDelete = () => {
    deleteTestimonials(id)
    .then((value) => console.log(value))
    .catch((err) => console.log(err));
    router.push("/admin/testimonials/");
  }

  return (
    <>
      <td><img src={imageUrl} height="40"/></td>
      <td style={{fontSize:13}}>{name}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{designation}</td>
      <td>{rating}</td>
      <td className='tblaction_blk'>
        <Link  href={`/admin/testimonials/${id}`} className="edit_option"><FaPencilAlt/></Link>
        <button type='submit'  onClick={handleDelete}><FaTrashAlt/></button>
      </td>
      </>
  )
}

export default TestimonialsItem