"use client";
import "./home.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Preloader, { isInitialLoad } from "../components/Preloader/Preloader";
import DotMatrix from "../components/DotMatrix/DotMatrix";
import MarqueeBanner from "../components/MarqueeBanner/MarqueeBanner";
import TextBlock from "../components/TextBlock/TextBlock";
import PeelReveal from "../components/PeelReveal/PeelReveal";
import CTA from "../components/CTA/CTA";

import Copy from "../components/Copy/Copy";
import Product from "../components/Product/Product";
import { mapProductForCard } from "../lib/productCard";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    question: "Cual es su politica de devoluciones y envios?",
    answer:
      "En MangaStyle cada prenda se produce bajo demanda despues de tu compra. El tiempo de produccion suele ser de 2 a 5 dias habiles y despues se envia segun tu pais o region. No aceptamos cambios o devoluciones por talla o cambio de opinion, pero si tu producto llega con defectos, errores de impresion o danos durante el envio, podemos revisar tu caso dentro de los 7 dias posteriores a la entrega.",
    link: "/politicas-envio-devolucion",
    linkLabel: "Ver politicas completas",
  },
  {
    question: "Cuanto tarda en llegar mi pedido?",
    answer:
      "El tiempo total depende de la produccion y del destino. En general, primero se fabrica tu prenda en 2 a 5 dias habiles y despues se envia. Mexico suele tardar de 5 a 10 dias habiles, Estados Unidos de 3 a 7 dias habiles e internacional de 7 a 15 dias habiles.",
  },
  {
    question: "Hacen envios internacionales?",
    answer:
      "Si. Trabajamos con socios logisticos para enviar pedidos a distintas regiones. El tiempo de entrega puede variar segun el pais, la temporada y los procesos aduanales.",
  },
  {
    question: "Puedo cambiar la talla despues de comprar?",
    answer:
      "Como cada prenda se produce especialmente para tu pedido, no manejamos cambios por error de talla o por cambio de opinion. Te recomendamos revisar con cuidado la informacion del producto antes de finalizar la compra.",
  },
  {
    question: "Que hago si mi pedido llega con un problema?",
    answer:
      "Si recibes un producto defectuoso, con error de impresion, diferente al solicitado o danado durante el envio, escribenos dentro de los 7 dias posteriores a la recepcion con tu numero de pedido, fotos claras y una breve descripcion del problema.",
  },
  {
    question: "Que pasa si escribo mal mi direccion?",
    answer:
      "Es importante capturar una direccion completa y correcta. Si el transportista no puede entregar el pedido y este regresa al centro logistico, podremos ayudarte a reenviarlo, aunque en algunos casos puede generarse un nuevo costo de envio.",
  },
];

export default function Index() {
  const [loaderAnimating, setLoaderAnimating] = useState(isInitialLoad);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const heroImgRef = useRef(null);
  const heroHeaderRef = useRef(null);
  const heroSectionRef = useRef(null);

  const handlePreloaderComplete = () => {
    setLoaderAnimating(false);
  };

  useEffect(() => {
    async function loadFeaturedProducts() {
      try {
        const response = await fetch("/api/printful/products", {
          cache: "no-store",
        });
        const data = await response.json();

        if (!response.ok || !data?.ok) {
          throw new Error(data?.error || "No se pudieron cargar los productos");
        }

        setFeaturedProducts((data.products || []).map(mapProductForCard).slice(0, 4));
      } catch {
        setFeaturedProducts([]);
      }
    }

    loadFeaturedProducts();
  }, []);

  useGSAP(() => {
    if (!heroImgRef.current || !heroHeaderRef.current) return;

    gsap.set(heroImgRef.current, { y: 1000 });
    gsap.to(heroImgRef.current, {
      y: 0,
      duration: 0.75,
      ease: "power3.out",
      delay: isInitialLoad ? 5.75 : 1,
    });

    gsap.to(heroHeaderRef.current, {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <>
      <Preloader onAnimationComplete={handlePreloaderComplete} />

      <section className="hero" ref={heroSectionRef}>
        <DotMatrix
          color="#FFD400"
          dotSize={2}
          spacing={5}
          opacity={0.9}
          delay={isInitialLoad ? 6 : 1.125}
        />
        <div className="container">
          <div className="hero-header" ref={heroHeaderRef}>
            <Copy animateOnScroll={false} delay={isInitialLoad ? 5.5 : 0.65}>
              <h1>Playeras de anime para vestir tu siguiente arco</h1>
            </Copy>
          </div>
        </div>
        <div className="hero-img" ref={heroImgRef}>
          <img src="/home/hero.png" alt="" />
        </div>
        <div className="section-footer">
          <Copy
            type="flicker"
            delay={isInitialLoad ? 7.5 : 0.65}
            animateOnScroll={false}
          >
            <p>MangaStyle</p>
          </Copy>
          <Copy
            type="flicker"
            delay={isInitialLoad ? 7.5 : 0.65}
            animateOnScroll={false}
          >
            <p>Drop SS26</p>
          </Copy>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-copy">
            <Copy type="flicker">
              <p>Streetwear, manga y cultura otaku</p>
            </Copy>
            <Copy>
              <h3>
                MangaStyle mezcla ilustracion anime, siluetas modernas y
                playeras listas para el dia a dia.
              </h3>
            </Copy>
            <div className="about-icon">
              <Image
                src="/logos/LOGO-MANGASTYLE-02.png"
                alt="MangaStyle logo"
                width={171880}
                height={171880}
              />
            </div>
          </div>
        </div>
        <div className="section-footer light">
            <Copy type="flicker">
              <p>/ Curado para fans con estilo /</p>
            </Copy>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <div className="featured-products-header">
            <Copy type="flicker">
              <p>Playeras destacadas</p>
            </Copy>
            <Copy>
              <h3>
                Favoritas <br /> del drop
              </h3>
            </Copy>
          </div>
          <div className="featured-products-separator">
            <div className="featured-products-divider"></div>
            <div className="featured-products-labels">
              <Copy type="flicker">
                <p>Seleccion editorial</p>
              </Copy>
              <Copy type="flicker">
                <Link href="/wardrobe">Ver catalogo</Link>
              </Copy>
            </div>
          </div>
          <div className="featured-products-list">
            {featuredProducts.map((product) => (
              <Product
                key={product.id || product.name}
                product={product}
                productIndex={featuredProducts.indexOf(product) + 1}
                showAddToCart={true}
                ctaMode="link"
                ctaLabel="Ir al producto"
              />
            ))}
          </div>
        </div>
      </section>

      <MarqueeBanner />

      <TextBlock />

      <PeelReveal />

      <CTA />

      <section className="faq-preview">
        <div className="container">
          <div className="faq-preview-header">
            <Copy type="flicker">
              <p>FAQ</p>
            </Copy>
            <Copy>
              <h3>Resolvemos tus dudas antes de tu pedido</h3>
            </Copy>
          </div>

          <div className="faq-accordion">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "active" : ""}`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() =>
                      setOpenFaqIndex(isOpen ? -1 : index)
                    }
                  >
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-icon">{isOpen ? "-" : "+"}</span>
                  </button>

                  {isOpen ? (
                    <div className="faq-answer">
                      <p className="bodyCopy">{item.answer}</p>
                      {item.link ? (
                        <Link className="faq-link" href={item.link}>
                          {item.linkLabel}
                        </Link>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
