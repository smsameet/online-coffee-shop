import Layout from '../components/layout'
import SideBar from '../components/SideBar'
import '../styles/globals.css'

const MyApp = ({Component, pageProps}) => {
  return (
    <Layout>
      <Component {...pageProps}></Component>
      <SideBar></SideBar>
    </Layout>
  )
}

export default MyApp
