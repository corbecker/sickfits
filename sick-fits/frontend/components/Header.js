import Nav from "./Nav";
import Meta from "./Meta";

const Header = () => (
  <div>
    <Meta />
    <div className="bar">
      <a href="">Sick Fits</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>
      <p>Cart</p>
    </div>
  </div>
);

export default Header;
