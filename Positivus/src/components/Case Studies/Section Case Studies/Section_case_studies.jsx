import "./Section_case_studies.css";
import Titulo from "../Titulo/Case_Studies_titulo.jsx";
import Painel_case_studies from "../Painel/Painel_case_studies.jsx";

function Section_case_studies() {
  return (
    <div className="container_section_case_studies">

        <Titulo/>
        <Painel_case_studies/>

    </div>
  )
}

export default Section_case_studies