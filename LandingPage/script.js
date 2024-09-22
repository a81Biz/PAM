class Perfil {
    constructor() {
      this.container = document.querySelector('.container');
      this.footer = document.querySelector('.footer');
    }
  
    cargarInformacion() {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const informacion = JSON.parse(xhr.responseText);
          this.mostrarInformacion(informacion);
        }
      };
  
      xhr.open('GET', 'https://raw.githubusercontent.com/a81Biz/AMSharedData/refs/heads/master/informacion.json', true);
      xhr.send();
    }
  
    mostrarInformacion(info) {
      // Mostrar información en la sección de perfil
      this.container.innerHTML = `
        <img src="${info.imagenPerfil}" alt="Fotografía de perfil de ${info.nombre}" class="perfil-img">
        <h1>${info.nombre}</h1>
        <hr>
        <p class="biografia">${info.biografia}</p>
        <br>
        <h2>Conecta Conmigo</h2>
        <hr>
        <ul id="enlaces-lista">${this.generarEnlaces(info.enlaces)}</ul>
      `;
  
      // Mostrar información en el pie de página
      this.footer.innerHTML = `
        <p class="text-center">
            ${info.residencia} | <a href="mailto:${info.correo}">${info.correo}</a>
        </p>
      `;
    }
  
    generarEnlaces(enlaces) {
      return enlaces.map(enlace => `
        <li><i class="bi ${enlace.icono}"></i>
            <a href="${enlace.url}" target="_blank" rel="noopener noreferrer">
                ${enlace.nombre}
            </a>
            - ${enlace.descripcion}
        </li>
      `).join('');
    }
  }
  
  // Crear instancia de la clase Perfil y cargar la información
  const perfil = new Perfil();
  perfil.cargarInformacion();
  