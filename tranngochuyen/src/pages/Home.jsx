import { SearchOutlined } from "@ant-design/icons"
import { Input, Carousel, Image } from "antd"
import { TopBar } from "../components/TopBar"
import { Header } from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar/>

      <Header/>

      <Navigation/>


      <Footer/>
    </div>
  )
}
