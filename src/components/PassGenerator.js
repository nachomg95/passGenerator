import React, { useState } from 'react';

function PassGenerator() {
  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState(8);

  const generatePassword = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let newPassword = '';

    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  return (
    <div className='container'>
      <h1 className='title'>Generador de contraseñas aleatorias y seguras</h1>
      <input
        className='passLength'
        type='range'
        value={passLength}
        onChange={(e) => setPassLength(parseInt(e.target.value))}
        min='1'
        max='50'
      ></input>
      <p className='passLengthValue'>Longitud de la contraseña: {passLength} caracteres</p>
      <h3>Contraseña generada:</h3>
      <p className='pass'>{password}</p>
      <button onClick={generatePassword}>Generar contraseña</button>
    </div>
  );
}

export default PassGenerator;
