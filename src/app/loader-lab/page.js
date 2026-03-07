"use client";

import "./loader-lab.css";
import { useState } from "react";

import Copy from "@/components/Copy/Copy";
import LoaderSpriteLab from "@/components/LoaderSpriteLab/LoaderSpriteLab";

const DEFAULT_LAB_VALUES = {
  frameCount: 22,
  spriteDuration: 1.75,
  travelDuration: 6,
  moveSteps: 36,
  travelDistance: 520,
  scale: 0.85,
  cropLeft: 8,
  cropRight: 8,
};

export default function LoaderLabPage() {
  const [frameCount, setFrameCount] = useState(DEFAULT_LAB_VALUES.frameCount);
  const [spriteDuration, setSpriteDuration] = useState(
    DEFAULT_LAB_VALUES.spriteDuration
  );
  const [travelDuration, setTravelDuration] = useState(
    DEFAULT_LAB_VALUES.travelDuration
  );
  const [moveSteps, setMoveSteps] = useState(DEFAULT_LAB_VALUES.moveSteps);
  const [travelDistance, setTravelDistance] = useState(
    DEFAULT_LAB_VALUES.travelDistance
  );
  const [scale, setScale] = useState(DEFAULT_LAB_VALUES.scale);
  const [labResetKey, setLabResetKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleReset = () => {
    setFrameCount(DEFAULT_LAB_VALUES.frameCount);
    setSpriteDuration(DEFAULT_LAB_VALUES.spriteDuration);
    setTravelDuration(DEFAULT_LAB_VALUES.travelDuration);
    setMoveSteps(DEFAULT_LAB_VALUES.moveSteps);
    setTravelDistance(DEFAULT_LAB_VALUES.travelDistance);
    setScale(DEFAULT_LAB_VALUES.scale);
    setIsPlaying(true);
    setLabResetKey((prev) => prev + 1);
  };

  return (
    <section className="loader-lab-page">
      <div className="container">
        <div className="loader-lab-header">
          <Copy animateOnScroll={false} delay={0.2} type="flicker">
            <p>[ Loader Animation Lab ]</p>
          </Copy>
          <Copy animateOnScroll={false} delay={0.3}>
            <h1>Sprite animation tipo CSS steps</h1>
          </Copy>
          <Copy animateOnScroll={false} delay={0.4}>
            <p className="bodyCopy">
              Esta version replica la idea del ejemplo: un solo div con
              `background-image`, una animacion de frames con `steps(...)` y
              otra animacion de desplazamiento horizontal.
            </p>
          </Copy>
        </div>

        <div className="loader-lab-layout">
          <div className="loader-lab-preview">
            <LoaderSpriteLab
              key={labResetKey}
              frameCount={frameCount}
              spriteDuration={spriteDuration}
              travelDuration={travelDuration}
              moveSteps={moveSteps}
              travelDistance={travelDistance}
              scale={scale}
              cropLeft={DEFAULT_LAB_VALUES.cropLeft}
              cropRight={DEFAULT_LAB_VALUES.cropRight}
              isPlaying={isPlaying}
            />
          </div>

          <div className="loader-lab-controls">
            <div className="loader-lab-control-grid">
              <label className="loader-lab-control">
                <span>Frames</span>
                <input
                  type="range"
                  min="6"
                  max="30"
                  value={frameCount}
                  onChange={(e) => setFrameCount(Number(e.target.value))}
                />
                <strong>{frameCount}</strong>
              </label>

              <label className="loader-lab-control">
                <span>Duracion sprite</span>
                <input
                  type="range"
                  min="0.8"
                  max="4"
                  step="0.05"
                  value={spriteDuration}
                  onChange={(e) => setSpriteDuration(Number(e.target.value))}
                />
                <strong>{spriteDuration.toFixed(2)}s</strong>
              </label>

              <label className="loader-lab-control">
                <span>Duracion movimiento</span>
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="0.25"
                  value={travelDuration}
                  onChange={(e) => setTravelDuration(Number(e.target.value))}
                />
                <strong>{travelDuration.toFixed(2)}s</strong>
              </label>

              <label className="loader-lab-control">
                <span>Steps movimiento</span>
                <input
                  type="range"
                  min="10"
                  max="80"
                  value={moveSteps}
                  onChange={(e) => setMoveSteps(Number(e.target.value))}
                />
                <strong>{moveSteps}</strong>
              </label>

              <label className="loader-lab-control">
                <span>Distancia</span>
                <input
                  type="range"
                  min="120"
                  max="680"
                  value={travelDistance}
                  onChange={(e) => setTravelDistance(Number(e.target.value))}
                />
                <strong>{travelDistance}px</strong>
              </label>

              <label className="loader-lab-control">
                <span>Escala</span>
                <input
                  type="range"
                  min="1"
                  max="3.4"
                  step="0.05"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                />
                <strong>{scale.toFixed(2)}x</strong>
              </label>
            </div>

            <div className="loader-lab-actions">
              <button
                className={isPlaying ? "secondary" : "primary"}
                onClick={() => setIsPlaying((prev) => !prev)}
              >
                {isPlaying ? "Pausar" : "Reproducir"}
              </button>
              <button className="primary" onClick={handleReset}>
                Reset
              </button>
            </div>

            <div className="loader-lab-notes">
              <p>
                Ruta esperada del PNG:
                <code> public/loader-lab/dancer-sprite.png</code>
              </p>
              <p>
                Esta prueba ya no usa recortes manuales. El sprite corre como
                sheet horizontal clasico y el desplazamiento se hace con otra
                animacion CSS, igual que tu referencia.
              </p>
              <p>
                Si el numero de poses reales del PNG cambia, ajusta primero
                <code> Frames</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
