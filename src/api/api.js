// Importa Express
const express = require('express');
const app = express();

// Define una ruta GET para la suma
app.get('/suma', (req, res) => {
  // Obtiene los números de los parámetros de la consulta (query)
  const { num1, num2 } = req.query;

  // Convierte los números a flotantes y calcula la suma
  const resultado = parseFloat(num1) + parseFloat(num2);

  // Verifica si los números son válidos
  if (!isNaN(resultado)) {
    // Envía el resultado
    res.status(200).send(`La suma de ${num1} y ${num2} es ${resultado}`);
  } else {
    // Envía un mensaje de error si los números no son válidos
    res.status(400).send('Por favor, asegúrate de que ambos parámetros sean números válidos.');
  }
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
