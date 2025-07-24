import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container_header">

      <header className="container_header_conteudo">

        <div className="container_logo_positivus">

          <img src="./images/Logo.svg" alt="" />

        </div>

        <nav className="container_de_links_header">

          <Link>About Us</Link>
          <Link>Services</Link> 
          <Link>Use Cases</Link>
          <Link>Pricing</Link>
          <Link>Blog</Link>

        </nav>

        <div className="container_botao_header">

          <button>Request a quote</button>
        
        </div>

      </header>
    
    </div>
  )
}

export default Header