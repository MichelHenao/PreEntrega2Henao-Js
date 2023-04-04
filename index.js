console.info('Starting App');

const carreras = [
    { id: 1, nombre: "Ingeniería en Sistemas", descripcion: "Esta carrera prepara a los estudiantes para diseñar, programar y administrar sistemas de información y tecnologías de la información." },
    { id: 2, nombre: "Licenciatura en Administración", descripcion: "Esta carrera se enfoca en la administración y gestión de empresas y organizaciones, proporcionando a los estudiantes habilidades en áreas como finanzas, recursos humanos, marketing y operaciones." },
    { id: 3, nombre: "Ingeniería Civil", descripcion: "Esta carrera se enfoca en el diseño, construcción y mantenimiento de infraestructuras como edificios, puentes, carreteras y sistemas de agua y alcantarillado." },
    { id: 4, nombre: "Licenciatura en Diseño Gráfico", descripcion: "Esta carrera se enfoca en la creación y diseño de productos gráficos como logotipos, anuncios, publicaciones y sitios web." },
    { id: 5, nombre: "Licenciatura en Psicología", descripcion: "Esta carrera se enfoca en el estudio de la mente y el comportamiento humano, y proporciona a los estudiantes habilidades en áreas como la evaluación y el tratamiento de problemas emocionales y de conducta." }
  ];

const opcionesCarreras = carreras.map(carrera => `${carrera.id}. ${carrera.nombre}`).join('\n');

const opcion = parseInt(prompt(`Seleccione una carrera:\n${opcionesCarreras}`));

function buscarCarrera(opcion) {
  const carreraSeleccionada = carreras.find(carrera => carrera.id === opcion);
  if (carreraSeleccionada) {
    const opcionesLugarEstudio = ["Presencial", "Virtual"];
    const opcionLugarEstudio = parseInt(prompt(`Seleccione el lugar de estudio:\n1. Presencial\n2. Virtual`));
    switch (opcionLugarEstudio) {
      case 1:
        alert(`${carreraSeleccionada.nombre} se estudia de forma presencial.\n${carreraSeleccionada.descripcion}`);
        break;
      case 2:
        alert(`${carreraSeleccionada.nombre} se estudia de forma virtual.\n${carreraSeleccionada.descripcion}`);
        break;
      default:
        alert("Opción no válida. Seleccione de nuevo.");
        buscarCarrera(opcion);
    }
  } else {
    alert("Carrera no válida. Seleccione de nuevo.");
    buscarCarrera(parseInt(prompt(`Seleccione una carrera:\n${opcionesCarreras}`)));
  }
}

buscarCarrera(opcion);