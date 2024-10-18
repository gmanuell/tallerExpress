import "dotenv/config.js"
import '../../config/database.js'
import Empleado from '../Empleado.js'


const empleados = [
        {
          Nombre: "Carlos García",
          Cargo: "Gerente de Ventas",
          Salario: 4500
        },
        {
          Nombre: "María Rodríguez",
          Cargo: "Desarrolladora de Software",
          Salario: 3500
        },
        {
          Nombre: "Luis Fernández",
          Cargo: "Analista de Datos",
          Salario: 3200
        },
        {
          Nombre: "Ana Martínez",
          Cargo: "Diseñadora Gráfica",
          Salario: 2800
        },
        {
          Nombre: "Pedro Gómez",
          Cargo: "Especialista en Marketing",
          Salario: 3300
        },
        {
          Nombre: "Laura Sánchez",
          Cargo: "Asistente Administrativa",
          Salario: 2400
        },
        {
          Nombre: "Jorge Pérez",
          Cargo: "Técnico de Soporte",
          Salario: 2700
        },
        {
          Nombre: "Sara López",
          Cargo: "Gerente de Recursos Humanos",
          Salario: 4000
        },
        {
          Nombre: "Ricardo Torres",
          Cargo: "Ingeniero de Sistemas",
          Salario: 3800
        },
        {
          Nombre: "Verónica Ramírez",
          Cargo: "Coordinadora de Proyectos",
          Salario: 3600
        },
        {
          Nombre: "Diego Herrera",
          Cargo: "Consultor Financiero",
          Salario: 5000
        },
        {
          Nombre: "Camila Castro",
          Cargo: "Contadora",
          Salario: 3400
        },
        {
          Nombre: "Andrés Morales",
          Cargo: "Jefe de Producción",
          Salario: 4200
        },
        {
          Nombre: "Natalia Jiménez",
          Cargo: "Especialista en Logística",
          Salario: 3100
        },
        {
          Nombre: "Javier Ortega",
          Cargo: "Supervisor de Calidad",
          Salario: 2900
        }
      ];

Empleado.insertMany(empleados)