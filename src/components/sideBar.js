import { Link } from "gatsby";
import React from "react"
import { slide as Menu } from "react-burger-menu"

export default props => {
  return (
    <Menu {...props}>
      <Link className="menu-item" to="/">
        Inicio
      </Link>

      <Link className="menu-item" to="/">
        Marcas
      </Link>

      <Link className="menu-item" to="/">
        Proyectos
      </Link>

      <Link className="menu-item" to="/">
        Contactanos
      </Link>
    </Menu>
  );
};