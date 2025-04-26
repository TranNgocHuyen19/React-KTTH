import { SearchOutlined } from "@ant-design/icons"
import { Input, Carousel, Image } from "antd"
import { TopBar } from "../components/TopBar"
import { Header } from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { Banner } from "../components/Banner"
import MenuLeft from "../components/MenuLeft"
import NewsSection from "../components/Section"

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <TopBar />

            <Header />

            <Navigation />
            <Banner />
            <div className="flex gap-5">
            <MenuLeft />
            <NewsSection/>
            </div>


            <Footer />
        </div>
    )
}
