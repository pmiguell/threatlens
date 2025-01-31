import React, { useState } from "react";
import ReactSlider from "react-slider";
import style from "./DoubleRangeSlider.module.css";

function DoubleRangeSlider() {
  const [values, setValues] = useState([0, 1]); // Valores inicial e final

  const handleChange = (newValues) => {
    // Garante que os valores não se cruzem
    if (newValues[0] > newValues[1]) {
      newValues[0] = newValues[1]; // Iguala os valores se o primeiro tentar passar o segundo
    }
    if (newValues[1] < newValues[0]) {
      newValues[1] = newValues[0]; // Iguala os valores se o segundo tentar passar o primeiro
    }
    setValues(newValues);
  };

  return (
    <div className={style.sliderContainer}>
      <ReactSlider
        className={style.slider}
        thumbClassName={style.thumb}
        trackClassName={style.track}
        value={values}
        onChange={handleChange} // Usa a função handleChange personalizada
        min={0}
        max={1}
        step={0.01}
        pearling // Permite que os dois thumbs se movam independentemente
        minDistance={0.01} // Distância mínima entre os thumbs
        renderTrack={(props, state) => {
          // Aplica estilos diferentes para cada faixa (track)
          const trackStyle = {
            ...props.style,
            backgroundColor:
              state.index === 1 ? "#6558FF" : "#747474", // Azul para o espaço entre as bolas
          };
          return <div {...props} style={trackStyle} />;
        }}
        renderThumb={(props, state) => {
          // Renderiza a bola e o valor abaixo dela
          return (
            <div {...props} className={style.thumb}>
              <div className={style.thumbValue}>
                {state.valueNow.toFixed(2)}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default DoubleRangeSlider;