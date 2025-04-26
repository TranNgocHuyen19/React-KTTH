import { RightOutlined } from "@ant-design/icons"
import { Image } from "antd"
import { NewsPanel } from "./NewsPannel"


const newsCategories = [
  {
    id: "announcements",
    title: "THÔNG BÁO",
    items: [
      {
        id: "1",
        title: "Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025",
        date: "24-04-2025",
        isNew: true,
      },
      {
        id: "2",
        title: "Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội...",
        date: "21-04-2025",
        isNew: true,
      },
    ],
  },

]

export default function NewsSection() {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsCategories.map((category) => (
          <NewsPanel key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
