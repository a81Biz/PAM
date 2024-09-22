# PAM - Proyecto Aplicación Modular

PAM es una aplicación modular desarrollada en React que centraliza diferentes contenidos y funcionalidades de otros repositorios en una plataforma unificada. Este proyecto está diseñado para integrarse y desplegarse en GitHub Pages, permitiendo una administración eficiente y accesible de las rutas y recursos.

## Descripción

El proyecto utiliza React para crear una interfaz moderna y dinámica, integrando contenido de diferentes repositorios para mejorar la modularidad y reutilización de los componentes. La estructura del proyecto permite mostrar y acceder a contenidos específicos desde rutas amigables y configuradas para un acceso intuitivo.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router Dom**: Utilizado para el manejo de rutas dentro de la aplicación, configurado con `HashRouter` para evitar errores 404 en GitHub Pages.
- **GitHub Pages**: Plataforma utilizada para el despliegue estático de la aplicación.
- **GitHub Actions**: Automatiza el proceso de construcción y despliegue mediante workflows personalizados.

## Configuración Crítica de `package.json`

Para el correcto funcionamiento de la aplicación, es esencial configurar correctamente el `homepage` en `package.json` y asegurarse de incluir `react-router-dom` como una dependencia. Aquí se muestra un ejemplo de la configuración crítica:

```json
{
  "name": "pam",
  "version": "1.0.0",
  "homepage": "https://tuusuario.github.io/tu-repositorio", // Cambia por la URL de tu GitHub Pages
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.0.0" // Dependencia crítica para el manejo de rutas
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

### Dependencias Críticas:

- **`react-router-dom`**: Configurado con `HashRouter` para manejar correctamente las rutas sin causar errores 404 en GitHub Pages.
- **GitHub Actions**: Configurado para instalar y utilizar las dependencias correctamente durante el proceso de despliegue.

## Pasos de Configuración

1. **Instalar dependencias**:

   ```bash
   npm install
   ```

2. **Ejecutar la aplicación localmente**:

   ```bash
   npm start
   ```

3. **Construir para producción**:

   ```bash
   npm run build
   ```

## Despliegue

La aplicación está configurada para ser desplegada automáticamente en GitHub Pages mediante GitHub Actions. Se han configurado workflows personalizados que permiten construir y desplegar el contenido de manera eficiente.

## Consideraciones Importantes

- Se seleccionaron dos repositorios: uno principal y otro configurado para ser accesible mediante una ruta amigable.
- Se realizaron modificaciones en los YAML de los repositorios secundarios para automatizar el disparo de acciones necesarias y asegurar la publicación correcta en GitHub Pages.
- **Uso de `HashRouter`**: Es fundamental para evitar errores 404 en GitHub Pages, ya que maneja las rutas completamente del lado del cliente.

## Licencia

Este proyecto está bajo la licencia [MIT License](LICENSE).
