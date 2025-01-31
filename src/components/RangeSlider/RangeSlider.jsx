import React, { useState } from "react";
import ReactSlider from "react-slider";
import style from "./RangeSlider.module.css";

function RangeSlider() {
  const [value, setValue] = useState(0);

  return (
    <div className={style.sliderContainer}>
      <ReactSlider
        className={style.slider}
        thumbClassName={style.thumb}
        trackClassName={style.track}
        value={value}
        onChange={setValue}
        min={0}
        max={1}
        step={0.01}
        renderTrack={(props, state) => {
          const trackStyle = {
            ...props.style,
            backgroundColor: state.index === 0 ? "#6558FF" : "#747474",
          };
          return <div {...props} style={trackStyle} />;
        }}
        renderThumb={(props, state) => (
          <div {...props} className={style.thumb}>
            <div className={style.thumbValue}>{state.valueNow.toFixed(2)}</div>
          </div>
        )}
      />
    </div>
  );
}

export default RangeSlider;
