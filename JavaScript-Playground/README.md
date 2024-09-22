# JavaScript Playground

JavaScript Playground es una aplicación web que permite a los usuarios escribir, ejecutar y guardar código JavaScript en un entorno interactivo, similar a un editor de código en línea. 

## Requisitos

- **Node.js** (opcional, para servir de manera local con un servidor HTTP)
- **Git** (opcional, para clonar el repositorio)
- **Un servidor web** (como Apache, Nginx, o cualquier otro servidor web capaz de servir archivos estáticos)

## Instalación

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/javascript-playground.git
cd javascript-playground
```

### Estructura de Archivos y Versiones

El proyecto incluye los siguientes archivos y versiones:

1. `index.html`
2. `styles.css?v1.9.5`
3. `js/index.js?v1.9.5`
4. `js/editor.js?v1.9.3`
5. `js/consoleManager.js?v1.9.3`
6. `js/fileManager.js?v1.9.3`
7. `js/monacoEditor.js?v1.9.3`
8. `js/enums/indexEnum.js`
9. `js/enums/editorEnum.js`
10. `js/enums/consoleManagerEnum.js`

## Ejecución Local

Para ejecutar el proyecto localmente sin servidor, puedes abrir `index.html` directamente en tu navegador web. Sin embargo, para una experiencia óptima y evitar posibles problemas de carga de archivos locales, es recomendable usar un servidor HTTP.

### Ejecutar con un Servidor HTTP Simple (Usando Node.js)

1. **Instalar `http-server` (si no lo tienes instalado):**

   ```bash
   npm install -g http-server
   ```

2. **Iniciar el servidor:**

   ```bash
   http-server
   ```

3. **Acceder a la aplicación:**

   Abre tu navegador y ve a la URL indicada (por defecto, `http://127.0.0.1:8080`).

## Despliegue en un Servidor

Para desplegar la aplicación en un servidor web (como Apache o Nginx):

1. **Sube todos los archivos del proyecto al directorio del servidor web.**

2. **Configura el servidor para servir `index.html` como la página de inicio.** 

   Asegúrate de que el servidor esté configurado correctamente para manejar archivos estáticos y que sirva los scripts JavaScript y los archivos CSS.

## Personalización y Desarrollo

Puedes modificar los archivos en la carpeta `js` y `styles.css` para personalizar la apariencia y el comportamiento de la aplicación según tus necesidades. Asegúrate de ajustar las versiones en los enlaces de los archivos si realizas cambios significativos.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
