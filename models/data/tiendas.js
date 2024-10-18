import "dotenv/config.js"
import '../../config/database.js'
import Tienda from '../Tienda.js'



const tiendas = [
    {
      Nombre: "Tienda Uno",
      Dirección: "Calle Principal 123",
      Teléfono: 1234567890
    },
    {
      Nombre: "Tienda Dos",
      Dirección: "Avenida Central 456",
      Teléfono: 9876543210
    },
    {
      Nombre: "Tienda Tres",
      Dirección: "Calle Secundaria 789",
      Teléfono: 1122334455
    },
    {
      Nombre: "Tienda Cuatro",
      Dirección: "Boulevard Norte 101",
      Teléfono: 9988776655
    },
    {
      Nombre: "Tienda Cinco",
      Dirección: "Avenida Sur 202",
      Teléfono: 6677889900
    }
  ];

Tienda.insertMany(tiendas)