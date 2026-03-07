"use client";
import "./genesis.css";
import { useRef } from "react";

import Copy from "@/components/Copy/Copy";
import TextBlock from "@/components/TextBlock/TextBlock";
import BrandIcon from "@/components/BrandIcon/BrandIcon";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Genesis() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".project-page-whitespace",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const projectPreviewWrapper = document.querySelector(
            ".project-preview-wrapper"
          );
          const previewCols = document.querySelectorAll(
            ".preview-col:not(.main-preview-col)"
          );
          const mainPreviewImg = document.querySelector(
            ".preview-img.main-preview-img img"
          );

          if (!projectPreviewWrapper || !previewCols.length || !mainPreviewImg)
            return;

          const previewScreenWidth = window.innerWidth;
          const previewMaxScale = previewScreenWidth < 900 ? 4 : 2.65;

          const scale = 1 + self.progress * previewMaxScale;
          const yPreviewColTranslate = self.progress * 300;
          const mainPreviewImgScale = 2 - self.progress * 0.85;

          projectPreviewWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;

          previewCols.forEach((previewCol) => {
            previewCol.style.transform = `translateY(${yPreviewColTranslate}px)`;
          });

          mainPreviewImg.style.transform = `scale(${mainPreviewImgScale})`;
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <section className="project-preview">
        <div className="project-preview-wrapper">
          <div className="preview-col">
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_03.jpg" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_06.jpg" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_09.jpg" alt="" />
            </div>
          </div>
          <div className="preview-col">
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_01.jpg" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_04.jpg" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_07.jpg" alt="" />
            </div>
          </div>
          <div className="preview-col main-preview-col">
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_02.jpg" alt="" />
            </div>
            <div className="preview-img main-preview-img">
              <img src="/spotlight/spotlight_img_05.jpg" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_08.jpg" alt="" />
            </div>
          </div>
          <div className="preview-col">
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_03.jpg" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_06.jpg" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_09.jpg" alt="" />
            </div>
          </div>
          <div className="preview-col">
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_01.jpg" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_04.jpg" alt="" />
            </div>
            <div className="preview-img">
              <img src="/spotlight/spotlight_img_07.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="genesis-hero">
        <div className="gen-hero-img">
          <img src="/genesis/hero.jpg" alt="" />
        </div>
        <div className="container">
          <div className="gen-hero-copy">
            <Copy animateOnScroll={false} delay={0.7} type="flicker">
              <p>Anime en clave streetwear,</p>
              <p>graficas con actitud,</p>
              <p>drops hechos para fans.</p>
            </Copy>
          </div>
          <div className="gen-hero-copy">
            <Copy animateOnScroll={false} delay={0.8} type="flicker">
              <p>Curamos playeras con energia otaku,</p>
              <p>pensadas para hoy.</p>
            </Copy>
          </div>
          <div className="gen-hero-copy">
            <Copy animateOnScroll={false} delay={0.7}>
              <h1>La historia detras de MangaStyle</h1>
            </Copy>
            <div className="gen-hero-meta">
              <div className="gen-hero-meta-block">
                <Copy animateOnScroll={false} delay={0.9} type="flicker">
                  <p>Mezclamos moda urbana,</p>
                  <p>referencias anime y manga,</p>
                  <p>y graficas con caracter.</p>
                </Copy>
              </div>
              <div className="gen-hero-meta-block">
                <Copy animateOnScroll={false} delay={1} type="flicker">
                  <p>[ DROP/MANGASTYLE/0001 ]</p>
                </Copy>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="genesis-about">
        <div className="container">
          <div className="genesis-about-logo">
            <BrandIcon fill="#111111" />
          </div>
          <div className="genesis-about-copy">
            <Copy>
              <h4>
                MangaStyle nace de una idea simple: las playeras de anime no
                tienen que verse genericas. Cada diseño parte de una direccion
                visual clara, una silueta comoda y una grafica que funciona
                tanto en foto como en la calle.
              </h4>
            </Copy>
            <Copy>
              <h4 delay={0.5}>
                Nuestro catalogo mezcla nostalgia manga, energia shonen,
                atmosfera cyber y sensibilidad editorial. No vendemos solo
                merch: construimos un ecommerce de playeras para fans que cuidan
                su outfit y quieren usar anime con estilo real.
              </h4>
            </Copy>
          </div>
        </div>
      </section>

      <section className="project-page-whitespace"></section>

      <TextBlock />
    </div>
  );
}
