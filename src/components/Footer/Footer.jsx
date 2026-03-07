import "./Footer.css";
import Link from "next/link";

import ContactForm from "../ContactForm/ContactForm";

const Footer = () => {
  return (
    <>
      <ContactForm />

      <footer>
        <div className="container">
          <div className="footer-row">
            <div className="footer-col">
              <div className="footer-col-header">
                <p className="bodyCopy">Navegacion</p>
              </div>
              <div className="footer-col-links">
                <Link href="/">Inicio</Link>
                <Link href="/wardrobe">Catalogo</Link>
                <Link href="/genesis">Nosotros</Link>
                <Link href="/touchpoint">Contacto</Link>
                <Link href="/lookbook">Lookbook</Link>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-col-header">
                <p className="bodyCopy">Comunidad</p>
              </div>
              <div className="footer-col-links">
                <a
                  href="https://www.instagram.com/codegridweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@codegrid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-col-header">
                <p className="bodyCopy">Info</p>
              </div>
              <div className="footer-col-links">
                <p>Playeras anime con enfoque streetwear</p>
                <p>Drops limitados y restocks selectos</p>
                <p>Envios nacionales e internacionales</p>
              </div>
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-copyright">
              <h5>MangaStyle</h5>
              <p className="bodyCopy">&copy;2026 Todos los derechos reservados.</p>
              <p className="bodyCopy" id="copyright-text">
                Ecommerce de playeras de anime
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
