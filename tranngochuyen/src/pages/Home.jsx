import { SearchOutlined } from "@ant-design/icons"
import { Input, Carousel, Image } from "antd"
import { TopBar } from "../components/TopBar"
import { Header } from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <TopBar/>

      {/* Header */}
      <Header/>

      <Footer/>
    </div>
  )
}
