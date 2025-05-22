import { RxDashboard } from "react-icons/rx";
import { LiaListAlt } from "react-icons/lia";
import { TbReplace } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GrConfigure } from "react-icons/gr";
import { NavLink} from "react-router";

const itemsNavbar = [
  {
    label: "Dashboard",
    icon: <RxDashboard />,
    url: "/",
  },

  {
    label: "Listagem de  Animais",
    icon: <LiaListAlt />,
    url: "/listarAnimais",
  },
  {
    label: "Adoções",
    icon: <TbReplace />,
    url: "/adocoes",
  },

  {
    label: "Voluntários",
    icon: <BsPeople />,
    url: "/voluntarios",
  },
  {
    label: "Eventos",
    icon: <MdOutlineEventAvailable />,
    url: "/eventos",
  },

  {
    label: "Configurações",
    icon: <GrConfigure />,
    url: "/configuracoes",
  },
];
const Navbar = () => {
  return (
    <nav className="w-[300px] bg-gray-800 text-white pt-8 flex justify-center  ">
      <ul className="w-full  ">
        {itemsNavbar.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.url}
              className="mt-10 flex gap-2 h-20 items-center   hover:bg-slate-400  pl-12 transition duration-300 cursor-pointer
          hover:text-sky-200"
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
