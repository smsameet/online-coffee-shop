import Layout from '../components/layout'
import SideBar from '../components/SideBar'
import '../styles/globals.css'

const MyApp = ({Component, pageProps}) => {
  return (
    <Layout>
      <SideBar></SideBar>
      <Component {...pageProps}></Component>
    </Layout>
  )
}

export default MyApp
