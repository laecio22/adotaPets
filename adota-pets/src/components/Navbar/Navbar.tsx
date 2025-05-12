

const itemsNavbar = [
  {
    label: "Dashboard",
  },

  {
    label: "Listagem de  Animais",
  },
  {
    label: "Adoções",
  },

  {
    label: "Voluntários",
  },
  {
    label: "Eventos",
  },

  {
    label: "Configurações",
  },
];
const Navbar = () => {
  return (
    <nav className="w-[300px] bg-gray-800 text-white flex justify-center pt-8 ">
      <ul>
        {itemsNavbar.map((item) => (
          <li key={item.label}>{item.label}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
