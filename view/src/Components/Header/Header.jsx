import { Link } from "react-router-dom";

export const Header =  () => {
    return(
        <header>
          <Link to="/popular">
            <img src="https://img.icons8.com/material/48/EAEAEA/reddit.png" alt="Middit icon"/>
          </Link>
        </header>
    );
}