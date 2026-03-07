"use client";
import "./unit.css";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { products } from "../wardrobe/products";
import Copy from "@/components/Copy/Copy";
import Product from "@/components/Product/Product";
import { useCartStore } from "@/store/cartStore";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Unit() {
  const heroRef = useRef(null);
  const activeMinimapIndex = useRef(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const addToCart = useCartStore((state) => state.addToCart);
  const pathname = usePathname();

  const currentProduct =
    products.find((p) => p.name === "Ronin Chapter Tee") || products[14];

  useEffect(() => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    setRelatedProducts(shuffled.slice(0, 4));
  }, []);

  useEffect(() => {
    if (pathname === "/unit") {
      window.scrollTo(0, 0);

      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener("scrollToTop", handleScrollToTop);

    return () => {
      window.removeEventListener("scrollToTop", handleScrollToTop);
    };
  }, []);

  useGSAP(() => {
    const snapshots = document.querySelectorAll(".product-snapshot");
    const minimapImages = document.querySelectorAll(
      ".product-snapshot-minimap-img"
    );
    const totalImages = snapshots.length;

    gsap.set(snapshots[0], { y: "0%", scale: 1 });
    gsap.set(minimapImages[0], { scale: 1.25 });
    for (let i = 1; i < totalImages; i++) {
      gsap.set(snapshots[i], { y: "100%", scale: 1 });
      gsap.set(minimapImages[i], { scale: 1 });
    }

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 5}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        let currentActiveIndex = 0;

        for (let i = 1; i < totalImages; i++) {
          const imageStart = (i - 1) / (totalImages - 1);
          const imageEnd = i / (totalImages - 1);

          let localProgress = (progress - imageStart) / (imageEnd - imageStart);
          localProgress = Math.max(0, Math.min(1, localProgress));

          const yValue = 100 - localProgress * 100;
          gsap.set(snapshots[i], { y: `${yValue}%` });

          const scaleValue = 1 + localProgress * 0.5;
          gsap.set(snapshots[i - 1], { scale: scaleValue });

          if (localProgress >= 0.5) {
            currentActiveIndex = i;
          }
        }

        if (currentActiveIndex !== activeMinimapIndex.current) {
          gsap.to(minimapImages[currentActiveIndex], {
            scale: 1.25,
            duration: 0.3,
            ease: "power2.out",
          });

          for (let i = 0; i < currentActiveIndex; i++) {
            gsap.to(minimapImages[i], {
              scale: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }

          for (let i = currentActiveIndex + 1; i < totalImages; i++) {
            gsap.to(minimapImages[i], {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          }

          activeMinimapIndex.current = currentActiveIndex;
        }
      },
    });

    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <section className="product-hero" ref={heroRef}>
        <div className="product-hero-col product-snapshots">
          <div className="product-snapshot">
            <img src="/product/product_shot_01.jpg" alt="" />
          </div>
          <div className="product-snapshot">
            <img src="/product/product_shot_02.jpg" alt="" />
          </div>
          <div className="product-snapshot">
            <img src="/product/product_shot_03.jpg" alt="" />
          </div>
          <div className="product-snapshot">
            <img src="/product/product_shot_04.jpg" alt="" />
          </div>
          <div className="product-snapshot">
            <img src="/product/product_shot_05.jpg" alt="" />
          </div>
          <div className="product-snapshot-minimap">
            <div className="product-snapshot-minimap-img">
              <img src="/product/product_minimap_01.jpg" alt="" />
            </div>
            <div className="product-snapshot-minimap-img">
              <img src="/product/product_minimap_02.jpg" alt="" />
            </div>
            <div className="product-snapshot-minimap-img">
              <img src="/product/product_minimap_03.jpg" alt="" />
            </div>
            <div className="product-snapshot-minimap-img">
              <img src="/product/product_minimap_04.jpg" alt="" />
            </div>
            <div className="product-snapshot-minimap-img">
              <img src="/product/product_minimap_05.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="product-hero-col product-meta">
          <div className="product-meta-container">
            <div className="product-meta-header">
              <h3>Ronin Chapter Tee</h3>
              <h3>$36</h3>
            </div>
            <div className="product-meta-header-divider"></div>
            <div className="product-color-container">
              <p className="md">Color</p>
              <div className="product-colors">
                <div className="product-color">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="product-sizes-container">
              <p className="md">Talla</p>
              <div className="product-sizes">
                <p className="md selected">[ S ]</p>
                <p className="md">[ M ]</p>
                <p className="md">[ L ]</p>
                <p className="md">[ XL ]</p>
              </div>
            </div>
            <div className="product-meta-buttons">
              <button
                className="primary"
                onClick={() => addToCart(currentProduct)}
              >
                Agregar al carrito
              </button>
              <button className="secondary">Guardar favorito</button>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details specifications">
        <div className="product-col product-col-copy">
          <div className="product-col-copy-wrapper">
            <Copy>
              <h4>Detalles</h4>
            </Copy>
            <Copy>
              <p className="bodyCopy lg">
                Playera de algodon de peso medio con fit relajado, cuello
                reforzado y caida comoda. La grafica frontal esta inspirada en
                tomos de samurais modernos, con una composicion editorial que se
                ve fuerte sin perder versatilidad.
              </p>
              <p className="bodyCopy lg">
                La tinta ofrece buen contraste sobre base stone y el diseño fue
                pensado para combinar con denim, cargos o capas ligeras. Es una
                pieza central para fans del anime que quieren un look mas maduro
                y menos obvio.
              </p>
            </Copy>
          </div>
        </div>
        <div className="product-col product-col-img">
          <img src="/product/product_shot_03.jpg" alt="" />
        </div>
      </section>

      <section className="product-details shipping-details">
        <div className="product-col product-col-img">
          <img src="/product/product_shot_04.jpg" alt="" />
        </div>
        <div className="product-col product-col-copy">
          <div className="product-col-copy-wrapper">
            <Copy>
              <h4>Envios y devoluciones</h4>
            </Copy>
            <Copy>
              <p className="bodyCopy lg">
                Procesamos pedidos en 24 a 72 horas habiles y enviamos con guia
                rastreable. La mayoria de los envios nacionales llega en menos
                de 7 dias habiles. Cuando tu orden salga del almacen recibiras
                tu numero de seguimiento por correo.
              </p>
              <p className="bodyCopy lg">
                Aceptamos devoluciones de prendas sin uso dentro de los primeros
                14 dias despues de la entrega. Si necesitas cambio por talla o
                soporte con tu compra, nuestro equipo de MangaStyle te responde
                directamente por correo.
              </p>
            </Copy>
          </div>
        </div>
      </section>

      <section className="related-products">
        <div className="container">
          <div className="related-products-header">
            <h3>Mas playeras del drop</h3>
          </div>
          <div className="related-products-container">
            <div className="container">
              {relatedProducts.map((product) => (
                <Product
                  key={product.name}
                  product={product}
                  productIndex={products.indexOf(product) + 1}
                  showAddToCart={true}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
