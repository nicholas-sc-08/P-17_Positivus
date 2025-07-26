import FAQ_titulo from "../Titulo/FAQ_titulo";
import Faq_um from '../Pop Ups/FAQ 01/Faq_um.jsx';
import Faq_dois from '../Pop Ups/FAQ 02/Faq_dois.jsx';
import Faq_tres from '../Pop Ups/FAQ 03/Faq_tres.jsx';
import Faq_quatro from '../Pop Ups/FAQ 04/Faq_quatro.jsx';
import Faq_cinco from '../Pop Ups/FAQ 05/Faq_cinco.jsx';
import Faq_seis from '../Pop Ups/FAQ 06/Faq_seis.jsx';
import "./Section_faq.css";

function Section_faq() {
  return (
    <div className="container_section_faq">
        
        <FAQ_titulo/>
        <Faq_um/>

    </div>
  )
}

export default Section_faq