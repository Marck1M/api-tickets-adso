const getAllTickets = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: 2,
    data: {
      tickets: [
        { id: 1, title: "Fallo en pantalla de inicio", description: "El usuario no puede ingresar con sus credenciales", priority: "alta" },
        { id: 2, title: "Error de conexión BD", description: "Timeout en la pasarela de pagos", priority: "media" }
      ]
    }
  });
};

const getTicketById = (req, res) => {
  const { id } = req.params;

  if (id === '999') {
    return res.status(404).json({
      status: 'fail',
      message: 'Ticket no encontrado'
    });
  }
res.status(200).json({
    status: 'success',
    data: {
      ticket: { id: Number(id), title: "Fallo en pantalla de inicio", description: "El usuario no puede ingresar", priority: "alta" }
    }
  });
};

const createTicket = (req, res) => {
  const { title, description, priority } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      status: 'fail',
      message: 'Faltan campos obligatorios (title o description)'
    });
  }

  res.status(201).json({
    status: 'success',
    message: 'Ticket creado exitosamente',
    data: {
      ticket: { id: 3, title, description, priority: priority || "baja" }
    }
  });
};

module.exports = {
  getAllTickets,
  getTicketById,
  createTicket
};
