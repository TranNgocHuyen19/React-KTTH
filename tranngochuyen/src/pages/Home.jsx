import { SearchOutlined } from "@ant-design/icons"
import { Input, Carousel, Image } from "antd"
import { TopBar } from "../components/TopBar"
import { Header } from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { Banner } from "../components/Banner"
import MenuLeft from "../components/MenuLeft"
import NewsSection from "../components/Section"
import CampusBox from "../components/CampusBox"
import VideoBox from "../components/VideoBox"

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <TopBar />

            <Header />

            <Navigation />
            <Banner />
            <div className="flex gap-5">
                <MenuLeft />
                <NewsSection />
            </div>
            <div className="grid grid-cols-3 gap-10 bg-[#0047AB] p-4">
                <CampusBox title={'PHÂN HIỆU QUÃNG NGÃI'} imageSrc={"quangngai.jpg"} />
                <CampusBox title={'PHÂN HIỆU QUÃNG NGÃI'} imageSrc={"thanhhoa.jpg"} />
                <VideoBox
                    title="VIDEO VÀ HÌNH ẢNH"
                    thumbnailSrc="video-background.jpg"
                    videoUrl="https://www.youtube.com/watch?v=MSSNmxWw4Fs"
                    viewAllLink="/videos"
                />
            </div>


            <Footer />
        </div>
    )
}
