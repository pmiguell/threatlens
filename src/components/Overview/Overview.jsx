import { useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import style from "./Overview.module.css";
import ProportionCard from "../ProportionCard/ProportionCard";
import RelevantPostsTable from "../RelevantPostsTable/RelevantPostsTable";
import BarChart from "../BarChart/BarChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import WordCloud from "../WordCloud/WordCloud";
import Header from "../Header/Header";
import { filterDataMap, wordCloudData } from "../../data/overviewData";

export default function Overview() {
  const [filter, setFilter] = useState("Tudo");
  const displayedData = filterDataMap[filter] ?? filterDataMap["Tudo"];

  return (
    <div className={style.app}>
      <Header pageName="Dashboard" pageDescription="Olá! Bem-vindo de volta." />
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
      <WordCloud palavras={wordCloudData} />
    </div>
  );
}
