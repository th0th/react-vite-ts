import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>

        <li><Link to="/second-page">Second page</Link></li>

        <li>
          <Link to="/nested">Nested index</Link>

          <ul>
            <li><Link to="/nested/nested-page">Nested page</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
