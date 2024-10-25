import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/virtual-dom">Virtual Dom</NavLink>
        </li>
        <li>
          <NavLink to="/todo-app">ToDo App</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;