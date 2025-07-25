import "./Section_cards.css";
import Otimizacao from '../Otimização/Otimizacao.jsx';
import Click from '../Click/Click.jsx';

function Section_cards() {
    return (
        <div className="container_section_cards">

            <header className="container_header_section_cards">

                <div className="container_organizar_titulo">

                    <h2>Services</h2>
                    <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>

                </div>

            </header>

            <section className="container_section_um_cards">

                <Otimizacao />
                <Click/>

            </section>

        </div>
    )
}

export default Section_cards