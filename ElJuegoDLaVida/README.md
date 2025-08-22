# 🕹️ Juego de la Vida de Conway - WebApp

Una simulación interactiva y responsiva del famoso autómata celular "Juego de la Vida" de John Horton Conway, creada con HTML, CSS y JavaScript puro (Vanilla JS).

Esta aplicación está diseñada con un enfoque **Mobile-First**, garantizando una experiencia de usuario fluida tanto en dispositivos móviles como en navegadores de escritorio.

-----

## 📜 Sobre el Juego de la Vida

El "Juego de la Vida" no es un juego en el sentido tradicional. Es un **autómata celular** de cero jugadores, lo que significa que su evolución está determinada por su estado inicial, sin requerir intervención adicional. La simulación se desarrolla en una cuadrícula bidimensional donde cada celda puede estar "viva" o "muerta", y su estado en la siguiente generación se basa en 4 simples reglas aplicadas a sus 8 celdas vecinas.

### Las Reglas

1.  **Muerte por Soledad:** Una célula viva con **menos de dos** vecinas vivas, muere.
2.  **Muerte por Sobrepoblación:** Una célula viva con **más de tres** vecinas vivas, muere.
3.  **Supervivencia:** Una célula viva con **dos o tres** vecinas vivas, sobrevive a la siguiente generación.
4.  **Nacimiento:** Una célula muerta con **exactamente tres** vecinas vivas, nace.

A pesar de la simplicidad de estas reglas, el sistema puede evolucionar y crear patrones complejos y fascinantes que parecen casi orgánicos.

-----

## ✨ Características Principales

  * **Diseño Responsivo (Mobile-First):** La interfaz y la cuadrícula se adaptan perfectamente a cualquier tamaño de pantalla.
  * **Cuadrícula Dinámica:** El tablero calcula automáticamente el mayor número de celdas posibles sin desbordar la pantalla ni requerir zoom.
  * **Controles Intuitivos:**
      * **Iniciar:** Comienza la simulación.
      * **Pausa:** Detiene la simulación en su estado actual.
      * **Limpiar:** Borra el tablero y reinicia el contador de generaciones.
  * **Temporizador Opcional:** Configura un tiempo (en segundos) para que la simulación se detenga automáticamente. Si se deja en blanco, se ejecutará de forma indefinida.
  * **Control de Velocidad:** Ajusta la velocidad de las generaciones (en milisegundos).
  * **Creación Manual:** "Dibuja" el estado inicial de las células directamente sobre la cuadrícula antes de iniciar.
  * **Contador de Generaciones:** Visualiza cuántos ciclos ha completado la simulación.
  * **Sin Dependencias:** Creado únicamente con HTML5, CSS3 y JavaScript (ES6). No requiere librerías ni frameworks.

-----

## 💻 Tecnologías Utilizadas

  * **HTML5:** Para la estructura semántica del contenido.
  * **CSS3:** Para los estilos, el diseño responsivo (usando Flexbox y Grid Layout) y las animaciones.
  * **JavaScript (Vanilla JS - ES6):** Para toda la lógica de la simulación, la manipulación del DOM y la interactividad del usuario.

-----

## 🚀 Uso de la Aplicación

1.  **Dibujar el Patrón Inicial:** Antes de empezar, haz clic o toca las celdas en la cuadrícula para revivirlas o matarlas. ¡Crea la forma que desees\!
2.  **Configurar Opciones (Opcional):**
      * **Temporizador:** Introduce un número en el campo "Detener tras (segundos)" si quieres que la simulación se detenga sola.
      * **Velocidad:** Cambia el valor en "Velocidad (ms)" para acelerar o ralentizar la simulación (un valor más bajo es más rápido).
3.  **Iniciar la Simulación:** Pulsa el botón **Iniciar**. Verás cómo las células evolucionan según las reglas.
4.  **Controlar la Simulación:**
      * Usa **Pausa** para detener la evolución y analizar el patrón actual.
      * Usa **Limpiar** para detener todo y empezar de nuevo con un lienzo en blanco.
5.  **Consultar las Reglas:** Si olvidas cómo funciona, haz clic en el botón "Mostrar Reglas" en la parte inferior.

-----

## 🛠️ Instalación y Uso Local

Si deseas ejecutar este proyecto en tu propia máquina, sigue estos sencillos pasos:

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2.  **Navega a la carpeta del proyecto:**

    ```bash
    cd tu-repositorio
    ```

3.  **Abre el archivo `index.html`:**
    Simplemente abre el archivo `index.html` en tu navegador web preferido (Google Chrome, Firefox, etc.). ¡No se necesita un servidor local\!

-----

## 📂 Estructura del Código

El proyecto está organizado en tres archivos principales para mantener una clara separación de responsabilidades:

  * `📄 index.html`: Contiene la estructura principal de la página, incluyendo los elementos para los controles, la cuadrícula y la sección de reglas.
  * `🎨 style.css`: Define toda la apariencia visual de la aplicación. Utiliza variables CSS para un fácil mantenimiento de la paleta de colores y un diseño responsivo basado en *media queries*.
  * `🧠 script.js`: El cerebro de la aplicación. Se encarga de:
      * Crear dinámicamente la cuadrícula.
      * Implementar la lógica y las reglas del Juego de la Vida.
      * Gestionar todos los eventos del usuario (clics en botones, dibujo en la cuadrícula).
      * Actualizar la interfaz en cada generación.

-----

## 📜 Licencia

Este proyecto se distribuye bajo la **Licencia MIT**. Siéntete libre de usarlo, modificarlo, distribuirlo y contribuir a él.

-----

*Creado con ❤️*