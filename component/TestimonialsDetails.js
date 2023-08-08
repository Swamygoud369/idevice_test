import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import { getTestimonialsFromId, updateTestimonials } from '../api-helpers/frontend/utils'
import { Container, Row, Table} from 'react-bootstrap'
import TestimonialsForm from './TestimonialsForm'


const TestimonialsDetails = ()  => {
    const [testimonials, setTestimonials] = useState();
    const router = useRouter();
    const id = router.query.id;
    useEffect(() => {
        getTestimonialsFromId(id)
        .then((data) => setTestimonials(data))
        .catch((err) => console.log(err));
    }, [id]);

    const getFormData = (data) => {
        updateTestimonials(id, data)
        .then((value) => console.log(value))
        .then(() => {
            router.push("/admin/testimonials");
        })
        .catch((err) => console.log(err));
    };

  return (
    <main role="main" className="col-lg rightmenu_content">
        <div className="dropdown_menu admin_bgblk">
          {/* <Link href="/">My Account</Link>*/}
          <Link href="/admin">Log Out</Link>
        </div>
          <div className="contentblk p-4">
          <div className='breadcrumb_blk'>
                <ul>
                    <li>Dashboard</li> / <li><Link href="/">Add Testimonials</Link></li>
                </ul>
            </div>
            <div className="contentmain">
                <div className='titleheading'>Add Testimonials </div>
                <div className='admincontent_blk'>
                <div className='content_mainblk'>
                <Container fluid>{ testimonials ? ( <TestimonialsForm data={testimonials} onSubmit={getFormData} /> ) : ( <p>Loading...</p> ) }
                </Container>
                </div>
                </div>
            </div>
          </div>
        </main>
  )
}

export default TestimonialsDetails