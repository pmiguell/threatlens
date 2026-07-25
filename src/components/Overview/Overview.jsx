import { useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import style from "./Overview.module.css";
import ProportionCard from "../ProportionCard/ProportionCard";
import RelevantPostsTable from "../RelevantPostsTable/RelevantPostsTable";
import BarChart from "../BarChart/BarChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import WordCloud from "../WordCloud/WordCloud";
import Header from "../Header/Header";
import { wordCloudData } from "../../data/overviewData";
import { useStats, usePosts } from "../../hooks";

const FILTER_TO_PERIOD = {
  Dia: "DAY",
  Semana: "WEEK",
  "Mês": "MONTH",
  Ano: "YEAR",
  Tudo: "ALL",
};

const FILTER_LABEL = {
  Dia: "hoje",
  Semana: "na semana",
  "Mês": "no mês",
  Ano: "no ano",
  Tudo: "",
};

export default function Overview() {
  const [filter, setFilter] = useState("Tudo");

  const period = FILTER_TO_PERIOD[filter];

  const { stats } = useStats({ period });
  const { posts: topPosts } = usePosts({ sort: "SCORE", order: "DESC", size: 5, period });

  const analyzedPosts = stats?.summary.totalPosts ?? 0;
  const relevantPosts = stats?.summary.relevantPostsInPeriod ?? 0;
  const label = FILTER_LABEL[filter];

  return (
    <div className={style.app}>
      <Header pageName="Dashboard" pageDescription="Olá! Bem-vindo de volta." />
      <FilterBar setFilter={setFilter} />
      <div className={style.infosContainer}>
        <div className={style.infosContainerCol1}>
          <ProportionCard
            analyzedPosts={analyzedPosts}
            relevantPosts={relevantPosts}
            label={label}
          />
          <RelevantPostsTable mostRelevantPosts={topPosts} />
        </div>
        <div className={style.infosContainerCol2}>
          <DoughnutChart
            low={stats?.relevanceDistribution.lowCount ?? 0}
            medium={stats?.relevanceDistribution.mediumCount ?? 0}
            high={stats?.relevanceDistribution.highCount ?? 0}
          />
        </div>
      </div>
      <BarChart sources={stats?.sources ?? []} label={label} />
      <WordCloud palavras={wordCloudData} />
    </div>
  );
}
