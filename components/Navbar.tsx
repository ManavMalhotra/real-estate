export const Navbar = () => {
  const menu = [
    "MAIN",
    "BUY",
    "DEVELOPERS",
    "DISTRICTS",
    "ABOUT US",
    "CONTACTS",
  ];

  return (
    <nav className="hidden lg:block px-16">
      <ul className="flex flex-row">
        {menu.map((item) => (
          <li
            key={item}
            className="text-white border bg-lightBlue border-golden px-12 py-4"
          >
            <a href="/" className="text-nowrap">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
