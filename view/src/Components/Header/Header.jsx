import { Link } from "react-router-dom";

export const Header =  () => {
    return(
        <header>
          <Link to="/products">
            <img src="https://img.icons8.com/ios-filled/50/E07BE0/database.png" alt="database"/>
          </Link>
          <h3>Proyecto final - David Perales Rodriguez</h3>
        </header>
    );
}

