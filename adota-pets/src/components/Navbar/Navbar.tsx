import { RxDashboard } from "react-icons/rx";
import { LiaListAlt } from "react-icons/lia";
import { TbReplace } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GrConfigure } from "react-icons/gr";
import { NavLink } from "react-router";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

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
  const [openMenu, setOpenMenu] = useState(false);

  const handleItemClick = () => {
    if (window.innerWidth < 640) { // 640px é o breakpoint 'sm' do Tailwind
      setOpenMenu(false);
    }
  };

  return (
    <nav className="bg-gray-800 text-white  flex items-center justify-between px-4 relative min-h-28  sm:min-h-screen sm:flex-col sm:items-start sm:pt-0">
      <button 
        onClick={() => setOpenMenu(!openMenu)} 
        className="sm:hidden block text-2xl"
      >
        {openMenu ? <FaXmark  className="mb-3 w-10 h-10 "  /> : <FaBars size={20}/>}
      </button>

      <ul className={`absolute top-16 left-0 w-full  bg-gray-800 ${openMenu ? 'block' : 'hidden'} sm:relative sm:top-0 sm:block sm:pt-8`}>
        {itemsNavbar.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.url}
              className={({ isActive }) => {
                return isActive
                  ? "text-sky-600 mt-10 flex gap-2 h-20 items-center pl-12 transition duration-300 cursor-pointer"
                  : "mt-10 flex gap-2 h-20 items-center hover:bg-slate-400 pl-12 transition duration-300 cursor-pointer hover:text-sky-200";
              }}
              onClick={handleItemClick}
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
