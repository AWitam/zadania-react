import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <h1>Zbiór zadań React</h1>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
      </nav>
    </header>
  );
};
