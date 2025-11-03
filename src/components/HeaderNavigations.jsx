import { headerMenus } from "../data/HeaderMenus";
import { Link } from "react-router-dom";

const HeaderNavigations = () => {
  return (
    <ul className="flex lg:flex-row flex-col gap-8 font-semibold">
      {headerMenus.map((menu) => (
        <Link key={menu} to={menu?.path}>
          <li>
            <div className="px-4 py-2 hover:bg-[#5F9EA0] text-[14px] rounded-md hover:text-white  focus:bg-[#5F9EA0] focus:text-white">
              {menu?.name}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default HeaderNavigations;
