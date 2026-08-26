import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";
import style from "./WordCloud.module.css";

const WordCloud = ({ palavras }) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 350 });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        if (w > 0) {
          setDimensions({ width: w, height: Math.max(250, w * 0.45) });
        }
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const { width, height } = dimensions;
    const maxValue = d3.max(palavras, (d) => d.value) || 1;

    const layout = cloud()
      .size([width, height])
      .words(
        palavras.map((p) => ({
          text: p.text,
          size: 10 + (p.value / maxValue) * 40,
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

      svg
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`)
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .attr("class", style.word)
        .attr("text-anchor", "middle")
        .attr("transform", (d) => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`)
        .style("font-size", (d) => `${d.size}px`)
        .text((d) => d.text);
    }
  }, [palavras, dimensions]);

  return (
    <div className={style.wordCloudContainer}>
      <h2 className={style.description}>Nuvem de palavras</h2>
      <div className={style.wordCloudComponent} ref={containerRef}>
        <svg ref={svgRef} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
    </div>
  );
};

export default WordCloud;
