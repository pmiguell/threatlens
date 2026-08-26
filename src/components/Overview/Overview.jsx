import { useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import style from "./Overview.module.css";
import ProportionCard from "../ProportionCard/ProportionCard";
import RelevantPostsTable from "../RelevantPostsTable/RelevantPostsTable";
import BarChart from "../BarChart/BarChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import WordCloud from "../WordCloud/WordCloud";
import Header from "../Header/Header";
import { useStats, usePosts, useWordCloud } from "../../hooks";

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

function formatRangeLabel(from, to) {
  const formatDate = (isoDate) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };

  if (from && to) return `de ${formatDate(from)} até ${formatDate(to)}`;
  if (from) return `a partir de ${formatDate(from)}`;
  return `até ${formatDate(to)}`;
}

export default function Overview() {
  const [filter, setFilter] = useState("Tudo");
  const [dateRange, setDateRange] = useState(null);

  const period = FILTER_TO_PERIOD[filter];
  const from = dateRange?.from ? `${dateRange.from}T00:00:00` : undefined;
  const to = dateRange?.to ? `${dateRange.to}T23:59:59` : undefined;

  const { stats } = useStats({ period, from, to });
  const { posts: topPosts } = usePosts({ sort: "SCORE", order: "DESC", size: 5, period, from, to });
  const { words: wordCloudData } = useWordCloud({ period, from, to });

  const analyzedPosts = stats?.summary.totalPosts ?? 0;
  const relevantPosts = stats?.summary.relevantPostsInPeriod ?? 0;
  const label = dateRange ? formatRangeLabel(dateRange.from, dateRange.to) : FILTER_LABEL[filter];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setDateRange(null);
  };

  const handleRangeApply = (range) => {
    setDateRange(range);
  };

  const handleRangeClear = () => {
    setDateRange(null);
  };

  return (
    <div className={style.app}>
      <Header pageName="Dashboard" pageDescription="Olá! Bem-vindo de volta." />
      <FilterBar
        activeFilter={filter}
        setFilter={handleFilterChange}
        dateRange={dateRange}
        onRangeApply={handleRangeApply}
        onRangeClear={handleRangeClear}
      />
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
