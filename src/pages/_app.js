import '@/styles/globals.css'
import Layout from '../../component/Layout'
import LayoutAdmin from '../../component/Admincomponent/LayoutAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderAdmin from '../../component/Admincomponent/HeaderAdmin';
import 'react-quill/dist/quill.snow.css';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/adminstyles.css';



export default function App({ Component, pageProps }) {
  const router = useRouter();
  const routerpage = router.pathname.slice(1);
  const splitrouter = router.asPath.split("/");
  const checkvalue = splitrouter.includes("admin")
  // console.log(pageProps); 
// console.log(pageProps.contactus[0]);
  // const alldata = {contactus, locations}
  const pagecontact = pageProps.contactus ? pageProps.contactus[0] : "";

  return (
    <>
    {checkvalue ? (
      <>
        {routerpage == "admin" ? (
          <LayoutAdmin>
            <Component {...pageProps} />
          </LayoutAdmin>
        ) : (
        <LayoutAdmin>
          <HeaderAdmin></HeaderAdmin>
          <Component {...pageProps} />
        </LayoutAdmin>
        )
      }
    </>
    ) : (        
    <Layout>
    <Component {...pageProps} />
  </Layout>
    )}
    </>
  ) 
}
