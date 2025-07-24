import './Banner.css';

function Banner() {
  return (
    <div className='container_banner'>

        <main className='container_conteudo_banner'>

            <h1>Navigating the digital landscape for success</h1>
            <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button>Book a consultation</button>

        </main>

        <aside className='container_imagem_banner'>

            <img src="./images/Banner_Home.svg" alt="" />

        </aside>

    </div>
  )
}

export default Banner