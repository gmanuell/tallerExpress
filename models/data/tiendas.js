import "dotenv/config.js"
import '../../config/database.js'
import Tienda from '../Tienda.js'



const tiendas = [
    {
      Nombre: "Tienda Uno",
      Direccion: "Calle Principal 123",
      Telefono: 1234567890
    },
    {
      Nombre: "Tienda Dos",
      Direccion: "Avenida Central 456",
      Telefono: 9876543210
    },
    {
      Nombre: "Tienda Tres",
      Direccion: "Calle Secundaria 789",
      Telefono: 1122334455
    },
    {
      Nombre: "Tienda Cuatro",
      Direccion: "Boulevard Norte 101",
      Telefono: 9988776655
    },
    {
      Nombre: "Tienda Cinco",
      Direccion: "Avenida Sur 202",
      Telefono: 6677889900
    }
  ];

Tienda.insertMany(tiendas)