import loremLogo from "../assets/images/book-logo.jpg";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12">
        {" "}
        <a href="#">
          <img
            className="w-full h-full object-cover"
            src={loremLogo}
            alt="Lorem logo"
          />
        </a>
      </div>
      <h1 className="font-bold ml-1">LOREMLOGO</h1>
    </div>
  );
};

export default Logo;
