🍕 Pizzería MammaMia - Desafío 1

Desafío Latam - Curso Fullstack JavaScript G92

Módulo 4 - React

⸻

🚀 Descripción del Proyecto

Este desafío consiste en el desarrollo de una aplicación web para una pizzería, implementada con React y Bootstrap, siguiendo la metodología de componentes reutilizables y aplicando conceptos de modularidad.

El proyecto incluye funcionalidades como registro, login, carrito de compras, consumo de API, manejo de estados globales con Context, rutas protegidas y navegación dinámica con React Router.

⸻

✅ Logros e Hitos Alcanzados

🔹 Hito 1
	•	Estructura inicial del desafío.
	•	Creación del componente Navbar con menú dinámico según estado de token.
	•	Creación de componentes: Header, Home, CardPizza, Footer.
	•	Renderización de 3 tarjetas de pizzas en Home.

🔹 Hito 2
	•	Creación de componentes Login y Register con formularios, validaciones y alertas.

🔹 Hito 3
	•	Importación de pizza.js para renderizar dinámicamente las pizzas en Home.
	•	Creación del componente Cart con renderización dinámica de pizzas y funcionalidades para aumentar/disminuir cantidad, calcular total y eliminar ítems.

🔹 Hito 4
	•	Consumo de API de pizzas con useEffect.
	•	Creación del componente Pizza para mostrar detalles de una pizza (imagen, precio, ingredientes, descripción).
	•	Botón Agregar a Carrito implementado.

🔹 Hito 5
	•	Instalación y configuración de React Router Dom.
	•	Creación de rutas principales: /, /register, /login, /cart, /pizza/:id, /profile, /404.
	•	Implementación de NotFound y Profile.
	•	Navbar con enlaces a todas las rutas y botón de carrito.

🔹 Hito 6
	•	Implementación de CartContext para manejar el carrito de compras.
	•	Consumo de Context en Navbar, Home y Cart para sincronizar el total y los productos.
	•	Centralización del consumo de pizzas mediante Context.

🔹 Hito 7
	•	Implementación de useParams para obtener el id de pizzas en la vista de detalle.
	•	Creación de UserContext con token simulado (login/logout).
	•	Manejo de sesión en Navbar, Cart y rutas protegidas.
	•	Redirección según estado del token (protección de /profile y restricciones en /login y /register).

⸻

🛠 Tecnologías Utilizadas
	•	React.js
	•	React Router DOM
	•	Bootstrap
	•	Context API
	•	JavaScript (ES6+)

⸻

📌 Instrucciones de Uso
	1.	Clonar el repositorio:
git clone <URL_REPOSITORIO>
	2.	Instalar dependencias:
npm install
	3.	Ejecutar el proyecto:
npm run dev
	4.	Abrir en navegador:
http://localhost:5173

⸻

👩‍💻 Autora

Proyecto desarrollado por:
Celeste Nicole Lluen Delgado 🌸