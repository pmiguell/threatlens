import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";
import style from "./WordCloud.module.css";

const WordCloud = ({ palavras, width = 600, height = 400 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const maxValue = d3.max(palavras, (d) => d.value) || 1;

    const layout = cloud()
      .size([width, height])
      .words(
        palavras.map((p) => ({
          text: p.text,
          size: 10 + (p.value / maxValue) * 40, // escala de 10 a 50px
        }))
      )
      .padding(5)
      .rotate(() => 0)
      .font("Arial")
      .fontSize((d) => d.size)
      .on("end", draw);

    layout.start();

    function draw(words) {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();

      const g = svg
        .attr("viewBox", `0 0 ${width} ${height}`)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      g.selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d) => `${d.size}px`)
        .style("font-family", "Arial")
        .style("fill", "#eee")
        .attr("text-anchor", "middle")
        .attr(
          "transform",
          (d) => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`
        )
        .text((d) => d.text);
    }
  }, [palavras, width, height]);

  return (
    <div className={style.wordCloudContainer}>
      <h2 className={style.description}>Nuvem de palavras</h2>
      <div className={style.wordCloudComponent}>
        <svg ref={svgRef} width={width} height={height}></svg>;
      </div>
    </div>
  );
};

export default WordCloud;
