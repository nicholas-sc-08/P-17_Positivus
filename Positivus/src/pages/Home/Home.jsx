import './Home.css';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Marcas from '../../components/Marcas/Marcas.jsx';
import Section_cards from '../../components/Cards Serviço/Section Cards/Section_cards.jsx';
import Cta from '../../components/CTA/Cta.jsx';

function Home() {
  return (
    <div className='container_home'>

      <Header />
      <Banner />
      <Marcas />
      <Section_cards/>
      <Cta/>

    </div>
  )
}

export default Home