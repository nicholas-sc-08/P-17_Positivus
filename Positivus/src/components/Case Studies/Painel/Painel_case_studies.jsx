import "./Painel_case_studies.css";

function Painel_case_studies() {
    return (
        <section className="container_painel_case_studies">

            <article className="container_case_study_um">

                <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>

                <div className="alinhamento_botao_case_study_um">

                    <button>Learn More <img src="./images/Case Studies/Seta.svg" /></button>

                </div>

            </article>

            <article className="container_case_study_dois">

                <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>

                <div className="alinhamento_botao_case_study_dois">

                    <button>Learn More <img src="./images/Case Studies/Seta.svg" /></button>

                </div>

            </article>

            <article className="container_case_study_tres">

                <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>

                <div className="alinhamento_botao_case_study_tres">

                    <button>Learn More <img src="./images/Case Studies/Seta.svg" /></button>

                </div>

            </article>

        </section>
    )
}

export default Painel_case_studies