"use client";

import "./LoaderSpriteLab.css";
import { useEffect, useMemo, useState } from "react";

const LoaderSpriteLab = ({
  src = "/loader-lab/dancer-sprite.png",
  frameCount = 22,
  spriteDuration = 1.75,
  travelDuration = 6,
  moveSteps = 36,
  travelDistance = 420,
  frameWidth = null,
  frameHeight = null,
  cropLeft = 8,
  cropRight = 8,
  scale = 1,
  isPlaying = true,
}) => {
  const [sheetSize, setSheetSize] = useState({ width: 0, height: 0 });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const image = new window.Image();
    image.decoding = "async";

    image.onload = () => {
      setSheetSize({
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
      setImageError(false);
    };

    image.onerror = () => {
      setImageError(true);
      setSheetSize({ width: 0, height: 0 });
    };

    image.src = src;
  }, [src]);

  const computedFrameWidth = useMemo(() => {
    if (frameWidth) return frameWidth;
    if (!sheetSize.width || !frameCount) return 225;
    return Math.floor(sheetSize.width / frameCount);
  }, [frameCount, frameWidth, sheetSize.width]);

  const computedFrameHeight = useMemo(() => {
    if (frameHeight) return frameHeight;
    if (!sheetSize.height) return 400;
    return sheetSize.height;
  }, [frameHeight, sheetSize.height]);

  const visibleFrameWidth = Math.max(
    1,
    Math.round(computedFrameWidth - cropLeft - cropRight)
  );

  const spriteTravelX = Math.max(
    0,
    Math.round(computedFrameWidth * Math.max(frameCount - 1, 0))
  );

  return (
    <div className="loader-sprite-lab">
      <div className="loader-sprite-shell">
        <div className="loader-sprite-track">
          {!imageError ? (
            <div
              className={`loader-sprite-motion ${isPlaying ? "is-playing" : "is-paused"}`}
              style={{
                "--loader-scale": scale,
                "--loader-travel-duration": `${travelDuration}s`,
                "--loader-travel-distance": `${travelDistance}px`,
                "--loader-move-steps": moveSteps,
              }}
            >
              <div
                className={`loader-sprite-runner ${isPlaying ? "is-playing" : "is-paused"}`}
                style={{
                  "--loader-frame-width": `${computedFrameWidth}px`,
                  "--loader-visible-frame-width": `${visibleFrameWidth}px`,
                  "--loader-frame-height": `${computedFrameHeight}px`,
                  "--loader-sheet-width": `${sheetSize.width}px`,
                  "--loader-sheet-height": `${sheetSize.height}px`,
                  "--loader-sprite-start-x": `-${cropLeft}px`,
                  "--loader-sprite-end-x": `-${spriteTravelX + cropLeft}px`,
                  "--loader-step-count": frameCount,
                  "--loader-sprite-duration": `${spriteDuration}s`,
                  "--loader-sprite-image": `url(${src})`,
                }}
              ></div>
            </div>
          ) : (
            <div className="loader-sprite-fallback">
              <p>Falta el PNG del sprite.</p>
              <p>Colocalo en `public/loader-lab/dancer-sprite.png`.</p>
            </div>
          )}
        </div>

        <div className="loader-sprite-meta">
          <p>{frameCount} frames</p>
          <p>{spriteDuration.toFixed(2)}s sprite</p>
          <p>{travelDuration.toFixed(2)}s movimiento</p>
          <p>{computedFrameWidth}px frame</p>
          <p>{visibleFrameWidth}px visibles</p>
          <p>{travelDistance}px travel</p>
        </div>
      </div>
    </div>
  );
};

export default LoaderSpriteLab;
