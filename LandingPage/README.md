# Landing Page de Alberto Martínez

Este proyecto es una landing page desarrollada para presentar un perfil profesional de manera interactiva y atractiva. La página está optimizada para cargar de forma dinámica los datos del perfil y enlaces, mejorando la experiencia del usuario con tiempos de carga reducidos y una interfaz limpia y moderna.

## Tecnologías Utilizadas

- **HTML5 y CSS3**: Estructura básica de la página y estilos visuales.
- **Bootstrap 5**: Framework CSS utilizado para mejorar la presentación visual y asegurar que la página sea responsive.
- **JavaScript (ES6)**: Manejo de la lógica del cliente, carga de datos y manipulación del DOM de manera dinámica.
- **XMLHttpRequest**: Para la carga asíncrona de datos JSON que permite actualizar el contenido sin necesidad de recargar la página.

## Estructura del Proyecto

1. **`index.html`**: Documento HTML principal que define la estructura de la página. Incluye enlaces a las hojas de estilo y al script JavaScript responsable de la lógica de la página.
   
   - Usa **Bootstrap** para una disposición responsiva y **Google Fonts** para tipografías personalizadas que mejoran la legibilidad y estética general.
   - Contiene una estructura básica con un contenedor y un pie de página que se completan dinámicamente mediante JavaScript.

2. **`script.js`**: Script encargado de la lógica principal del sitio.
   
   - **Clases y métodos**: La clase `Perfil` maneja la carga de datos mediante AJAX (XMLHttpRequest) y la inserción de los mismos en el DOM.
   - **Carga Asíncrona de Datos**: Utiliza `XMLHttpRequest` para obtener la información desde un archivo JSON externo, lo cual permite que el contenido se actualice de forma rápida sin recargar la página.
   - **Manipulación del DOM**: Inserta los datos en elementos HTML mediante `innerHTML`, mostrando información como nombre, biografía, enlaces de redes sociales y datos de contacto.

## Ventajas del Desarrollo

1. **Carga Asíncrona**: Permite que la página cargue rápidamente y solo actualice el contenido necesario, mejorando la experiencia del usuario.
2. **Responsividad**: Gracias a Bootstrap, la página se adapta a dispositivos de diferentes tamaños sin necesidad de ajustes adicionales.
3. **Modularidad y Mantenibilidad**: El uso de clases y métodos en JavaScript facilita la expansión futura del proyecto.
4. **Seguridad**: Los enlaces externos se abren en nuevas pestañas y utilizan `rel="noopener noreferrer"` para prevenir ataques de tipo phishing.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/landing-page-alberto.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd landing-page-alberto
   ```
3. Abre `index.html` en tu navegador preferido para ver la página en funcionamiento.


## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

