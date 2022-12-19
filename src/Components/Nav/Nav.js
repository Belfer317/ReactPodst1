import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/books`}>Książki</Link>
      </li>
      <li>
        <Link to={`/cds`}>Płyty CD</Link>
      </li>
      <li>
        <Link to={`/ebooks`}>Ebooki</Link>
      </li>
    </ul>
  </nav>
);
export default Nav;
