import "dotenv/config.js"
import '../../config/database.js'
import Producto from '../Producto.js'


const productos = [
    {
      Nombre: "Laptop Pro",
      Marca: "TechBrand",
      Tipo: "Electrónica",
      Precio: 1500
    },
    {
      Nombre: "Smartphone X",
      Marca: "PhoneCorp",
      Tipo: "Teléfono",
      Precio: 899
    },
    {
      Nombre: "Auriculares Inalámbricos",
      Marca: "SoundX",
      Tipo: "Accesorios",
      Precio: 120
    },
    {
      Nombre: "Smartwatch Sport",
      Marca: "WristTech",
      Tipo: "Wearable",
      Precio: 250
    },
    {
      Nombre: "Cámara Profesional",
      Marca: "PhotoMax",
      Tipo: "Cámaras",
      Precio: 1300
    },
    {
      Nombre: "Tablet Air",
      Marca: "TabTech",
      Tipo: "Tabletas",
      Precio: 650
    },
    {
      Nombre: "Monitor 4K",
      Marca: "ViewMaster",
      Tipo: "Monitores",
      Precio: 400
    },
    {
      Nombre: "Teclado Mecánico",
      Marca: "Keytron",
      Tipo: "Accesorios",
      Precio: 100
    },
    {
      Nombre: "Ratón Inalámbrico",
      Marca: "MousePro",
      Tipo: "Accesorios",
      Precio: 50
    },
    {
      Nombre: "Impresora Láser",
      Marca: "PrintFast",
      Tipo: "Impresoras",
      Precio: 300
    },
    {
      Nombre: "Consola de Videojuegos",
      Marca: "GameBox",
      Tipo: "Consolas",
      Precio: 500
    },
    {
      Nombre: "Televisor LED 55 pulgadas",
      Marca: "VisionMax",
      Tipo: "Electrónica",
      Precio: 700
    },
    {
      Nombre: "Microondas Digital",
      Marca: "HomeCook",
      Tipo: "Electrodomésticos",
      Precio: 150
    },
    {
      Nombre: "Frigorífico",
      Marca: "CoolMaster",
      Tipo: "Electrodomésticos",
      Precio: 1200
    },
    {
      Nombre: "Lavadora Inteligente",
      Marca: "WashTech",
      Tipo: "Electrodomésticos",
      Precio: 900
    },
    {
      Nombre: "Horno Eléctrico",
      Marca: "BakePro",
      Tipo: "Electrodomésticos",
      Precio: 350
    },
    {
      Nombre: "Aspiradora Robot",
      Marca: "CleanBot",
      Tipo: "Electrodomésticos",
      Precio: 500
    },
    {
      Nombre: "Ventilador Silencioso",
      Marca: "CoolAir",
      Tipo: "Climatización",
      Precio: 80
    },
    {
      Nombre: "Cafetera Automática",
      Marca: "CoffeeMaker",
      Tipo: "Electrodomésticos",
      Precio: 200
    },
    {
      Nombre: "Parrilla Eléctrica",
      Marca: "GrillMaster",
      Tipo: "Electrodomésticos",
      Precio: 100
    },
    {
      Nombre: "Silla Gamer",
      Marca: "ComfortSeat",
      Tipo: "Mobiliario",
      Precio: 300
    },
    {
      Nombre: "Escritorio Ergonómico",
      Marca: "WorkStation",
      Tipo: "Mobiliario",
      Precio: 400
    },
    {
      Nombre: "Lámpara LED de Escritorio",
      Marca: "BrightLight",
      Tipo: "Accesorios",
      Precio: 45
    },
    {
      Nombre: "Estantería Moderna",
      Marca: "HomeStyle",
      Tipo: "Mobiliario",
      Precio: 150
    },
    {
      Nombre: "Reloj de Pared",
      Marca: "TimeKeeper",
      Tipo: "Decoración",
      Precio: 60
    },
    {
      Nombre: "Colchón Ortopédico",
      Marca: "SleepWell",
      Tipo: "Mobiliario",
      Precio: 800
    },
    {
      Nombre: "Sofá Reclinable",
      Marca: "ComfortPlus",
      Tipo: "Mobiliario",
      Precio: 1200
    },
    {
      Nombre: "Mesa de Centro",
      Marca: "ModernHome",
      Tipo: "Mobiliario",
      Precio: 200
    },
    {
      Nombre: "Aire Acondicionado Split",
      Marca: "CoolBreeze",
      Tipo: "Climatización",
      Precio: 1500
    },
    {
      Nombre: "Purificador de Aire",
      Marca: "AirPure",
      Tipo: "Climatización",
      Precio: 250
    },
    {
      Nombre: "Secadora de Ropa",
      Marca: "DryFast",
      Tipo: "Electrodomésticos",
      Precio: 700
    },
    {
      Nombre: "Bicicleta Eléctrica",
      Marca: "EcoRide",
      Tipo: "Deportes",
      Precio: 1200
    },
    {
      Nombre: "Pesas Ajustables",
      Marca: "FitPro",
      Tipo: "Deportes",
      Precio: 150
    },
    {
      Nombre: "Cinta de Correr",
      Marca: "RunMaster",
      Tipo: "Deportes",
      Precio: 800
    },
    {
      Nombre: "Reloj Deportivo",
      Marca: "TrackFit",
      Tipo: "Wearable",
      Precio: 250
    },
    {
      Nombre: "Gafas de Sol Polarizadas",
      Marca: "SunGuard",
      Tipo: "Accesorios",
      Precio: 80
    },
    {
      Nombre: "Chaqueta Impermeable",
      Marca: "RainShield",
      Tipo: "Ropa",
      Precio: 120
    },
    {
      Nombre: "Zapatillas de Running",
      Marca: "SpeedX",
      Tipo: "Ropa",
      Precio: 150
    },
    {
      Nombre: "Bolsa de Viaje",
      Marca: "TravelPro",
      Tipo: "Accesorios",
      Precio: 100
    },
    {
      Nombre: "Maleta con Ruedas",
      Marca: "CarryOn",
      Tipo: "Accesorios",
      Precio: 200
    },
    {
      Nombre: "Tetera Eléctrica",
      Marca: "TeaTime",
      Tipo: "Electrodomésticos",
      Precio: 80
    },
    {
      Nombre: "Mochila Escolar",
      Marca: "BackPackPro",
      Tipo: "Accesorios",
      Precio: 60
    },
    {
      Nombre: "Libro de Cuentos",
      Marca: "StoryWorld",
      Tipo: "Libros",
      Precio: 25
    },
    {
      Nombre: "Enciclopedia",
      Marca: "KnowledgeBase",
      Tipo: "Libros",
      Precio: 100
    },
    {
      Nombre: "Juguete Educativo",
      Marca: "SmartToy",
      Tipo: "Juguetes",
      Precio: 50
    },
    {
      Nombre: "Muñeca de Trapo",
      Marca: "DollHouse",
      Tipo: "Juguetes",
      Precio: 30
    },
    {
      Nombre: "Set de Bloques de Construcción",
      Marca: "BuildMaster",
      Tipo: "Juguetes",
      Precio: 80
    },
    {
      Nombre: "Drone con Cámara",
      Marca: "FlyCam",
      Tipo: "Electrónica",
      Precio: 400
    },
    {
      Nombre: "Set de Jardinería",
      Marca: "GreenThumb",
      Tipo: "Hogar",
      Precio: 70
    },
    {
        Nombre: "Freidora de Aire",
        Marca: "AirFry",
        Tipo: "Electrodomésticos",
        Precio: 180
      },
      {
        Nombre: "Licuadora de Alta Velocidad",
        Marca: "BlendMax",
        Tipo: "Electrodomésticos",
        Precio: 120
      },
      {
        Nombre: "Batidora de Mano",
        Marca: "MixPro",
        Tipo: "Electrodomésticos",
        Precio: 70
      },
      {
        Nombre: "Robot de Cocina",
        Marca: "CookMaster",
        Tipo: "Electrodomésticos",
        Precio: 350
      },
      {
        Nombre: "Cámara de Seguridad",
        Marca: "SecureView",
        Tipo: "Electrónica",
        Precio: 200
      },
      {
        Nombre: "Smart Lock",
        Marca: "LockSafe",
        Tipo: "Electrónica",
        Precio: 250
      },
      {
        Nombre: "Tostadora",
        Marca: "ToastPro",
        Tipo: "Electrodomésticos",
        Precio: 45
      },
      {
        Nombre: "Plancha de Vapor",
        Marca: "SteamPower",
        Tipo: "Electrodomésticos",
        Precio: 60
      },
      {
        Nombre: "Calefactor Eléctrico",
        Marca: "WarmHome",
        Tipo: "Climatización",
        Precio: 90
      },
      {
        Nombre: "Refrigerador Mini",
        Marca: "CoolMini",
        Tipo: "Electrodomésticos",
        Precio: 300
      },
      {
        Nombre: "Termo de Acero Inoxidable",
        Marca: "ThermoKing",
        Tipo: "Accesorios",
        Precio: 25
      },
      {
        Nombre: "Sartén Antiadherente",
        Marca: "CookIt",
        Tipo: "Cocina",
        Precio: 40
      },
      {
        Nombre: "Juego de Ollas",
        Marca: "ChefMaster",
        Tipo: "Cocina",
        Precio: 150
      },
      {
        Nombre: "Deshumidificador",
        Marca: "DryAir",
        Tipo: "Climatización",
        Precio: 220
      },
      {
        Nombre: "Cargador Inalámbrico",
        Marca: "PowerBoost",
        Tipo: "Accesorios",
        Precio: 50
      },
      {
        Nombre: "Tarjeta de Memoria 128GB",
        Marca: "DataStore",
        Tipo: "Electrónica",
        Precio: 35
      },
      {
        Nombre: "Disco Duro Externo 1TB",
        Marca: "StorageMax",
        Tipo: "Electrónica",
        Precio: 80
      },
      {
        Nombre: "Power Bank",
        Marca: "ChargePro",
        Tipo: "Accesorios",
        Precio: 40
      },
      {
        Nombre: "Silla de Oficina",
        Marca: "WorkComfort",
        Tipo: "Mobiliario",
        Precio: 250
      },
      {
        Nombre: "Colgador de Pared",
        Marca: "HomeFix",
        Tipo: "Decoración",
        Precio: 30
      },
      {
        Nombre: "Organizador de Escritorio",
        Marca: "DeskTidy",
        Tipo: "Accesorios",
        Precio: 25
      },
      {
        Nombre: "Toalla de Microfibra",
        Marca: "SoftTouch",
        Tipo: "Hogar",
        Precio: 15
      },
      {
        Nombre: "Tendedero Plegable",
        Marca: "DryFold",
        Tipo: "Hogar",
        Precio: 50
      },
      {
        Nombre: "Cortina de Baño",
        Marca: "ShowerGuard",
        Tipo: "Hogar",
        Precio: 35
      },
      {
        Nombre: "Cubo de Basura con Sensor",
        Marca: "CleanTech",
        Tipo: "Hogar",
        Precio: 120
      },
      {
        Nombre: "Humidificador Ultrasónico",
        Marca: "MistMaker",
        Tipo: "Climatización",
        Precio: 60
      },
      {
        Nombre: "Extractor de Jugos",
        Marca: "JuicePro",
        Tipo: "Electrodomésticos",
        Precio: 180
      },
      {
        Nombre: "Televisor OLED 65 pulgadas",
        Marca: "UltraVision",
        Tipo: "Electrónica",
        Precio: 2500
      },
      {
        Nombre: "Mando de Videojuegos Inalámbrico",
        Marca: "GameMaster",
        Tipo: "Accesorios",
        Precio: 80
      },
      {
        Nombre: "Set de Brochas de Maquillaje",
        Marca: "BeautyBrush",
        Tipo: "Accesorios",
        Precio: 45
      },
      {
        Nombre: "Plancha de Pelo",
        Marca: "StylePro",
        Tipo: "Electrónica",
        Precio: 90
      },
      {
        Nombre: "Cinta Métrica Digital",
        Marca: "MeasureTech",
        Tipo: "Herramientas",
        Precio: 55
      },
      {
        Nombre: "Taladro Inalámbrico",
        Marca: "DrillPro",
        Tipo: "Herramientas",
        Precio: 130
      },
      {
        Nombre: "Sierra Circular",
        Marca: "CutMaster",
        Tipo: "Herramientas",
        Precio: 200
      },
      {
        Nombre: "Linterna Recargable",
        Marca: "BrightBeam",
        Tipo: "Accesorios",
        Precio: 40
      },
      {
        Nombre: "Almohada Ortopédica",
        Marca: "SleepGuard",
        Tipo: "Hogar",
        Precio: 70
      },
      {
        Nombre: "Rizador de Pelo Automático",
        Marca: "CurlMagic",
        Tipo: "Electrodomésticos",
        Precio: 110
      },
      {
        Nombre: "Máquina de Coser Portátil",
        Marca: "SewPro",
        Tipo: "Electrodomésticos",
        Precio: 220
      },
      {
        Nombre: "Set de Brochas de Pintura",
        Marca: "ArtMaster",
        Tipo: "Arte",
        Precio: 50
      },
      {
        Nombre: "Juego de Sábanas",
        Marca: "ComfortSleep",
        Tipo: "Hogar",
        Precio: 100
      },
      {
        Nombre: "Ventilador de Techo",
        Marca: "BreezePro",
        Tipo: "Climatización",
        Precio: 300
      },
      {
        Nombre: "Parlante Bluetooth",
        Marca: "SoundBlast",
        Tipo: "Electrónica",
        Precio: 120
      },
      {
        Nombre: "Batería Externa Solar",
        Marca: "SunCharge",
        Tipo: "Accesorios",
        Precio: 60
      },
      {
        Nombre: "Termostato Inteligente",
        Marca: "HeatControl",
        Tipo: "Climatización",
        Precio: 180
      },
      {
        Nombre: "Kit de Destornilladores",
        Marca: "ToolPro",
        Tipo: "Herramientas",
        Precio: 25
      },
      {
        Nombre: "Cámara Web HD",
        Marca: "ClearCam",
        Tipo: "Electrónica",
        Precio: 90
      },
      {
        Nombre: "Purificador de Agua",
        Marca: "WaterPure",
        Tipo: "Electrodomésticos",
        Precio: 350
      },
      {
        Nombre: "Cerradura Inteligente",
        Marca: "SafeLock",
        Tipo: "Seguridad",
        Precio: 400
      },
      {
        Nombre: "Tendedero Eléctrico",
        Marca: "DryTech",
        Tipo: "Hogar",
        Precio: 150
      },
    {
      Nombre: "Espejo Decorativo",
      Marca: "ReflectStyle",
      Tipo: "Decoración",
      Precio: 100
    }
  ];

Producto.insertMany(productos)