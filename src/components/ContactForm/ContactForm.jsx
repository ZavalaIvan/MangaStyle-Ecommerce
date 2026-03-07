import "./ContactForm.css";

import { MdOutlineArrowOutward } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="contact-parallax-image-wrapper">
        <h1>MangaStyle</h1>
        <img src="/contact-form/contact-parallax.png" alt="" />
      </div>
      <div className="contact-form-container">
        <div className="cf-header">
          <h4>Suscribete para enterarte primero de los nuevos drops.</h4>
        </div>
        <div className="cf-copy">
          <p className="bodyCopy sm">
            Solo enviamos lanzamientos, preventas y restocks relevantes.
          </p>
        </div>
        <div className="cf-input">
          <input type="text" placeholder="Escribe tu correo" />
        </div>
        <div className="cf-submit">
          <MdOutlineArrowOutward />
        </div>
        <div className="cf-footer">
          <div className="cf-divider"></div>
          <div className="cf-footer-copy">
            <p className="bodyCopy sm">
              Nada de spam. Solo noticias utiles para fans de MangaStyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
