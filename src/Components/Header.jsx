import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="LOGO" className="logoImg" />
      </div>
    </header>
  );
};

export default Header;
