import Sidebar from "../components/Sidebar/Sidebar"
import Overview from "../components/Overview/Overview"
import PostPopUp from "../components/PostPopUp/PostPopUp"

export default function Home() {
    return (
      <div className="home">
        <Sidebar />
        <Overview />
        <PostPopUp></PostPopUp>
      </div>
    )
  }