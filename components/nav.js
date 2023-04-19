function Nav() {
  const links = [
    { id: "id1", label: "Home", href: "/", icon: "https://placehold.co/48x48" },
    {
      id: "id2",
      label: "About",
      href: "/about",
      icon: "https://placehold.co/48x48",
    },
    {
      id: "id3",
      label: "Contact",
      href: "/contact",
      icon: "https://placehold.co/48x48",
    },
    {
      id: "id4",
      label: "User",
      href: "/user",
      icon: "https://placehold.co/48x48",
    },
  ];

  return (
    <nav className="text-center nav-bar">
      <ul className="flex justify-between px-4 my-4 py-1">
        {links.map((l) => (
          <li key={l.id} className="flex px-2 py-1">
            <a className="text-blue-500	no-underline text-sm" href={l.href}>
              <img src={l.icon} className="mb2 rounded-full" />
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
