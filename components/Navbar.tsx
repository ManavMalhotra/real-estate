import Link from "next/link";

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
          <Link
            key={item}
            href={`/${item.replace(" ", "-").toLowerCase()}`}
            className="text-white border bg-lightBlue border-golden px-12 py-4
            hover:bg-golden hover:text-black transition duration-300 ease-in-out
            cursor-pointer text-nowrap
            "
          >
            <li>{item}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
