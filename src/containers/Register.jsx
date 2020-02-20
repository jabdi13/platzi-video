import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form" action="">
        <input aria-label="Nombre" className="input" type="text" placeholder="Nombre" />
        <input aria-label="Correo" className="input" type="text" placeholder="Correo" />
        <input aria-label="Contraseña" className="input" type="password" placeholder="Contraseña" />
        <button className="button">Regístrarme</button>
      </form>
      <p className="register__container--register"><Link to="/login">Iniciar sesión</Link></p>
    </section>
  </section>
);

export default Register;
