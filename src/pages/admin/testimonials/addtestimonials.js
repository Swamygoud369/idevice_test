import Link from 'next/link';
import React from 'react'
import { sendTestimonials } from '../../../../api-helpers/frontend/utils';
import { Container, Row, Table} from 'react-bootstrap'
import TestimonialsForm from '../../../../component/TestimonialsForm';


const AddTestimonials = () => {
    const getFormdata = (data) => {
        sendTestimonials(data).then((value)=>console.log(value)).catch(err => console.log(err));
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
                <Container fluid>
        <TestimonialsForm onSubmit={getFormdata}/>
        </Container>
                </div>
                </div>
            </div>
          </div>
        </main>
  )
}

export default AddTestimonials