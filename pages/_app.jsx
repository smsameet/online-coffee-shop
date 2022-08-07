import Layout from '../components/layout'
import SideBar from '../components/SideBar'
import Footer from '../components/footer'
import '../styles/globals.css'

const MyApp = ({Component, pageProps}) => {
  return (
    <>
      <Layout>
        <Component {...pageProps}></Component>
        <SideBar></SideBar>
      </Layout>
      <Footer></Footer>
    </>
  )
}

export default MyApp
