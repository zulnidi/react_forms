import React, { useState } from 'react';

// Estado inicial de los campos del formulario
const initialFormState = {
  nombre: '',
  apellido: '',
  correo: '',
  contrasena: '',
  confirmarContrasena: '',
};

// Función de validación central (pura)
const validate = (formData) => {
  let errors = {};

  Object.keys(formData).forEach((name) => {
    const value = formData[name];

    if (value.trim() === '') {
      errors[name] = 'Este campo es obligatorio.';
      return;
    }

    switch (name) {
      case 'nombre':
      case 'apellido':
        if (value.length < 4) {
          errors[name] = 'El campo debe tener al menos 4 caracteres. ¡Un nombre corto no es digno!';
        }
        break;
      case 'correo':
        if (value.length < 10 || !/\S+@\S+\.\S+/.test(value)) {
          errors[name] = 'El correo es muy corto o el formato es inválido. Incluye el @ y un dominio digno.';
        }
        break;
      case 'contrasena':
        if (value.length < 12) {
          errors[name] = 'La contraseña debe tener al menos 12 caracteres ultra secretos.';
        }
        break;
      case 'confirmarContrasena':
        if (value !== formData.contrasena) {
          errors[name] = 'Las contraseñas no coinciden.';
        }
        break;
      default:
        break;
    }
  });

  return errors;
};

// 🔹 Componente separado para los inputs
const InputField = ({ label, name, type = 'text', value, error, onChange, onBlur }) => {
  return (
    <div className="form-group">
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={error ? 'input-error' : ''}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

function SuperheroForm({ onAddSuperhero }) {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (isSubmitted) {
      const newFormData = { ...formData, [name]: value };
      setErrors(validate(newFormData));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const allErrors = validate(formData);

    if (formData[name].trim() !== '') {
      setErrors((prev) => ({ ...prev, [name]: allErrors[name] }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: allErrors[name] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const allErrors = validate(formData);
    setErrors(allErrors);

    const hasErrors = Object.values(allErrors).some((error) => error !== '');

    if (!hasErrors) {
      onAddSuperhero(formData);
      setFormData(initialFormState);
      setErrors({});
      setIsSubmitted(false);
    } else {
      alert('Por favor, corrige los errores del formulario y completa todos los campos.');
    }
  };

  return (
    <form className="superhero-form" onSubmit={handleSubmit}>
      <h2>Registro de Superhéroes</h2>

      <InputField
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        error={errors.nombre}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <InputField
        label="Apellido"
        name="apellido"
        value={formData.apellido}
        error={errors.apellido}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <InputField
        label="Correo Electrónico"
        name="correo"
        type="email"
        value={formData.correo}
        error={errors.correo}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <InputField
        label="Contraseña"
        name="contrasena"
        type="password"
        value={formData.contrasena}
        error={errors.contrasena}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <InputField
        label="Confirmar Contraseña"
        name="confirmarContrasena"
        type="password"
        value={formData.confirmarContrasena}
        error={errors.confirmarContrasena}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <button type="submit" className="create-superhero-btn">
        Crear Superhéroe
      </button>
    </form>
  );
}

export default SuperheroForm;
