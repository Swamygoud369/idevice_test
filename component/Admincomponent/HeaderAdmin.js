import React, { useEffect } from 'react'
import idevicelogo from "../../public/idevicelogo.png";
import Link from 'next/link'
import Image from 'next/image';

// import 'react-quill/dist/quill.snow.css'

function HeaderAdmin() {
  

  return (
    <> <nav className="sidebar leftmenu_sidebar col-lg"> 
    <Link href="/admin/dashboard">
    <Image src={idevicelogo} alt="" className="img-fluid admin_logoimg"/>
    </Link>
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/admin/testimonials"  className="nav-link">
                 Testimonials
            </Link>
          </li>
        </ul>
      </div>
    </nav></>
  )
}

export default HeaderAdmin