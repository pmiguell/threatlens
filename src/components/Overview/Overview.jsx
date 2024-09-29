import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import FilterBar from "../FilterBar/FilterBar";
import style from "./style.module.css";
import ProportionCard from "../ProportionCard/ProportionCard";
import RelevantPostsTable from "../RelevantPostsTable/RelevantPostsTable";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";

export default function Overview() {
  return (
    <div className={style.app}>
      <header className={style.dashboardHeader}>
        <div className={style.welcome}>
          <h2>Dashboard</h2>
          <p>Olá, administrador! Bem-vindo de volta.</p>
        </div>
        <div className={style.dashboardHeaderIcons}>
          <IoIosNotificationsOutline className={style.headerIcon} />
          <CiUser className={style.headerIcon} />
        </div>
      </header>
      <FilterBar />
      <div className={style.infosContainer}>
        <div className={style.infosContainerCol1}>
          <ProportionCard />
          <RelevantPostsTable />
        </div>
        <div className={style.infosContainerCol2}>
          <PieChart />
        </div>
      </div>
      <BarChart />
    </div>
  );
}
