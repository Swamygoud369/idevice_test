
import React, {useEffect} from "react";
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Button, Stack, Container, Card, Row, Col, Nav, Navbar, NavDropdown, Image} from 'react-bootstrap'
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";


// import ReactStars from "react-rating-stars-component";



const settings = {
  className: "center",
  infinite: false,
  slidesToShow: 2,
  swipeToSlide: true,
   responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
};
function Testimonials({data}) {  
  console.log(data);
  return (
    <>
    <Row>
      
      <Col md={4} xl={4} sm={12} className='pb-5 d-flex align-items-center justify-content-center'>
      <div className={`${styles.testimonialshead_blk}`}>
        <div className={styles.testimonials}>Testimonials</div>
        <h2 className='text-left pt-4 page_heading testmonials_heading'>Trusted by More Than 3k Clients </h2>
      </div>
      </Col>

      <Col md={8} xl={8} sm={12} className='pb-5'>
      <div className="Testimonials_blk">
      <Slider {...settings}>
        {data && data.map((testimonails, index) => {
          return (
            <div className={styles.testimonialsmain} key={index}>
            <div className={styles.testimonials_blk}>
              <div className={styles.rating}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
              <div className={styles.testimonials_title}>{testimonails.title}</div>
              {/* <div className={styles.testimonialstext}  dangerouslySetInnerHTML={{ __html: testimonails.description }} /> */}
              <div className={styles.testimonialstext}> {testimonails.description}</div>
            </div>
            <div className={styles.profileblk}>
              <span className={styles.profile}><Image src={testimonails.imageUrl}/></span>
              <div className={styles.profile_designation}>
              <strong>{testimonails.name}</strong>
              <span>{testimonails.designation}</span>
              </div>
            </div>
          </div>
          )
        })}
        </Slider>
        </div>
      </Col>
    </Row>
    </>
  )
}

export default Testimonials