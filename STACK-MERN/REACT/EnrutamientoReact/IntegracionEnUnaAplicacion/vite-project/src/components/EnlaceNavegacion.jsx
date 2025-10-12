import { NavLink } from 'react-router-dom';

// Este componente recibe 'destino' (la URL) y 'children' (el texto del enlace)
const EnlaceNavegacion = ({ destino, children }) => {
  return (
    <li>
      <NavLink
        to={destino}
        // La prop 'className' puede ser una función para aplicar estilos condicionales
        className={({ isActive }) => (isActive ? 'enlace-activo' : 'enlace-inactivo')}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default EnlaceNavegacion;