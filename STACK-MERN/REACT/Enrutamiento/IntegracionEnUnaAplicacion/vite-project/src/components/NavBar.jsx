// src/components/Navbar.jsx
import EnlaceNavegacion from './EnlaceNavegacion';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem' }}>
        <EnlaceNavegacion destino="/">Inicio</EnlaceNavegacion>
        <EnlaceNavegacion destino="/acerca">Acerca</EnlaceNavegacion>
        <EnlaceNavegacion destino="/contacto">Contacto</EnlaceNavegacion>
      </ul>
    </nav>
  );
};

export default Navbar;