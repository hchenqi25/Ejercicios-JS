const separator = () => {
    console.log("\n\n")
}
console.log("#############EJERCICIO 6 GESTION DE PLAYLIST#############")
/*
 * 6. Gestión de una playlist de música
 */
const playlist = [
    {titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354, reproducciones: 1200},
    {titulo: "Blinding Lights", artista: "The Weeknd", duracion: 200, reproducciones: 980},
    {titulo: "Shape of You", artista: "Ed Sheeran", duracion: 234, reproducciones: 1500},
    {titulo: "Hotel California", artista: "Eagles", duracion: 391, reproducciones: 870},
    {titulo: "Levitating", artista: "Dua Lipa", duracion: 203, reproducciones: 620},
    {titulo: "Smells Like Teen", artista: "Nirvana", duracion: 301, reproducciones: 1100},
];

//    - Usa forEach para mostrar cada canción: "Queen — Bohemian Rhapsody".
playlist.forEach(p => {
    if (p.artista === "Queen") {
        console.log("Las canciones de queen son => " + p.titulo);
    }
});

//   - Usa filter para obtener las canciones con más de 1000 reproducciones.
const canciones_mas_escuchadas = playlist.filter(p => p.reproducciones > 1000)
console.log(canciones_mas_escuchadas);

//   - Usa map para crear un nuevo array con los títulos en mayúsculas
const titulo_mayusculas = playlist.map(p => p.titulo.toUpperCase());
console.log(titulo_mayusculas);
//     y las reproducciones incrementadas un 10%.
const actualizacion = playlist.map(p => Math.round(p.reproducciones * 1.10));

playlist.forEach((p, i) => {
    console.log("Titulo => " + p.titulo + " || Artista => " + p.artista + " || Duración => " + p.duracion + " || Reproducciones => " + actualizacion[i]);
});

//   - Usa reduce para calcular la duración total de la playlist en segundos.
const duracionTotal = playlist.reduce((acumulador, cancion) => {
    return acumulador + cancion.duracion;
}, 0);

console.log(duracionTotal);
//   - Usa find para encontrar la primera canción que dure más de 300 segundos.
const duacion_mas_300_segundos = playlist.find(p => p.duracion > 300);
console.log(duacion_mas_300_segundos);


//   - Usa some para comprobar si alguna canción supera las 1400 reproducciones.
const mayor_1400_reproducciones = playlist.some(p => p.reproducciones > 1400);
console.log(mayor_1400_reproducciones);


//   - Usa every para comprobar si todas las canciones superan las 500 reproducciones.
const superacion_500_reproducciones = playlist.every(p => p.reproducciones > 500);
console.log(superacion_500_reproducciones);


//   - Usa with para corregir las reproducciones de "Levitating" (índice 4) a 750.
const correcion_levitating = playlist.with(4, {
    ...playlist[4],
    reproducciones: 750
});

console.log(correcion_levitating);


//   - Usa reverse (sin mutar el original) para mostrar la playlist al revés.
const playslistInversa = [...playlist].reverse();
console.log("Play list inversa: ");
console.log(playslistInversa);


//   - Usa toString para obtener una cadena con todos los títulos separados por comas.
//     Pista: primero extrae los títulos con map.
const titulosCadena = playlist.map(p => p.titulo).toString();
console.log(titulosCadena);

separator()

console.log("##################EJERCICIO 7 RESTAURANTE################");
/*
 * 7. Sistema de pedidos de un restaurante
 */
const pedidos = [
    {id: 1, cliente: "Ana", plato: "Paella", precio: 14.50, listo: true},
    {id: 2, cliente: "Luis", plato: "Ensalada", precio: 8.00, listo: false},
    {id: 3, cliente: "Marta", plato: "Chuletón", precio: 22.00, listo: true},
    {id: 4, cliente: "Pedro", plato: "Gazpacho", precio: 6.50, listo: false},
    {id: 5, cliente: "Sofía", plato: "Risotto", precio: 16.00, listo: true},
    {id: 6, cliente: "Jorge", plato: "Hamburguesa", precio: 11.00, listo: false},
];

//    - Usa forEach para mostrar cada pedido: "Pedido #1 — Ana — Paella — 14.50€".
pedidos.forEach(p => {
    console.log(`Pedido #${p.id} — ${p.cliente} — ${p.plato} — ${p.precio.toFixed(2)}€`);
});
//   - Usa filter para obtener solo los pedidos que ya están listos.
const pedidos_listos = pedidos.filter(p => p.listo === true);
console.log(pedidos_listos);

//   - Usa map para añadir a cada pedido una propiedad "precioConIva" (precio * 1.21).

const pedidosConIva = pedidos.map(p => {
    return {
        id: p.id,
        cliente: p.cliente,
        plato: p.plato,
        precio: p.precio,
        listo: p.listo,
        precioConIva: Math.round(p.precio * 121) / 100
    };
});
console.log(pedidosConIva);

//   - Usa reduce para calcular la recaudación total de todos los pedidos.

const recaudacion_pedidos = pedidos.reduce((acumulador, pedidos) =>
    acumulador + pedidos.precio, 0);
console.log(recaudacion_pedidos + " Euros ");
//   - Usa find para localizar el pedido del cliente "Marta".
const buscarpedido = pedidos.find(p => p.cliente === "Marta");
console.log(buscarpedido);

//   - Usa some para comprobar si hay algún pedido que supere los 20€.
const pedido_superior_a20 = pedidos.some(p => p.precio > 20)
console.log(pedido_superior_a20);


//   - Usa every para comprobar si todos los pedidos están listos.
const todo_pedidos_listo = pedidos.every(p => p.listo === true);
console.log(todo_pedidos_listo);

//   - Usa with para marcar el pedido de Luis (índice 1) como listo: true.
const luis = pedidos.with(1, {
    ...pedidos[1],
    listo: true
});
console.log(luis);

//   - Usa reverse (sin mutar el original) para mostrar los pedidos del último al primero.

const pedidos_inversos = [...pedidos].reverse()
console.log(pedidos_inversos);

//   - Usa toString para obtener una cadena con todos los platos.
//     Pista: primero extrae los platos con map.


const pedidosCadena = pedidos.map(p => p.plato).toString();
console.log(pedidosCadena);

separator()

console.log("#########################EJERCICIO 8 VIDEOJUEGOS ############################")

/*
 * 8. Resultados de un torneo de videojuegos
 */
const jugadores = [
    {nombre: "XxGamer99", puntos: 4200, victorias: 18, derrotas: 7, pais: "España"},
    {nombre: "ProPlayer", puntos: 3800, victorias: 15, derrotas: 10, pais: "Francia"},
    {nombre: "NinjaCode", puntos: 5100, victorias: 22, derrotas: 3, pais: "España"},
    {nombre: "DarkMaster", puntos: 2900, victorias: 12, derrotas: 13, pais: "Alemania"},
    {nombre: "StarKiller", puntos: 4700, victorias: 20, derrotas: 5, pais: "España"},
    {nombre: "IronFist", puntos: 3200, victorias: 14, derrotas: 11, pais: "Italia"},
];

//    - Usa forEach para mostrar el ranking: "1. XxGamer99 — 4200 pts". Pista: forEach puede recibir el índice como segundo parámetro.
jugadores.forEach((jugador, indice) => {
    console.log(`${indice + 1}. ${jugador.nombre} — ${jugador.puntos} pts`);
});

//    - Usa filter para obtener solo los jugadores de "España".

const jugadores_espanoles = jugadores.filter(j => j.pais === "España");
console.log(jugadores_espanoles)

//   - Usa map para añadir a cada jugador una propiedad "ratio" calculada como
//      victorias / (victorias + derrotas). Redondéala con toFixed(2).
const jugadoresConRatio = jugadores.map(j => {
    const totalPartidas = j.victorias + j.derrotas;
    return {
        ...j,

        ratio: Number((j.victorias / totalPartidas).toFixed(2))
    };
});

console.log(jugadoresConRatio);

//    - Usa reduce para calcular el total de puntos del torneo.
const total_puntos_torneo = jugadores.reduce((acumulador, jugadores) =>
    acumulador + jugadores.puntos, 0);
console.log(total_puntos_torneo);

//    - Usa find para encontrar al primer jugador con más de 5000 puntos.
const jugador_mas_5000_puntos = jugadores.find(j => j.puntos > 5000);
console.log(jugador_mas_5000_puntos);

//    - Usa some para comprobar si algún jugador tiene más de 20 victorias.
const numero_victorias_mayor_a_20 = jugadores.some(j => j.victorias > 20);
console.log(numero_victorias_mayor_a_20);

//    - Usa every para comprobar si todos los jugadores tienen más de 10 victorias.
const victorias_igual_a_10 = jugadores.every(j => j.victorias > 10);
console.log(victorias_igual_a_10);

//    - Usa with para corregir los puntos de "DarkMaster" (índice 3) a 3100.
const corrcion_DarMaster = jugadores.with(3, {
    ...jugadores[3],
    puntos: 3100,
})
console.log(corrcion_DarMaster);

//    - Usa reverse (sin mutar el original) para ver la clasificación de último a primero.
const jugadoresInvertidos = [...jugadores].reverse();
console.log(jugadoresInvertidos);

//    - Usa toString para obtener una cadena con todos los nombres de los jugadores.
//      Pista: primero extrae los nombres con map.

const jugadoresCadena = jugadores.map(j => j.nombre).toString();
console.log(jugadoresCadena);

separator()


console.log("#############################EJERCICIO 9 LIGA DE FUTBOL##################");
/*
 * 9. Liga de fútbol — jornada de partidos
 */
const partidos = [
    {local: "Barcelona", visitante: "Madrid", golesLocal: 3, golesVisitante: 1, jornada: 1},
    {local: "Sevilla", visitante: "Valencia", golesLocal: 1, golesVisitante: 1, jornada: 1},
    {local: "Atlético", visitante: "Villarreal", golesLocal: 2, golesVisitante: 0, jornada: 1},
    {local: "Betis", visitante: "Getafe", golesLocal: 0, golesVisitante: 1, jornada: 2},
    {local: "Madrid", visitante: "Atlético", golesLocal: 2, golesVisitante: 2, jornada: 2},
    {local: "Valencia", visitante: "Barcelona", golesLocal: 1, golesVisitante: 4, jornada: 2},
];

//    - Usa map para añadir a cada partido una propiedad "resultado":
//       "Victoria local" si golesLocal > golesVisitante
//        "Victoria visitante" si golesLocal < golesVisitante
//       "Empate" si son iguales.
const partidosConResultado = partidos.map(p => {
    let resultadoPartido = "";

    if (p.golesLocal > p.golesVisitante) {
        resultadoPartido = "Victoria local";
    } else if (p.golesLocal < p.golesVisitante) {
        resultadoPartido = "Victoria visitante";
    } else {
        resultadoPartido = "Empate";
    }

    return {
        ...p,
        resultado: resultadoPartido
    };
});

console.log(partidosConResultado);
//    - Usa filter para obtener solo los partidos de la jornada 2.
const partidos_joranda_2 = partidos.filter(p => p.jornada === 2);
console.log(partidos_joranda_2);

//    - Usa reduce para calcular el total de goles marcados en toda la liga
//     (suma golesLocal + golesVisitante de cada partido).
const totalGoles = partidos.reduce((acumulador, partido) => {
    return acumulador + partido.golesLocal + partido.golesVisitante;
}, 0);

console.log(totalGoles);
//    - Usa forEach para mostrar cada partido como en una quiniela:
//       "Barcelona 3 - 1 Madrid → 1"   (1 = local, X = empate, 2 = visitante)
partidos.forEach(p => {
    let signo = "";

    if (p.golesLocal > p.golesVisitante) {
        signo = "1";
    } else if (p.golesLocal < p.golesVisitante) {
        signo = "2";
    } else {
        signo = "X";
    }

    console.log(`${p.local} ${p.golesLocal} - ${p.golesVisitante} ${p.visitante} → ${signo}`);
});
//    - Usa find para localizar el primer partido en el que jugó el "Madrid"
//      (como local O como visitante). Muestra el marcador.
const primerPartidoMadrid = partidos.find(p => p.local === "Madrid" || p.visitante === "Madrid");

if (primerPartidoMadrid) {
    console.log(`Marcador: ${primerPartidoMadrid.local} ${primerPartidoMadrid.golesLocal} - ${primerPartidoMadrid.golesVisitante} ${primerPartidoMadrid.visitante}`);
}
//    - Usa some para comprobar si hubo algún partido con más de 4 goles en total.
const masDeCuatroGoles = partidos.some(p => (p.golesLocal + p.golesVisitante) > 4);
console.log(masDeCuatroGoles);
//    - Usa every para comprobar si todos los partidos de la jornada 1
//      tuvieron al menos un gol.
//      Pista: encadena filter y every.
const jornada1ConGoles = partidos
    .filter(p => p.jornada === 1)
    .every(p => (p.golesLocal + p.golesVisitante) >= 1);

console.log(jornada1ConGoles);

//    - Usa reduce para construir un objeto que cuente cuántas victorias locales,
//      visitantes y empates hubo en total.
//      Ejemplo resultado: { local: 3, visitante: 1, empate: 2 }
//      Pista: el valor inicial del reduce puede ser un objeto {}.
const resumenResultados = partidos.reduce((acumulador, partido) => {
    if (partido.golesLocal > partido.golesVisitante) {
        acumulador.local = (acumulador.local || 0) + 1;
    } else if (partido.golesLocal < partido.golesVisitante) {
        acumulador.visitante = (acumulador.visitante || 0) + 1;
    } else {
        acumulador.empate = (acumulador.empate || 0) + 1;
    }
    return acumulador;
}, {local: 0, visitante: 0, empate: 0});

console.log(resumenResultados);
//    - Usa with para corregir el resultado del partido Betis-Getafe (índice 3):
//      los goles del Betis fueron 1, no 0.
const partidosCorregidos = partidos.with(3, {
    ...partidos[3],
    golesLocal: 1
});

console.log(partidosCorregidos);
//    - Usa reverse (sin mutar el original) para mostrar los partidos
//      de la última jornada a la primera.

const partidosInvertidosCopia = [...partidos].reverse();

console.log(partidosInvertidosCopia);

separator()

console.log("############################EJERCICIO 10 GESTION DE ALUMNOS POR ASIGNATURA########################")

/*
 * 10. Gestión de alumnos con notas por asignatura
 */
const alumnos = [
    {
        nombre: "Carmen",
        asignaturas: [
            { nombre: "Matemáticas", nota: 7.5 },
            { nombre: "Lengua",      nota: 8.0 },
            { nombre: "Historia",    nota: 6.5 },
            { nombre: "Inglés",      nota: 9.0 },
        ]
    },
    {
        nombre: "Roberto",
        asignaturas: [
            { nombre: "Matemáticas", nota: 4.0 },
            { nombre: "Lengua",      nota: 5.5 },
            { nombre: "Historia",    nota: 3.5 },
            { nombre: "Inglés",      nota: 6.0 },
        ]
    },
    {
        nombre: "Elena",
        asignaturas: [
            { nombre: "Matemáticas", nota: 9.5 },
            { nombre: "Lengua",      nota: 8.5 },
            { nombre: "Historia",    nota: 9.0 },
            { nombre: "Inglés",      nota: 8.0 },
        ]
    },
    {
        nombre: "David",
        asignaturas: [
            { nombre: "Matemáticas", nota: 5.0 },
            { nombre: "Lengua",      nota: 4.5 },
            { nombre: "Historia",    nota: 6.0 },
            { node: "Inglés",      nota: 5.5 },
        ]
    },
    {
        nombre: "Isabel",
        asignaturas: [
            { nombre: "Matemáticas", nota: 6.0 },
            { nombre: "Lengua",      nota: 7.0 },
            { nombre: "Historia",    nota: 5.5 },
            { nombre: "Inglés",      nota: 7.5 },
        ]
    },
];
// - Usa map para crear un nuevo array donde cada alumno tenga:
//     · nombre
//     · promedio: la media de sus notas (usa reduce sobre sus asignaturas)
//     · estado: "Aprobado" si el promedio >= 5, "Suspenso" si no.
//   Pista: necesitarás un reduce DENTRO del map para calcular el promedio.
const alumnosConPromedio = alumnos.map(alumno => {
    const sumaNotas = alumno.asignaturas.reduce((acumulador, asig) => acumulador + asig.nota, 0);
    const promedioCalculado = sumaNotas / alumno.asignaturas.length;

    return {
        nombre: alumno.nombre,
        promedio: promedioCalculado,
        estado: promedioCalculado >= 5 ? "Aprobado" : "Suspenso"
    };
});

console.log(alumnosConPromedio);

// - Usa filter sobre el array del punto anterior para obtener
//   solo los alumnos aprobados.
const alumnos_aprobados = alumnosConPromedio.filter(a => a.estado==="Aprobado");
console.log(alumnos_aprobados);


// - Usa find para localizar al alumno que tenga alguna asignatura
//   suspensa (nota < 5). Muestra su nombre y qué asignatura ha suspendido.
//   Pista: usa some dentro del find para buscar en sus asignaturas.
const alumnoConSuspenso = alumnos.find(alumno =>
    alumno.asignaturas.some(asig => asig.nota < 5)
);

if (alumnoConSuspenso) {
    const asignaturaSuspensa = alumnoConSuspenso.asignaturas.find(asig => asig.nota < 5);
    console.log(`Nombre: ${alumnoConSuspenso.nombre} — Asignatura: ${asignaturaSuspensa.nombre || asignaturaSuspensa.node}`);
}



// - Usa forEach para mostrar el boletín de notas de cada alumno:
//     "Carmen:"
//     "  · Matemáticas: 7.5"
//     "  · Lengua: 8.0"
//     "  ..."
//   Pista: usa forEach anidado para recorrer las asignaturas de cada alumno.
alumnos.forEach(alumno => {
    console.log(`${alumno.nombre}:`);
    alumno.asignaturas.forEach(asig => {
        const nombreAsignatura = asig.nombre || asig.node;
        console.log(`  · ${nombreAsignatura}: ${asig.nota}`);
    });
});

// - Usa some para comprobar si algún alumno tiene un promedio mayor de 9.
//   Pista: calcula el promedio dentro del some con reduce.
const algunPromedioMayorA9 = alumnos.some(alumno => {
    const suma = alumno.asignaturas.reduce((acumulador, asig) => acumulador + asig.nota, 0);
    const promedio = suma / alumno.asignaturas.length;
    return promedio > 9;
});

console.log(algunPromedioMayorA9);
// - Usa every para comprobar si todos los alumnos aprueban Inglés.
//   Pista: usa find dentro del every para buscar la asignatura.

const todosApruebanIngles = alumnos.every(alumno => {
    const ingles = alumno.asignaturas.find(asig => (asig.nombre === "Inglés" || asig.node === "Inglés"));
    return ingles ? ingles.nota >= 5 : false;
});

console.log(todosApruebanIngles);

// - Usa reduce para calcular la nota media global de toda la clase
//   (la media de todos los promedios individuales).

const sumaPromedios = alumnosConPromedio.reduce((acumulador, alumno) => acumulador + alumno.promedio, 0);
const mediaGlobal = sumaPromedios / alumnosConPromedio.length;

console.log(mediaGlobal);

// - Usa with para actualizar las asignaturas de Roberto (índice 1)
//   con las mismas pero con la nota de Matemáticas corregida a 5.0.
//   Pista: tendrás que construir el nuevo array de asignaturas con map y with.
const nuevasAsignaturasRoberto = alumnos[1].asignaturas.map(asig => {
    return asig.nombre === "Matemáticas" ? { ...asig, nota: 5.0 } : asig;
});

const alumnosCorregido = alumnos.with(1, {
    ...alumnos[1],
    asignaturas: nuevasAsignaturasRoberto
});

console.log(alumnosCorregido);

// - Usa reverse (sin mutar el original) y forEach para mostrar
//   la lista de alumnos en orden inverso.
[...alumnos].reverse().forEach(alumno => {
    console.log(alumno.nombre);
});
// - Usa map y toString para obtener una cadena con todos los nombres.
const nombresCadena = alumnos.map(alumno => alumno.nombre).toString();

console.log(nombresCadena);























function crearEscuela() {
    let alumnos = [];
    let asignaturas = [];
    let matriculas = [];
    // CORRECCIÓN: nombre más claro para el contador.
    let siguienteIdMatricula = 1;

    return {
        agregarAlumno: function (nombre, edad) {
            // ERROR: la validación estaba dentro de un `for` sobre alumnos.
            // Con el array vacío no se ejecutaba y se registraba a un menor.
            // CORRECCIÓN: sin bucle, se comprueba el parámetro directamente.
            if (edad < 16) {
                return "Edad no válida";
            }
            alumnos.push({ id: alumnos.length + 1, nombre, edad });
            return `Alumno ${nombre}, edad ${edad}, agregado con éxito`;
        },

        agregarAsignatura: function (nombre, plazas) {
            for (let asignatura of asignaturas) {
                if (asignatura.nombre === nombre) {
                    return "Asignatura ya registrada";
                }
            }
            if (plazas <= 0) {
                // CORRECCIÓN menor: texto con tilde, como el enunciado.
                return "Plazas no válidas";
            }
            asignaturas.push({ id: asignaturas.length + 1, nombre, plazas });
            return `Asignatura ${nombre} con plazas para ${plazas} personas`;
        },

        matricular: function (idAlumno, idAsignatura) {
            for (let alumno of alumnos) {
                // ERROR: `alumno.idAlumno` no existe; la propiedad es `id`.
                if (alumno.id === idAlumno) {
                    for (let asignatura of asignaturas) {
                        if (asignatura.id === idAsignatura) {

                            // ERROR: si no quedaban plazas no había return propio y
                            // salía "No se encuentra asignatura".
                            // CORRECCIÓN: return propio.
                            if (asignatura.plazas <= 0) {
                                return "Asignatura completa";
                            }

                            // ERROR: `matricula.idAlumno !== idAsignatura` comparaba un
                            // alumno con una asignatura, y con matriculas vacío el bucle
                            // no se ejecutaba, así que nunca se matriculaba a nadie.
                            // CORRECCIÓN: bucle SOLO para detectar duplicados (mismo
                            // alumno Y misma asignatura). El push va fuera.
                            for (let matricula of matriculas) {
                                if (matricula.idAlumno === idAlumno && matricula.idAsignatura === idAsignatura) {
                                    return "Alumno ya matriculado";
                                }
                            }

                            asignatura.plazas--;
                            let id = siguienteIdMatricula++;
                            matriculas.push({ idMatricula: id, idAlumno: idAlumno, idAsignatura: idAsignatura, nota: null });
                            return `Matrícula realizada con éxito (id ${id})`;
                        }
                    }
                    return "Asignatura no encontrada";
                }
            }
            return "Alumno no encontrado";
        },

        ponerNota: function (idMatricula, nota) {
            for (let matricula of matriculas) {
                // ERROR: `matricula.id` no existe; la propiedad es `idMatricula`.
                if (matricula.idMatricula === idMatricula) {
                    // ERROR: recorrías asignaturas y comprobabas `asignatura.nota`,
                    // que no existe. La nota es el parámetro.
                    // CORRECCIÓN: validar el parámetro directamente, sin bucle.
                    if (nota < 0 || nota > 10) {
                        return "Nota no válida";
                    }
                    matricula.nota = nota;
                    return `Nota ${nota} asignada a la matrícula ${idMatricula}`;
                }
            }
            return "Matrícula no encontrada";
        },

        anularMatricula: function (idMatricula) {
            for (let i = 0; i < matriculas.length; i++) {
                if (matriculas[i].idMatricula === idMatricula) {

                    // ERROR: `matriculas.nota` trataba el array como un objeto.
                    // CORRECCIÓN: `matriculas[i].nota`, y `!== null` (un 0 es nota válida).
                    if (matriculas[i].nota !== null) {
                        // CORRECCIÓN: sin el punto final del enunciado.
                        return "No se puede anular: ya tiene nota";
                    }

                    let matriculaActual = matriculas[i];
                    matriculas.splice(i, 1);

                    // ERROR: `for (let asignatura of asignatura)` lanzaba un
                    // ReferenceError (recorrías la variable que estabas declarando).
                    // CORRECCIÓN: recorrer `asignaturas`.
                    for (let asignatura of asignaturas) {
                        // ERROR: comparabas con `idMatricula` en vez de `idAsignatura`.
                        if (asignatura.id === matriculaActual.idAsignatura) {
                            asignatura.plazas++;
                            break;
                        }
                    }
                    return "Matrícula anulada y plaza restaurada";
                }
            }
            return "Matrícula no encontrada";
        },

        notaMedia: function (idAlumno) {
            for (let alumno of alumnos) {
                // ERROR: `alumno.idAlumno` no existe; es `id`.
                if (alumno.id === idAlumno) {
                    let suma = 0;
                    let contador = 0;

                    // ERROR: `for (alumno of asignaturas)` sin `let` reasignaba `alumno`
                    // y recorría asignaturas, que no tienen nota.
                    // CORRECCIÓN: `for (let matricula of matriculas)`, solo las del
                    // alumno que tengan nota (null se ignora).
                    for (let matricula of matriculas) {
                        if (matricula.idAlumno === idAlumno && matricula.nota !== null) {
                            suma += matricula.nota;
                            contador++;
                        }
                    }

                    // ERROR: devolvías dentro del bucle y dividías entre
                    // asignaturas.length.
                    // CORRECCIÓN: acumular suma y contador, y dividir DESPUÉS del bucle,
                    // solo si hay notas.
                    if (contador === 0) {
                        return "Sin notas";
                    }
                    return Number((suma / contador).toFixed(3));
                }
            }
            return "Alumno no encontrado";
        },

        aprobadosDeAsignatura: function (idAsignatura) {
            let aprobados = [];
            // ERROR: `for (let matriculas of alumnos)` pisaba el array `matriculas`,
            // comparaba idAlumno con idAsignatura y usaba `asignaturas.nota`.
            // CORRECCIÓN: recorrer matrículas de esa asignatura con nota >= 5
            // y cruzar con alumnos para sacar el nombre.
            for (let matricula of matriculas) {
                if (matricula.idAsignatura === idAsignatura && matricula.nota !== null && matricula.nota >= 5) {
                    for (let alumno of alumnos) {
                        if (alumno.id === matricula.idAlumno) {
                            aprobados.push(alumno.nombre);
                            break;
                        }
                    }
                }
            }
            // ERROR: devolvías un string y dentro del bucle.
            // CORRECCIÓN: return al final; si no hay aprobados sale [].
            return aprobados;
        },

        verMatriculas: function () {
            let copia = [];
            for (let matricula of matriculas) {
                // ERROR: `push(...matricula)` hace spread de un objeto y da error.
                // CORRECCIÓN: `{ ...matricula }` copia el objeto.
                copia.push({ ...matricula });
            }
            return copia;
        }
    };
}

// === PRUEBAS ===
const escuela = crearEscuela();

console.log(escuela.agregarAlumno("Ana", 17));
console.log(escuela.agregarAlumno("Luis", 18));
console.log(escuela.agregarAlumno("Eva", 15));                 // Edad no válida
console.log(escuela.agregarAsignatura("Programación", 2));
console.log(escuela.agregarAsignatura("Bases de datos", 1));
console.log(escuela.agregarAsignatura("Programación", 5));     // Asignatura ya registrada
console.log(escuela.agregarAsignatura("Redes", 0));            // Plazas no válidas

console.log(escuela.matricular(1, 1));     // éxito, id 1
console.log(escuela.matricular(1, 1));     // Alumno ya matriculado
console.log(escuela.matricular(1, 2));     // éxito, id 2
console.log(escuela.matricular(2, 2));     // Asignatura completa
console.log(escuela.matricular(2, 1));     // éxito, id 3
console.log(escuela.matricular(99, 1));    // Alumno no encontrado
console.log(escuela.matricular(1, 99));    // Asignatura no encontrada

console.log(escuela.notaMedia(1));         // Sin notas

console.log(escuela.ponerNota(1, 7.5));    // confirmación
console.log(escuela.ponerNota(2, 4));      // confirmación
console.log(escuela.ponerNota(3, 11));     // Nota no válida
console.log(escuela.ponerNota(99, 5));     // Matrícula no encontrada
console.log(escuela.ponerNota(3, 5));      // confirmación

console.log(escuela.notaMedia(1));         // 5.75 (Number quita el ceros finales)
console.log(escuela.notaMedia(99));        // Alumno no encontrado

console.log(escuela.aprobadosDeAsignatura(1));   // ["Ana", "Luis"]
console.log(escuela.aprobadosDeAsignatura(2));   // []

console.log(escuela.anularMatricula(1));   // No se puede anular: ya tiene nota
console.log(escuela.anularMatricula(99));  // Matrícula no encontrada
console.log(escuela.matricular(1, 1));     // Asignatura completa (ver nota abajo)

console.log(escuela.verMatriculas());









function Gimnasio() {
    this.clases = [];
    this.inscripciones = [];
    this.siguienteIdClase = 1;
    this.siguienteIdInscripcion = 1;
}

Gimnasio.prototype.agregarClase = function (nombre, monitor, plazas) {
    if (nombre === "" || monitor === "") {
        return "Datos no válidos"; // CORRECCIÓN menor: tilde
    }
    for (let clase of this.clases) {
        if (clase.nombre === nombre) {
            return "Clase ya registrada";
        }
    }
    if (plazas <= 0) {
        return "Plazas no válidas"; // CORRECCIÓN menor: texto del enunciado
    }
    this.clases.push({ id: this.siguienteIdClase++, nombre, monitor, plazas });
    return `Clase ${nombre} registrada correctamente`;
};

Gimnasio.prototype.buscarClase = function (id) {
    for (let clase of this.clases) {
        if (clase.id === id) {
            return clase;
        }
    }
    return null;
};

Gimnasio.prototype.inscribir = function (idClase, socio) {
    let clase = this.buscarClase(idClase);
    if (clase === null) {
        return "Clase no encontrada";
    }

    // ERROR: el for sobre TODAS las clases devolvía "Clase completa" si
    // cualquiera tenía 0 plazas.
    // CORRECCIÓN: mirar solo la clase encontrada, sin bucle.
    if (clase.plazas === 0) {
        return "Clase completa";
    }

    // ERROR: `inscripcione.idClase === socio` comparaba un id con un nombre.
    // CORRECCIÓN: comparar idClase Y socio a la vez.
    for (let inscripcion of this.inscripciones) {
        if (inscripcion.idClase === idClase && inscripcion.socio === socio) {
            return "Socio ya inscrito";
        }
    }

    // ERROR: `this.clases.plazas--` apuntaba al ARRAY (NaN).
    // CORRECCIÓN: restar sobre el objeto encontrado.
    clase.plazas--;

    // ERROR: el mensaje mostraba el id de la clase, no el de la inscripción.
    let id = this.siguienteIdInscripcion++;
    this.inscripciones.push({ idInscripcion: id, idClase, socio });
    return `Inscripción realizada con éxito (id ${id})`;
};

Gimnasio.prototype.cancelar = function (idInscripcion) {
    for (let i = 0; i < this.inscripciones.length; i++) {
        if (this.inscripciones[i].idInscripcion === idInscripcion) {
            // ERROR: no guardabas el objeto antes del splice.
            // CORRECCIÓN: guardarlo para leer su idClase.
            let inscripcionActual = this.inscripciones[i];
            this.inscripciones.splice(i, 1);

            // ERROR: buscabas la clase con idInscripcion y comparabas con
            // `this.clases.id` (el array no tiene id).
            // CORRECCIÓN: usar el idClase del objeto guardado.
            let clase = this.buscarClase(inscripcionActual.idClase);
            if (clase !== null) {
                clase.plazas++;
            }
            return "Inscripción cancelada y plaza devuelta";
        }
    }
    // ERROR: este return estaba tras el bucle pero el resto quedaba como
    // código muerto. CORRECCIÓN: es lo ÚLTIMO de la función.
    return "Inscripción no encontrada";
};

Gimnasio.prototype.clasesDeSocio = function (socio) {
    let nombres = [];
    // ERROR: buscabas una clase con el nombre del socio y devolvías un solo
    // string dentro del bucle.
    // CORRECCIÓN: recorrer inscripciones del socio, buscar cada clase
    // con this.buscarClase y acumular los nombres. return al final.
    for (let inscripcion of this.inscripciones) {
        if (inscripcion.socio === socio) {
            let clase = this.buscarClase(inscripcion.idClase);
            if (clase !== null) {
                nombres.push(clase.nombre);
            }
        }
    }
    return nombres;
};

Gimnasio.prototype.clasesConPlazas = function () {
    let disponibles = [];
    for (let clase of this.clases) {
        // ERROR: `clase.map(...)` lanzaba TypeError (un objeto no tiene map)
        // y `push(...clase.nombre)` metía el nombre letra a letra.
        // CORRECCIÓN: push de una COPIA del objeto, como pide el enunciado.
        if (clase.plazas > 0) {
            disponibles.push({ ...clase });
        }
    }
    return disponibles;
};

Gimnasio.prototype.claseMasPopular = function () {
    let maximo = 0;
    let nombre = "Sin inscripciones";
    for (let clase of this.clases) {
        let contador = 0;
        for (let inscripcion of this.inscripciones) {
            if (inscripcion.idClase === clase.id) {
                contador++;
            }
        }
        if (contador > maximo) {
            maximo = contador;
            nombre = clase.nombre;
        }
    }
    return nombre;
};

// === PRUEBAS ===
const gym = new Gimnasio();

console.log(gym.agregarClase("Spinning", "Marta", 2));
console.log(gym.agregarClase("Yoga", "Pablo", 1));
console.log(gym.agregarClase("Yoga", "Otro", 5));        // Clase ya registrada
console.log(gym.agregarClase("", "Pablo", 5));           // Datos no válidos
console.log(gym.agregarClase("Pilates", "Eva", 0));      // Plazas no válidas

console.log(gym.buscarClase(1));                         // objeto Spinning
console.log(gym.buscarClase(99));                        // null

console.log(gym.inscribir(1, "Ana"));                    // éxito, id 1
console.log(gym.inscribir(1, "Ana"));                    // Socio ya inscrito
console.log(gym.inscribir(1, "Luis"));                   // éxito, id 2
console.log(gym.inscribir(1, "Eva"));                    // Clase completa
console.log(gym.inscribir(99, "Eva"));                   // Clase no encontrada
console.log(gym.inscribir(2, "Ana"));                    // éxito, id 3

console.log(gym.clasesDeSocio("Ana"));                   // ["Spinning", "Yoga"]
console.log(gym.clasesConPlazas());                      // []
console.log(gym.claseMasPopular());                      // Spinning

console.log(gym.cancelar(1));                            // confirmación
console.log(gym.cancelar(99));                           // Inscripción no encontrada
console.log(gym.clasesConPlazas());                      // Spinning con 1 plaza
console.log(gym.clasesDeSocio("Ana"));                   // ["Yoga"]

console.log(gym.inscribir(1, "Eva"));                    // éxito, id 4









































