import React, { useState } from 'react';

const Formulario = () => {
  // Estado para los valores del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: ''
  });

  // Estado para el mensaje de confirmación
  const [confirmacion, setConfirmacion] = useState('');


  
  // Manejador de cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías realizar alguna acción con los datos, como enviarlos a un servidor

    // Simulación de confirmación
    setTimeout(() => {
      setConfirmacion('Formulario enviado con éxito');
      // Reiniciar los valores del formulario
      setFormData({
        nombre: '',
        email: ''
      });
    }, 1000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {confirmacion && <p>{confirmacion}</p>}
    </div>
  );
};

export default Formulario;
