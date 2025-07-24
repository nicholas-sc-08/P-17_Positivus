import './Home.css';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Marcas from '../../components/Marcas/Marcas.jsx';

function Home() {
  return (
    <div className='container_home'>

        <Header/>
        <Banner/>
        <Marcas/>

    </div>
  )
}

export default Home