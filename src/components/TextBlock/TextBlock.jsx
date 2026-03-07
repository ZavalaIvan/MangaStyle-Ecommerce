import "./TextBlock.css";

import Copy from "../Copy/Copy";
import BrandIcon from "../BrandIcon/BrandIcon";

const TextBlock = () => {
  return (
    <section className="text-block">
      <div className="container">
        <div className="text-block-col">
          <Copy>
            <h3>Anime, manga y moda moderna en una sola rotacion.</h3>
          </Copy>
          <div className="text-block-logo">
            <BrandIcon />
          </div>
        </div>
        <div className="text-block-col">
          <div className="text-block-copy">
            <Copy>
              <p className="bodyCopy sm">
                MangaStyle selecciona playeras con siluetas amplias, materiales
                comodos y graficas que no se sienten como merch generico. La
                idea es usar anime dentro de un look real, no aparte de el.
              </p>
            </Copy>
          </div>
          <div className="text-block-copy">
            <Copy>
              <p className="bodyCopy sm">
                Hay referencias shonen, mecha, slice of life y editorial retro,
                pero todo pasa por un filtro visual coherente. El resultado es
                un ecommerce con identidad y piezas faciles de integrar.
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
