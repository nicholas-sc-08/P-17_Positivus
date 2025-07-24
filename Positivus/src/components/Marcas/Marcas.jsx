import { Link } from "react-router-dom";
import "./Marcas.css";

function Marcas() {
  return (
    <div className="container_marcas">

        <Link><img src="./images/Marcas/Amazon.svg"/></Link>
        <Link><img src="./images/Marcas/Drillle.svg"/></Link>
        <Link><img src="./images/Marcas/HubSpoot.svg"/></Link>
        <Link><img src="./images/Marcas/Notion.svg"/></Link>
        <Link><img src="./images/Marcas/NETFLIX.svg"/></Link>
        <Link><img src="./images/Marcas/Zoom.svg"/></Link>

    </div>
  )
}

export default Marcas