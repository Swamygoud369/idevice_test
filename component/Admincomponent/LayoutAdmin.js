import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import HeaderAdmin from './HeaderAdmin';
import { useRouter } from "next/router";


function LayoutAdmin({children}) {
//   const router = useRouter();
// console.log(router.pathname);
  return (
    <>
    <div className='pagename'>
      {children}
      </div>
    </>
  )
}

export default LayoutAdmin