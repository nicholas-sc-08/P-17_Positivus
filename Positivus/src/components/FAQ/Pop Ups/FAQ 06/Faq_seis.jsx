import "./Faq_seis.css";
import { useState } from "react";
import { useEffect } from "react";

function Faq_seis() {

  const [icone_botao, set_icone_botao] = useState(`./images/FAQ/-.svg`);
  const [altura_div, set_altura_div] = useState(`25%`);
  const [altura_titulo, set_altura_titulo] = useState(`80%`);
  const [display_texto, set_display_texto] = useState(`none`);
  const [abrir_faq, set_abrir_faq] = useState(false);

  useEffect(() => {

    if (abrir_faq) {

      set_icone_botao(`./images/FAQ/-.svg`);
      set_altura_div(`30%`);
      set_altura_titulo(`50%`);
      set_display_texto(``);

    } else {

      set_icone_botao(`./images/FAQ/+.svg`);
      set_altura_div(`15%`);
      set_altura_titulo(`80%`);
      set_display_texto(`none`);
    };

  }, [abrir_faq]);

  return (
    <div className='container_espaco_faq_seis' style={{ height: altura_div }}>

      <article className="container_faq_seis">

        <header className="container_titulo_faq_seis" style={{ height: altura_titulo }}>

          <h3><span>06</span>Continual Improvement</h3>
          <button onClick={() => set_abrir_faq(!abrir_faq)}><img src={icone_botao} /></button>

        </header>

        <p style={{ display: display_texto }}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>

      </article>

    </div>
  )
}

export default Faq_seis