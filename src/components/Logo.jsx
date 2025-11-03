import loremLogo from "../assets/images/book-logo.jpg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center cursor-pointer">
      <div className="w-12 h-12">
        {" "}
        <img
          className="w-full h-full object-cover"
          src={loremLogo}
          alt="Lorem logo"
        />
      </div>
      <h1 className="font-bold ml-1">LOREMLOGO</h1>
    </Link>
  );
};

export default Logo;
