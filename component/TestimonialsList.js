import React from 'react'
//import BlogItem from './BlogItem'
import Link from 'next/link'
import { Container, Row, Table} from 'react-bootstrap'
import Image from 'next/image';
import TestimonialsItem from './TestimonialsItem';

const TestimonialsList = ({data}) => {
  return (
    <main role="main" className="col-lg rightmenu_content">
        <div className="dropdown_menu admin_bgblk">
          {/* <Link href="/">My Account</Link>*/}
          <Link href="/admin">Log Out</Link>         
        </div>
          
          <div className="contentblk p-4">
            <div className='breadcrumb_blk'>
                <ul>
                <li>Dashboard</li> / <li><Link href="/">Testimonials</Link></li>
                </ul>
            </div>
            <div className="contentmain">
                <div className='titleheading'>Testimonials <Link href="/admin/testimonials/addtestimonials" className='float-end adminadd_btn'>Add New</Link> </div>
                <div className='admincontent_blk'>
                <div className='content_mainblk p-0'>
                <Container fluid>
                    <Row>
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th>Person Image</th>
                          <th>Person Name</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Designation</th>
                          <th>Rating</th>
                          <th width="68">Action</th>
                        </tr>
                      </thead>
                      <tbody>

                      {data && data.map((testimonials) => {
            return (
                <tr key={testimonials._id}>
                  <TestimonialsItem name={testimonials.name} imageUrl={testimonials.imageUrl} title={testimonials.title} description={testimonials.description} designation={testimonials.designation} rating={testimonials.rating} id={testimonials._id} />
                </tr>
              )
            })}
     </tbody>
                    </Table>
                    </Row>
                </Container>
            </div>
            </div>
          </div>
          </div>
        </main>
  )
}

export default TestimonialsList