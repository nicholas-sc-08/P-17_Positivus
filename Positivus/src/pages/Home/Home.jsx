import './Home.css';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Marcas from '../../components/Marcas/Marcas.jsx';
import Section_cards from '../../components/Cards Serviço/Section Cards/Section_cards.jsx';
import Cta from '../../components/CTA/Cta.jsx';
import Section_case_studies from '../../components/Case Studies/Section Case Studies/Section_case_studies.jsx';
import Section_faq from '../../components/FAQ/Section FAQ/Section_faq.jsx';

function Home() {
  return (
    <div className='container_home'>

      <Header />
      <Banner />
      <Marcas />
      <Section_cards/>
      <Cta/>
      <Section_case_studies/>
      <Section_faq/>

    </div>
  )
}

export default Home