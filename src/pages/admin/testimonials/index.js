import React from 'react'
import TestimonialsList from '../../../../component/TestimonialsList'
import { getAllTestimonials } from '../../../../api-helpers/frontend/utils'

const Testimonials = ({testimonials}) => {
  return (
   <TestimonialsList data={testimonials}/>
  )
}

export default Testimonials

export const getServerSideProps = async () => {
    const testimonials = await getAllTestimonials();
    return {
        props: {
            testimonials,
        },
    };
};

