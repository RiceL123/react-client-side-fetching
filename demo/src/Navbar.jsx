import { NavLink } from "react-router";

const linkStyles = {
  fontSize: "0.95rem",
  color: "#555",
  textDecoration: "none",
  paddingBottom: "0.25rem",
  position: "relative",
};

const activeStyles = {
  fontWeight: 600,
  color: "#000",
};

function Header() {
  return (
    <nav
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        borderBottom: "1px black solid",
      }}
    >
      {[
        { to: "/", label: "Home" },
        { to: "/useEffect", label: "useEffect" },
        { to: "/customHook", label: "useEffect + Custom Hook" },
        { to: "/use", label: "Suspense + use" },
        { to: "/use-customHook", label: "use + Custom Hook"},
        { to: "/tanstackQuery", label: "TanStack Query" },
      ].map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          style={({ isActive }) => ({
            ...linkStyles,
            ...(isActive ? activeStyles : {}),
          })}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Header;
