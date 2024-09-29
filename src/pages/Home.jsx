import Sidebar from "../components/Sidebar/Sidebar"
import Overview from "../components/Overview/Overview"

export default function Home() {
    return (
      <div className="home">
        <Sidebar />
        <Overview />
      </div>
    )
  }