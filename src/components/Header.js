import { logo } from "../Config";

const Title = () => (
  <a href="/">
    <h1 id="title3" key="h1">
      {logo}
    </h1>
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header