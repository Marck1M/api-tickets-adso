const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());

// Montar rutas de la API
const ticketRoutes = require('./routes/ticket.routes');
app.use('/api', ticketRoutes);

// Ruta base de comprobación
app.get('/', (req, res) => {
  res.json({ message: 'API REST de Tickets ADSO ejecutándose correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
