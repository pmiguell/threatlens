import { useState, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import FilterBar from "../FilterBar/FilterBar";
import style from "./style.module.css";
import ProportionCard from "../ProportionCard/ProportionCard";
import RelevantPostsTable from "../RelevantPostsTable/RelevantPostsTable";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import PolarChart from "../PolarChart/PolarChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart"

export default function Overview() {
  const allData = {
    analyzedPosts: 26757,
    relevantPosts: 3341,
    mostRelevantPosts: [
      { id: 1001, title: "Como derrubar um servidor", rate: 1, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 455, title: "Como obter o endereço de IP de um servidor", rate: 0.8, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 2031, title: "Como criar um servidor", rate: 0.15, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
    ],
  };

  const dataPerYear = {
    label: "no ano",
    analyzedPosts: 1500,
    relevantPosts: 322,
    mostRelevantPosts: [
      { id: 2002, title: "Como derrubar um servidor", rate: 1, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 544, title: "Como obter o endereço de IP de um servidor", rate: 0.8, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 1320, title: "Como criar um servidor", rate: 0.15, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
    ],
  };

  const dataPerMonth = {
    label: "no mês",
    analyzedPosts: 1000,
    relevantPosts: 124,
    mostRelevantPosts: [
      { id: 3023, title: "Como derrubar um servidor", rate: 1, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 133, title: "Como obter o endereço de IP de um servidor", rate: 0.8, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 222, title: "Como criar um servidor", rate: 0.15, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
    ],
  };

  const dataPerWeek = {
    label: "na semana",
    analyzedPosts: 500,
    relevantPosts: 87,
    mostRelevantPosts: [
      { id: 12, title: "Como derrubar um servidor", rate: 1, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 35, title: "Como obter o endereço de IP de um servidor", rate: 0.8, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 201, title: "Como criar um servidor", rate: 0.15, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
    ],
  };

  const dataPerDay = {
    label: "hoje",
    analyzedPosts: 75,
    relevantPosts: 17,
    mostRelevantPosts: [
      { id: 332, title: "Como derrubar um servidor", rate: 1, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não'},
      { id: 231, title: "Como obter o endereço de IP de um servidor", rate: 0.8, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não'},
      { id: 3043, title: "Como criar um servidor", rate: 0.15, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
    ],
  };

  const [filter, setFilter] = useState("Tudo");
  const [displayedData, setDisplayedData] = useState(allData);

  useEffect(() => {
    switch (filter) {
      case "Ano":
        setDisplayedData(dataPerYear);
        break;
      case "Mês":
        setDisplayedData(dataPerMonth);
        break;
      case "Semana":
        setDisplayedData(dataPerWeek);
        break;
      case "Dia":
        setDisplayedData(dataPerDay);
        break;
      case "Tudo":
      default:
        setDisplayedData(allData);
        break;
    }
  }, [filter]);

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
      <FilterBar setFilter={setFilter} />
      <div className={style.infosContainer}>
        <div className={style.infosContainerCol1}>
          <ProportionCard
            analyzedPosts={displayedData.analyzedPosts}
            relevantPosts={displayedData.relevantPosts}
            label={displayedData.label}
          />
          <RelevantPostsTable mostRelevantPosts={displayedData.mostRelevantPosts} />
        </div>
        <div className={style.infosContainerCol2}>
          <DoughnutChart />
        </div>
      </div>
      <BarChart />
    </div>
  );
}
