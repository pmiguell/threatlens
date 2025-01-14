import Overview from "../components/Overview/Overview"
import PostPopUp from "../components/PostPopUp/PostPopUp"

export default function Home() {
    return (
      <div className="home">
        <Overview />
        <PostPopUp></PostPopUp>
      </div>
    )
  }