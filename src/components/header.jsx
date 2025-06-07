import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <h1>logo</h1>
        <h1>Some Shop</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
