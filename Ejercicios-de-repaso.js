/*#########################EJERCICIOS DE ARRAYS CON FOREACH DESDE BÁSICOS A DIFÍCILES Y ALGÚN EJERCICIO CON FUNCIONES#######################*/

/*
Ejercicio 1 => Escribe un bucle for que imprima por consola los numeros del 1 al 10


let contador1 = 0;
for (let i =0;i<10;i++){
    contador1++
    console.log(contador1);
}
*/

/*
Ejercicio 2=> Escribe un bucle (puedes usar for o while) que recorra los números del 1 al 20 e imprima solo los números pares.



for (i =0;i<20;i++){
    if (i %2=== 0){
        console.log(i);
    }
}

*/

/*
Ejercicio 3 => Crea una función llamada saludar que reciba un nombre como parámetro y devuelva el texto "Hola, [nombre], ¡bienvenido/a!"


function saludar(nombre){
    console.log("Hola, " + nombre + " , ¡bienvenido");
}

saludar("camilo")
*/

/*Ejercicio 4 => Crea un funcion llamada sumar que reciba dos numeros como paramteros y devuelva la suma de ambos
function suma (n1,n2) {
    return n1 + n2;

}
const resultado = suma(5,3)
console.log(resultado)

 */

/*Ejercicio 5 => Crea un array llamado colores que contenga tres cadenas de texto: "rojo", "verde" y "azul"
Muestra en la consola únicamente el primer elemento del array
Muestra en la consola la longitud total del array.

let colores = ["rojo","verde","azul"];
console.log(colores[1]);
console.log(colores.length);
*/

/*Ejercicio 6 => Añade la fruta "plátano" al final del array usando un método de array.
Elimina el primer elemento del array ("manzana") usando otro método.
Muestra por consola cómo queda el array final

const frutas = ["manzana","pera"]
frutas.push("platano");
console.log(frutas);
frutas.shift("manzana")
console.log(frutas);

 */

/* Ejercicio 7 => Crea una función llamada mostrarNombres que reciba un array de nombres como parámetro y los
imprima uno a uno en la consola usando un bucle for o for...of.

const amigos = ["Ana","Luis","Carlos"]

function retornar(amigos){
   for (i=0; i<amigos.length; i++){
       console.log(amigos[i]);
   }
}
const resultados = retornar(amigos)
console.log(resultados)
*/

/*Ejercicio 8 => Usa un forEach para recorrer el array e imprimir por consola cada precio
incrementado en un 21% de IVA (multiplicando por 1.21).

const precios = [10,20,50,100]
function precio_Iva(precios){
    precios.forEach(p =>{
        let IVa = p*1.21;
        console.log(IVa);
    });
}
precio_Iva(precios)

 */

/*Ejercicio 9 => Crea una función llamada encontrarMayor que reciba un array
de números y devuelva el número más alto de ese array. (Puedes usar un bucle for o for...of).


const numeros = [15, 8, 42, 23, 4];

function mayor(lista) {
    let numeroMayor = lista[0];

    lista.forEach(n => {
        if (n > numeroMayor) {
            numeroMayor = n;
        }
    });

    return numeroMayor;
}

console.log(mayor(numeros));
*/

/*Ejercicio 10 =>Crea una función llamada filtrarPalabrasLargas que reciba un array de palabras
y devuelva un nuevo array únicamente con las palabras que tengan más de 4 letras.

const palabras = ["sol", "ordenador", "luz", "pantalla", "ojo"];

function filtrarPalabrasLargas(lista) {
    return lista.filter(p => p.length > 4);
}

console.log(filtrarPalabrasLargas(palabras));

*/

/*Ejercicio 11 => Crea un funcion llamada multiplicarPorDos que reciba un array
de numeros y devuelva un nuevo array con cada uno de los numeros multiplicados por dos

const numeros = [2,4,6,8];
function multiplicarPorDos(lista){
    let resultados =[]
    numeros.forEach(n => {
        resultados.push(n*2)
    })
    return resultados;
}
console.log(multiplicarPorDos(numeros));
*/

/*Ejercicio 12 => Crea una función llamada contarMayoresDeDiez que reciba un array de números
y devuelva la cantidad de números que sean mayores que 10.

const numeros = [3, 12, 5, 20, 8, 15];

function mayores(lista) {
    let contador = 0;

    lista.forEach(n => {
        if (n > 10) {
            contador++;
        }
    });

    return contador;
}

console.log(mayores(numeros));

 */

/*Ejercicio 13 => Crea una funcion llamada convertirMayusculas que reciba un array
de cadenas de texto y devuelva de un nuevo array con todas als ciudades convertidas en mayusculas

const ciudades = ["madrid","barcelona","sevilla","valencia"]

function convertirMayusculas(ciudades){
    let mayusculas = []
    ciudades.forEach(c => {
         mayusculas.push(c.toUpperCase())
    })
    return mayusculas;
}
console.log(convertirMayusculas(ciudades));

 */

/*Ejercicio 14 => Crea una funcion llamada obtenerAprobados que reciba un array de números(notas) y
devuelve un nuevo array que contenga unicamente las notas mayores o iguales a 5

const notas =[3,8,5,2,9,4,7]
/*
function obtenerAprobados(notas){
    return notas.filter(n => n>=5)
}
console.log(obtenerAprobados(notas));


function obtenerAprobados(notas){
    let aprobados = []

    notas.forEach(n => {
        if (n>=5){
             aprobados.push(n)
        }
    })
    return aprobados;
}
console.log(obtenerAprobados(notas))

 */

/*Ejercicio 15 => Crea una función llamada obtenerUsuariosActivos que reciba esta lista y
devuelva un nuevo array solo con los nombres de los usuarios que estén activos (activo === true).

const usuarios = [
    { nombre: "Ana", activo: true },
    { nombre: "Luis", activo: false },
    { nombre: "Carlos", activo: true },
    { nombre: "Marta", activo: false }
];
function obtenerUsuariosActivos(usuarios){
    let usuariosActivos = [];
    usuarios.forEach(u =>{
        if (u.activo===true){
            usuariosActivos.push(u);
        }
    });
    return usuariosActivos;
}
console.log(obtenerUsuariosActivos(usuarios));
 */

/*Ejercicio 16 => Crea una función llamada buscarUsuario que reciba dos parámetros: el array de usuarios y
el nombre que quieres buscar.
La función debe devolver el objeto completo del usuario si lo encuentra, o null si no existe.

const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Carlos", edad: 22 }
];

function buscarUsuario(usuario ,nombre ){
    let datos =[];
    usuarios.forEach(u => {
        if(u.nombre === nombre){
            datos.push(u);
        }else{
            return "null";
        }
    });
    return datos;

}
const ususario_a_buscar= buscarUsuario(usuarios , "Ana");
console.log(ususario_a_buscar);

 */

/*Ejercicio 17 => Crea una función llamada obtenerNombresDisponibles que reciba este array de
productos y devuelva un nuevo array solo con los nombres de los productos que estén
 disponibles (disponible === true).

const productos = [
    { nombre: "Camiseta", precio: 15, disponible: true },
    { nombre: "Pantalón", precio: 30, disponible: false },
    { nombre: "Zapatillas", precio: 50, disponible: true },
    { nombre: "Gorra", precio: 10, disponible: false }
];

function obtenerNombresDisponicles(productos){
    let stock_disponible = []
    productos.forEach(p => {
        if (p.disponible===true){
            stock_disponible.push(p.nombre)
        }

    });
    return stock_disponible
}
console.log(obtenerNombresDisponicles(productos));

 */

/*Ejercicio 18 => Crea una función llamada aplicarDescuento que reciba dos parámetros: el array de productos y un
 número que represente el porcentaje de descuento (por ejemplo, 10 para un 10%).
 La función debe devolver un nuevo array donde cada producto tenga el precio reducido según el porcentaje indicado.


const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 50 },
    { nombre: "Zapatillas", precio: 80 }
];

function aplicarDescuento (productos,descuento){
    let catalogo_descuento =[]
    productos.forEach(p => {
        let formula  = p.precio-(p.precio*(descuento/100))

        catalogo_descuento.push(p.nombre,formula )
    })
    return catalogo_descuento;
}
console.log(aplicarDescuento(productos,10));


 */

/*Ejercicio 20 => Crea una función llamada calcularTotal que reciba este array y
devuelva el número total que resulta de sumar el precio de todos los productos.

const carrito = [
    { producto: "Manzanas", precio: 3 },
    { producto: "Pan", precio: 1.5 },
    { producto: "Leche", precio: 2 },
    { producto: "Queso", precio: 4.5 }
];

function calcularTotal(carrito){
    let suma =0
    carrito.forEach(c => {
        return suma += c.precio

    })
    return suma
}
console.log(calcularTotal(carrito));

 */

/*Ejercicio 21 =>Crea una función llamada calcularTotalEnStock que reciba este array de productos y devuelva
el precio total acumulado únicamente de los productos que tengan enStock === true.

const productos = [
    { nombre: "Teclado", precio: 50, enStock: true },
    { nombre: "Ratón", precio: 20, enStock: false },
    { nombre: "Monitor", precio: 200, enStock: true },
    { nombre: "Auriculares", precio: 30, enStock: false }
];

function calcularTotalEnStock(productos){
    let suma =0
    productos.forEach(p => {
        if(p.enStock===true){
            suma+=p.precio;
        }
    })
    return suma;
}
console.log(calcularTotalEnStock(productos));

 */

/*Ejercicio 22 => Crea una función llamada calcularNotaMedia
que reciba este array y devuelva la nota media (promedio) de toda la clase.


const estudiantes = [
    { nombre: "Elena", nota: 8 },
    { nombre: "Marcos", nota: 4 },
    { nombre: "Sofía", nota: 9 },
    { nombre: "Pablo", nota: 3 }
];

function calcular_promedio(estudiantes){
    let suma =0;
    estudiantes.forEach(e => {
        suma += e.nota;
    })
    return suma/estudiantes.length
}
console.log(calcular_promedio(estudiantes));

 */

/*Ejercicio 23 => Crea una función llamada obtenerMejorEstudiante que reciba este array de objetos y
devuelva el objeto del estudiante que tenga la nota más alta.

const estudiantes = [
    { nombre: "Elena", nota: 8 },
    { nombre: "Marcos", nota: 4 },
    { nombre: "Sofía", nota: 9 },
    { nombre: "Pablo", nota: 6 }
];

function obtenerMejorEstudiante(lista) {
    let mejor = lista[0];

    lista.forEach(e => {
        if (e.nota > mejor.nota) {
            mejor = e;
        }
    });


    return mejor;
}

console.log(obtenerMejorEstudiante(estudiantes));

 */

/*Ejercicio 24 => Crea una función llamada contarCompletadas que reciba este array de tareas y devuelva el número
total de tareas que están completadas (completada === true).

const tareas = [
    { titulo: "Aprender JS", completada: true },
    { titulo: "Hacer ejercicio", completada: false },
    { titulo: "Comprar comida", completada: true },
    { titulo: "Leer un libro", completada: true }
];

function contarTareasAcabadas(tareas){
    let contador_tareas = 0;
    tareas.forEach(t => {
        if(t.completada===true){
            contador_tareas++;
        }
    })
    return contador_tareas;
}
console.log(contarTareasAcabadas(tareas));

function contadorT(tareas){
    let c = 0;
    tareas.filter(t =>{
        if(t.completada===true){
            c++;
        }
    })
    return c
}
console.log(contadorT(tareas));

 */

/*Ejercicio 25 =>Crea una función llamada calcularTotalesPorTipo que reciba este array y devuelva un objeto con la
suma total acumulada de los "ingreso" y de los "gasto"


const transacciones = [
    { tipo: "ingreso", monto: 100 },
    { tipo: "gasto", monto: 50 },
    { tipo: "ingreso", monto: 200 },
    { tipo: "gasto", monto: 30 },
    { tipo: "ingreso", monto: 50 }
];
function CalcularTotalesPorTipo(transacciones) {
    let contador_ingresos =0;
    let contador_gasto = 0;
    transacciones.forEach(t => {
        if (t.tipo ==="ingreso"){
            contador_ingresos+=t.monto
        }
        else if (t.tipo === "gasto"){
            contador_gasto+=t.monto
        }
    })
    return {
        ingresos: contador_ingresos,
        gasto: contador_gasto,
    }
}
console.log(CalcularTotalesPorTipo(transacciones));

 */

/*Ejercicio 26 => Crea una función llamada obtenerResumenCategoria que reciba tres parámetros:

El array inventario.

El nombre de la categoria a buscar (por ejemplo, "tecnología").

Un porcentaje de impuesto (por ejemplo, 21 para un 21% de IVA).

La función debe devolver un objeto con dos propiedades:

productos: Un array con los nombres de los productos de esa categoría, con la primera letra en mayúscula (por ejemplo, "Portátil", "Teclado mecánico").

precioTotalConIVA: La suma de los precios de los productos de esa categoría, incluyendo el impuesto aplicado.

const inventario = [
    { id: 1, nombre: "portátil", precio: 800, categoria: "tecnología" },
    { id: 2, nombre: "silla de escritorio", precio: 120, categoria: "muebles" },
    { id: 3, nombre: "teclado mecánico", precio: 80, categoria: "tecnología" },
    { id: 4, nombre: "mesa elevable", precio: 300, categoria: "muebles" },
    { id: 5, nombre: "auriculares", precio: 50, categoria: "tecnología" }
];

function obtenerResumenCategoria(inventario, categoria, impuesto) {
    const productos = [];
    let total = 0;

    inventario.forEach(p => {
        if (p.categoria === categoria) {
            productos.push(p.nombre[0].toUpperCase() + p.nombre.slice(1));
            total += p.precio;
        }
    });

    return {
        productos: productos,
        precioTotalConIVA: total * (1 + impuesto / 100)
    };
}

const prueba_inventario = obtenerResumenCategoria(inventario, "tecnología", 21);
console.log(prueba_inventario);

const prueba_2 = obtenerResumenCategoria(inventario,"muebles",21)
console.log(prueba_2)

 */

/*Ejercicio 27 => Crea una función llamada analizarUsuariosActivos que reciba este array de usuarios y devuelva un objeto con dos propiedades:

nombres: Un array con los nombres de los usuarios que están activos (activo === true) convertidos a mayúsculas (por ejemplo, "ANA").

edadPromedio: La edad promedio (media) únicamente de los usuarios activos.

const usuarios = [
    { nombre: "Ana", edad: 25, activo: true },
    { nombre: "Carlos", edad: 40, activo: false },
    { nombre: "Beatriz", edad: 30, activo: true },
    { nombre: "David", edad: 15, activo: false },
    { nombre: "Elena", edad: 35, activo: true }
];
function analizarusuariosActivos(usuarios){
    let array = []
    let contador = 0
    let contador_usuarios_activos =0
    usuarios.forEach(u => {
        if(u.activo===true){
            array.push(u.nombre.toUpperCase())
            contador += u.edad
            contador_usuarios_activos++
        }
    })
    return {
        data : array,
        promedio: contador/contador_usuarios_activos
    }
}
console.log(analizarusuariosActivos(usuarios));

 */

/*Ejercicio 28 => Crea una función llamada procesarVentasValidas que reciba este array y devuelva un objeto con dos propiedades:

clientesPagados: Un array con los nombres de los clientes que sí han pagado (pagado === true) Y que tienen un monto válido (mayor que 0 y que no sea null).

totalRecaudado: La suma total de los montos de esas ventas válidas y pagadas.


const ventas = [
    { cliente: "Juan", monto: 120, pagado: true },
    { cliente: "Maria", monto: null, pagado: true },
    { cliente: "Pedro", monto: 80, pagado: false },
    { cliente: "Laura", monto: 200, pagado: true },
    { cliente: "Carlos", monto: 0, pagado: true }
];

function procesarVentasValidas(ventas){
    let total = 0;
    let a = []
    ventas.forEach((v) => {
        if(v.pagado===true && v.monto>0 && v.monto!==null){
            a.push(v.cliente);
            total += v.monto
        }
    })
    return {
        informacion: a,
        suma : total
    }
}
console.log(procesarVentasValidas(ventas));

 */

/*Ejercicio 29 => Crea una función llamada resumenAlmacen que reciba este array de objetos y devuelva un objeto con dos propiedades:

disponibles: Un array con los nombres de las prendas que tienen stock (stock > 0), con cada palabra en mayúsculas (por ejemplo: "PANTALÓN VAQUERO").

valorTotal: La suma del valor económico total de las prendas disponibles (para cada prenda disponible, su valor es precio * stock).


const inventario = [
    { prenda: "pantalón vaquero", precio: 40, stock: 5 },
    { prenda: "camiseta básica", precio: 15, stock: 0 },
    { prenda: "chaqueta de cuero", precio: 100, stock: 2 },
    { prenda: "calcetines", precio: 5, stock: 12 }
];

function resumenAlmacen(lista) {
    let prendasDisponibles = [];
    let acumuladorValor = 0;

    lista.forEach(i => {
        if (i.stock > 0) {
            prendasDisponibles.push(i.prenda.toUpperCase());

            acumuladorValor += i.precio * i.stock;
        }
    });

    return {
        disponibles: prendasDisponibles,
        valorTotal: acumuladorValor
    };
}

console.log(resumenAlmacen(inventario));

 */

/*Ejercicio 30 =>Crea una función llamada generarInformeMateria que reciba dos parámetros: el array curso y el nombre de una asignatura (por ejemplo, "Programación").

La función debe devolver un objeto con dos propiedades:

aprobados: Un array con los nombres de los estudiantes de esa asignatura que tienen una nota mayor o igual a 5, formateados con la primera letra en mayúscula.

promedioMateria: La nota media de todos los alumnos anotados en esa asignatura (tanto aprobados como suspensos).

const curso = [
    { estudiante: "Lucía", asignatura: "Programación", nota: 9 },
    { estudiante: "Diego", asignatura: "Diseño", nota: 4 },
    { estudiante: "Marta", asignatura: "Programación", nota: 7 },
    { estudiante: "Andrés", asignatura: "Diseño", nota: 8 },
    { estudiante: "Sofia", asignatura: "Programación", nota: 3 }
];

function generalInformeMateria(curso , nombre){
    let contador_aprobados =0
    let contador_suspenso = 0
    let contador_materia =0
    let informe =[]

    curso.forEach(c => {
        if (nombre ===c.asignatura && c.nota>=5){
            informe.push(c.estudiante)
            contador_aprobados+=c.nota
            contador_materia++
        }else{
            contador_suspenso+=c.nota
            contador_materia++
        }
    });
    return {
        boletin :informe,
        promedio: (contador_aprobados + contador_suspenso) / contador_materia
    }
}
console.log(generalInformeMateria(curso , "Programación"));

 */

/*Ejercicio 31 => Crea una función llamada analizarGenero que reciba dos parámetros: el array catalogo y un string generoBuscado (por ejemplo, "Ciencia Ficción").

La función debe devolver un objeto con dos propiedades:

titulosVistos: Un array con los títulos en mayúsculas de las películas de ese género que hayan sido vistas completamente (vistoCompleto === true).

tiempoTotalMinutos: La suma de la duración de todas las películas de ese género (hayan sido vistas completas o no).


const catalogo = [
    { titulo: "Inception", genero: "Ciencia Ficción", duracionMinutos: 148, vistoCompleto: true },
    { titulo: "Interstellar", genero: "Ciencia Ficción", duracionMinutos: 169, vistoCompleto: false },
    { titulo: "The Dark Knight", genero: "Acción", duracionMinutos: 152, vistoCompleto: true },
    { titulo: "Matrix", genero: "Ciencia Ficción", duracionMinutos: 136, vistoCompleto: true },
    { titulo: "Avengers", genero: "Acción", duracionMinutos: 143, vistoCompleto: false }
];

function analizarGenero(catalogo, genero){
    let suma =0;
    let lista = [];
    catalogo.forEach(c =>{
        if (genero === c.genero && c.vistoCompleto===true){
            lista.push(c.titulo.toUpperCase());
        }
        if (genero === c.genero){
            suma += c.duracionMinutos
        }
    })
    return {
        cartera : lista,
        total : suma,
    }
}
console.log(analizarGenero(catalogo,"Ciencia Ficción"));

 */

/*Ejercicio 32 => Crea una función llamada calcularNominaDepartamento que reciba dos parámetros: el array empleados y el nombre de un departamento (por ejemplo, "Ventas").

La función debe devolver un objeto con dos propiedades:

destacados: Un array con los nombres en mayúsculas de los empleados de ese departamento que hayan obtenido una evaluación positiva (evalPositiva === true).

gastoTotalSalarios: La suma de los salarios de todos los empleados de ese departamento (tengan o no evaluación positiva).


const empleados = [
    { nombre: "Laura", departamento: "Ventas", salario: 2500, evalPositiva: true },
    { nombre: "Pablo", departamento: "TI", salario: 3000, evalPositiva: false },
    { nombre: "Carmen", departamento: "Ventas", salario: 2100, evalPositiva: true },
    { nombre: "Marcos", departamento: "TI", salario: 2800, evalPositiva: true },
    { nombre: "Ana", departamento: "Ventas", salario: 1900, evalPositiva: false }
];
function calcularNominaDepartamento(empleados, puesto){
    let suma =0
    let destacados =[]
    empleados.forEach((em)=> {
        if (em.evalPositiva===true && puesto === em.departamento){
            destacados.push(em.nombre.toUpperCase());
        }
        if (puesto === em.departamento){
            suma += em.salario;
        }
    });
    return {
        mejores : destacados,
        nomina:suma
    }
}
console.log(calcularNominaDepartamento(empleados, "Ventas"));

 */

/*Ejercicio 33 => Crea una función llamada resumenProyecto que reciba dos parámetros: el array registroHoras y el nombre de un proyecto (por ejemplo, "App Móvil").

La función debe devolver un objeto con dos propiedades:

completados: Un array con los nombres en mayúsculas de los desarrolladores de ese proyecto que marcaron su tarea como completada (completado === true).

totalHoras: La suma de todas las horas dedicadas a ese proyecto (hayan completado la tarea o no).

const registroHoras = [
    { desarrollador: "Marcos", proyecto: "App Móvil", horas: 8, completado: true },
    { desarrollador: "Sonia", proyecto: "Sitio Web", horas: 5, completado: false },
    { desarrollador: "Lucas", proyecto: "App Móvil", horas: 6, completado: true },
    { desarrollador: "Elena", proyecto: "App Móvil", horas: 4, completado: false },
    { desarrollador: "David", proyecto: "Sitio Web", horas: 7, completado: true }
];

function resumenProyectos(registroHoras, proyecto) {
    let trabajadores_terminados = [];
    let suma =0;
    registroHoras.forEach(rh => {
        if (rh.completado===true && proyecto===rh.proyecto){
            trabajadores_terminados.push(rh.desarrollador.toUpperCase());
        }
        if(proyecto === rh.proyecto){
            suma += rh.horas
        }
    })
    return {
        acabados: trabajadores_terminados,
        tiempo:suma
    }
}
console.log(resumenProyectos(registroHoras, "App Móvil"));
 */

/*#######################EJERCICIOS CLOUSERS ###################################*/

/*Ejercicio 1 => Crea una función llamada crearBolsillo que inicialice una variable saldo = 0.

Debe devolver una función que reciba un monto numérico, lo sume al saldo acumulado y devuelva el nuevo saldo total.


function crearBolsillo(){
    let saldo =0
    return function(dinero){
        saldo+=dinero
        return dinero;
    };
}
const miBolsillo = crearBolsillo();
console.log(miBolsillo(50));
console.log(miBolsillo(70));

 */

/*Ejercicio 2 => Crea una función llamada crearListaCompras que no reciba parámetros al inicio e inicialice un array privado let lista = [];.

Debe devolver una función que reciba el nombre de un producto (string):

Añade ese producto a la lista privada.

Devuelve la lista completa actualizada.

function crearListaCompras(){
    let lista =[];
    return function (ingrediente){
       lista.push(ingrediente);
       return lista;
    }
}
const miLista = crearListaCompras()
console.log(miLista("Manzanas"))
console.log(miLista("Leche"));

 */

/*Ejercicio 3 => Crea una función llamada crearCuentaBancaria que reciba un saldoInicial opcional (por defecto 0).

Dentro de la función debe haber una variable privada let saldo = saldoInicial;.

Debe devolver un objeto con tres métodos:

depositar(monto): Suma el monto al saldo privado y devuelve el nuevo saldo.

retirar(monto):

Si el monto es mayor que el saldo, no realiza el retiro y devuelve "Fondos insuficientes".

Si hay suficiente saldo, resta el monto y devuelve el nuevo saldo.

verSaldo(): Devuelve el valor actual de saldo.


function crearCuentaBancaria(saldo_inicial){
    let saldo =saldo_inicial
    return {
        depositar: function(ingreso){
            saldo += ingreso;
          return saldo
        },
        retirar: function(retiro){
            if (saldo>=retiro){
                saldo-=retiro
                return saldo
            }else {
                return "No Hay fondos"
            }
        },
        ver_saldo:function(){
            return saldo
        }
    }
}
const miCuenta = crearCuentaBancaria(100);
console.log(miCuenta.depositar(50));  // Devuelve: 150
console.log(miCuenta.retirar(30));   // Devuelve: 120
console.log(miCuenta.retirar(200));  // Devuelve: "Fondos insuficientes"
console.log(miCuenta.ver_saldo());    // Devuelve: 120

 */

/*Ejercicio 4 => Crea una función llamada crearBiblioteca que inicialice un array privado let librosLeidos = [];.

Debe devolver un objeto con tres métodos:

agregarLibro(titulo):

Añade el título del libro al array privado (en formato de texto normal).

Devuelve un string confirmando la acción, por ejemplo: "Libro 'Inception' añadido con éxito".

buscarLibro(titulo):

Recibe un título y busca si ya está en la lista (puedes usar .includes() o recorrerlo).

Devuelve true si el libro existe en el array privado o false si no está.

verBiblioteca():

Devuelve el array completo con todos los libros leídos hasta el momento.

function  crearBiblioteca(){
    let librosLeidos=[];
    return {
        agregar_Libro: function(titulo) {
            librosLeidos.push(titulo);
            return `Libro ${titulo} añadido con éxito.`
        },
        buscarLibro(titulo){

                    return librosLeidos.includes(titulo);


        },
        verBiblioteca(){
            return librosLeidos
        }


    }
}
const miBiblioteca = crearBiblioteca();
console.log(miBiblioteca.agregar_Libro("El Señor de los Anillos"));

console.log(miBiblioteca.agregar_Libro("1984"));

console.log(miBiblioteca.buscarLibro("1984"));

console.log(miBiblioteca.buscarLibro("Dune"));

console.log(miBiblioteca.verBiblioteca());

 */

/*Ejercicio 5 => Vamos a subir un escalón combinando Closures, objetos con múltiples métodos y modificación de propiedades dentro de un array privado.

Tu tarea:

Crea una función llamada crearGestorTareas que inicialice un array privado let tareas = [];.

Debe devolver un objeto con tres métodos:

agregar(texto):

Añade un objeto a la lista privada con esta estructura: { texto: texto, completada: false }.

Devuelve un mensaje de confirmación, por ejemplo: "Tarea 'Estudiar JS' agregada.".

completar(texto):

Recorre el array privado buscando la tarea que coincida con ese texto.

Si la encuentra, cambia su propiedad completada a true y devuelve true. Si no la encuentra, devuelve false.

listar():

Devuelve el array completo con todas las tareas y sus estados actuales.
 *

function crearGestorTareas() {
    let tareas = [];

    return {
        agregar: function(texto) {
            tareas.push({ texto: texto, completada: false });
            return `Tarea '${texto}' agregada.`;
        },

        completar: function(texto) {
            let encontrada = false;
            for (let tarea of tareas) {
                if (tarea.texto === texto) {
                    tarea.completada = true;
                    encontrada = true;
                }
            }
            return encontrada;
        },

        listar: function() {
            return tareas;
        }
    };
}

const miGestor = crearGestorTareas();
console.log(miGestor.agregar("Aprender Closures"));


console.log(miGestor.agregar("Hacer ejercicio"));

console.log(miGestor.completar("Aprender Closures"));


console.log(miGestor.listar());

 */

/*Ejercicio 6 => Vamos a combinar todo lo que has aprendido: Closures, arrays privados de objetos, búsqueda con bucles y validación de cantidades (como hiciste con la cuenta bancaria y las tareas).

Tu tarea:

Crea una función llamada crearInventario que inicialice un array privado let productos = [];.

Debe devolver un objeto con tres métodos:

agregarProducto(nombre, cantidad):

Añade un objeto al array privado con esta estructura: { nombre: nombre, cantidad: cantidad }.

Devuelve un string de confirmación, por ejemplo: "Producto 'Manzanas' añadido con stock: 50".

venderProducto(nombre, cantidadVendida):

Recorre el array privado buscando el producto por su nombre.

Si lo encuentra y la cantidad disponible es mayor o igual a la cantidadVendida, le resta esa cantidad y devuelve el stock restante de ese producto.

Si no hay suficiente stock, devuelve "Stock insuficiente". Si el producto no existe, puedes devolver "Producto no encontrado".

verStock():

Devuelve el array completo con todos los productos y sus cantidades actuales.


function crearInventario(){
    let productos = []
    return {
        agregarProducto:function(nombre,cantidad){
             productos.push({nombre:nombre , cantidad:cantidad});
             return  `Nombre: ${nombre} añadido con stock => ${cantidad}`;

        },
        venderproducto:function(nombre,cantidadVendida){
            for (let producto of productos) {
                if(producto.nombre ===nombre && producto.cantidad >=cantidadVendida ){
                    return producto.cantidad -= cantidadVendida;
                }
                else {
                    if (nombre !== producto.nombre) {
                        return "No existe el producto";
                    }
                    else {
                        return "Stock insuficinete"
                    }
                }

            }
        },
        verStock:function(){
            return productos
    }
    }
}
// Ejemplo de uso esperado:
const miTienda = crearInventario();

console.log(miTienda.agregarProducto("Camisetas", 20));
// Devuelve: "Producto 'Camisetas' añadido con stock: 20"

console.log(miTienda.agregarProducto("Pantalones", 10));
// Devuelve: "Producto 'Pantalones' añadido con stock: 10"

console.log(miTienda.venderproducto("Camisetas", 5));
// Devuelve: 15 (el stock restante)

console.log(miTienda.venderproducto("Pantalones", 15));
// Devuelve: "Stock insuficiente"

console.log(miTienda.verStock());
/* Devuelve:
[
  { nombre: "Camisetas", cantidad: 15 },
  { nombre: "Pantalones", cantidad: 10 }
]
*/

/*Ejercicio 7 => Vamos a llevar el inventario un pasito más allá añadiendo una regla de negocio inteligente. Mantendremos el mismo patrón de objetos y closures, pero esta vez con un método extra que evalúe el estado general de los productos.

Tu tarea:

Crea una función llamada crearAlmacenInteligente que inicialice un array privado let stock = [];.

Debe devolver un objeto con cuatro métodos:

agregar(articulo, cantidad):

Añade un objeto { articulo: articulo, cantidad: cantidad } al array privado.

Devuelve un string de confirmación, por ejemplo: "Artículo 'Teclados' registrado con 10 unidades.".

reabastecer(articulo, cantidadExtra):

Busca el artículo en el array privado. Si lo encuentra, suma la cantidadExtra a su cantidad actual y devuelve la nueva cantidad total.

Si no existe, devuelve "Artículo no encontrado".

retirar(articulo, cantidadRetiro):

Busca el artículo. Si lo encuentra y hay suficiente stock (cantidad >= cantidadRetiro), le resta la cantidad y devuelve el stock restante.

Si no hay suficiente stock, devuelve "Stock insuficiente". Si no existe, "Artículo no encontrado".

obtenerBajoStock(limite):

Recorre el array privado y devuelve un nuevo array con los nombres de los artículos cuya cantidad sea menor o igual al limite indicado.


function crearAlamacenInteligente() {
    let stock = [];
    return {
        agregar: function(articulo, cantidad) {
            stock.push({ articulo: articulo, cantidad: cantidad });
            return `Articulo => ${articulo} |||||| Cantidad => ${cantidad}`;
        },

        restablecer: function(articulo, cantidadExtra) {
            for (let stockElement of stock) {
                if (stockElement.articulo === articulo) {
                    // Actualizamos y devolvemos la nueva cantidad
                    stockElement.cantidad += cantidadExtra;
                    return stockElement.cantidad;
                }
            }
            return "Articulo no encontrado";
        },

        retirar: function(articulo, cantidadRetiro) {
            for (let stockElement of stock) {
                if (stockElement.articulo === articulo) {
                    // Validamos el stock
                    if (stockElement.cantidad >= cantidadRetiro) {
                        stockElement.cantidad -= cantidadRetiro; // ¡Actualizamos el stock real!
                        return stockElement.cantidad;
                    } else {
                        return "Stock insuficiente";
                    }
                }
            }
            return "Articulo no encontrado";
        },

        obtener: function(limite) {
            let alerta = []; // Array auxiliar para acumular los nombres
            for (let stockElement of stock) {
                // Usamos <= según la regla de negocio (menor o igual al límite)
                if (stockElement.cantidad <= limite) {
                    alerta.push(stockElement.articulo);
                }
            }
            return alerta; // Devuelve el array completo de golpe
        }
    }
}


// Ejemplo de uso esperado:
const miAlmacen = crearAlamacenInteligente();

console.log(miAlmacen.agregar("Mouse", 5));       // "Artículo 'Mouse' registrado con 5 unidades."
console.log(miAlmacen.agregar("Monitores", 3));    // "Artículo 'Monitores' registrado con 3 unidades."
console.log(miAlmacen.agregar("Cable HDMI", 25)); // "Artículo 'Cable HDMI' registrado con 25 unidades."

console.log(miAlmacen.restablecer("Mouse", 10));  // 15 (5 + 10)

console.log(miAlmacen.retirar("Monitores", 2));   // 1 (3 - 2)

// ¿Qué artículos tienen 5 unidades o menos?
console.log(miAlmacen.obtener(5))

 */

/*Ejercicio 8 => Vamos a aplicar el mismo patrón de objetos y closures, pero esta vez simulando un marcador en vivo donde los jugadores acumulan puntos dentro de una lista privada.

Tu tarea:

Crea una función llamada crearMarcador que inicialice un array privado let jugadores = [];.

Debe devolver un objeto con tres métodos:

registrarJugador(nombre):

Añade un objeto al array privado con la estructura: { nombre: nombre, puntaje: 0 }.

Devuelve un string de confirmación, por ejemplo: "Jugador 'Alex' registrado con éxito.".

ganarPuntos(nombre, puntos):

Recorre el array privado buscando al jugador por su nombre.

Si lo encuentra, suma los puntos al puntaje actual de ese jugador y devuelve su puntaje total actualizado.

Si el jugador no existe, devuelve "Jugador no encontrado".

verRanking():

Devuelve el array completo con todos los jugadores y sus puntajes actuales.


function crearMarcador(){
    let marcador = [];
    return {
        registrarJugador: function(nombre){
            marcador.push({nombre: nombre , puntaje:0});
            return `Nombre => ${nombre} registrado con éxito`;
        },
        ganarPuntos:function (nombre,puntos ){
            for (let marcadorElement of marcador) {
                if (marcadorElement.nombre === nombre){
                    return marcadorElement.puntaje += puntos ;
                }
            }
            return "Jugador no encontrado"
        },
        verRanking:function(){
            return marcador
        }
    }
}
const miMarcador = crearMarcador();
console.log(miMarcador.registrarJugador("Alex"));

console.log(miMarcador.registrarJugador("Lucia"));

console.log(miMarcador.ganarPuntos("Alex", 50));

console.log(miMarcador.ganarPuntos("Alex", 25));


console.log(miMarcador.ganarPuntos("Lucia", 100));


console.log(miMarcador.verRanking());

 */

/*Ejercicio 9 => Crea una función llamada crearBiblioteca que inicialice un array privado let catalogo = [];.

Debe devolver un objeto con cuatro métodos:

agregarLibro(titulo):

Añade un objeto al array privado con esta estructura: { titulo: titulo, prestado: false }.

Devuelve un string de confirmación, por ejemplo: "Libro 'El Quijote' añadido al catálogo.".

prestarLibro(titulo):

Recorre el array buscando el libro por su título.

Si lo encuentra y no está prestado (prestado: false), cambia su estado a true y devuelve "Libro prestado con éxito".

Si ya estaba prestado (prestado: true), devuelve "El libro ya está prestado".

Si el libro no existe en el catálogo, devuelve "Libro no encontrado".

devolverLibro(titulo):

Busca el libro. Si lo encuentra y estaba prestado (prestado: true), cambia su estado de vuelta a false y devuelve "Libro devuelto correctamente".

Si no estaba prestado o no existe, maneja el mensaje adecuado (por ejemplo, "Este libro no estaba prestado" o "Libro no encontrado").

verCatalogo():

Devuelve el array completo con todos los libros y sus estados actuales.



function crearBiblioteca(){
    let catalogo = [];
    return {
        agregarLibro: function(titulo){
            catalogo.push({ titulo: titulo, prestado: false });
            return `Libro '${titulo}' añadido al catálogo.`;
        },

        prestarLibro: function(titulo){
            for (let libro of catalogo) {
                // 1. Encontramos el libro por su título
                if (libro.titulo === titulo) {
                    // 2. Verificamos si ya estaba prestado
                    if (libro.prestado === true) {
                        return "El libro ya está prestado";
                    } else {
                        // 3. Si no estaba prestado, lo marcamos como prestado
                        libro.prestado = true;
                        return "Libro prestado con éxito";
                    }
                }
            }
            // 4. Si el bucle termina y nadie coincidió, el libro no existe
            return "Libro no encontrado";
        },

        devolverLibro: function(titulo){
            for (let libro of catalogo) {
                if (libro.titulo === titulo) {
                    if (libro.prestado === true) {
                        libro.prestado = false; // Cambiamos el estado de vuelta a false
                        return "Libro devuelto correctamente";
                    } else {
                        return "Este libro no estaba prestado";
                    }
                }
            }
            return "Libro no encontrado";
        },

        verCatalogo: function(){
            return catalogo;
        }
    }
}

// Ejemplo de prueba:
const miBiblioteca = crearBiblioteca();

console.log(miBiblioteca.agregarLibro("Cien años de soledad"));
console.log(miBiblioteca.agregarLibro("1984"));

console.log(miBiblioteca.prestarLibro("Cien años de soledad")); // "Libro prestado con éxito"
console.log(miBiblioteca.prestarLibro("Cien años de soledad")); // "El libro ya está prestado"
console.log(miBiblioteca.devolverLibro("Cien años de soledad")); // "Libro devuelto correctamente"

console.log(miBiblioteca.verCatalogo());
/* Devuelve:
[
  { titulo: 'Cien años de soledad', prestado: false },
  { titulo: '1984', prestado: false }
]
*/

/*Ejercicio 10 => Crea una función llamada crearControlAsistencia que inicialice un array privado let asistentes = [];.

Debe devolver un objeto con cuatro métodos:

registrarPersona(nombre):

Añade un objeto al array privado con la estructura: { nombre: nombre, presente: false }.

Devuelve un string de confirmación, por ejemplo: "Persona 'Carlos' registrada en el sistema.".

marcarAsistencia(nombre):

Busca a la persona en el array por su nombre.

Si la encuentra y no ha marcado asistencia (presente: false), cambia su estado a true y devuelve "Asistencia confirmada para Carlos".

Si ya había marcado asistencia (presente: true), devuelve "Esta persona ya registró su asistencia".

Si la persona no está registrada en el sistema, devuelve "Persona no encontrada".

contarPresentes():

Recorre el array privado y devuelve un número que representa cuántas personas tienen presente: true.

verLista():

Devuelve el array completo con todas las personas y sus estados actuales.



function crearControlAsistencia() {
    let asistentes = [];
    return {
        registrarPersona: function (nombre) {
            asistentes.push({nombre: nombre, presente: false});
            return `Persona => ${nombre} registrada en el sistema`
        },
        marcarAsistencia:function(nombre){
            let presente = true;
            for (let asistente of asistentes) {
                if(asistente.nombre === nombre && asistente.presente===false){
                    asistente.presente = presente;
                    return `Asistencia confirmada para ${nombre}`
                }
                if (asistente.presente === true){
                    return "Esta persona ya registró su asistencia "
                }

            }
            return "Persona no encontrada"
        },
        contarPresentes:function(){
            let suma = 0
            for (let asistente of asistentes) {
                if (asistente.presente === true) {
                    suma += 1

                }

            }
            return `Numero de presentes => ${suma}`
        },
        verLista: function(){
            return asistentes
        }

    }
}
const control = crearControlAsistencia();

console.log(control.registrarPersona("Carlos"));
// Devuelve: "Persona 'Carlos' registrada en el sistema."

console.log(control.registrarPersona("Ana"));
// Devuelve: "Persona 'Ana' registrada en el sistema."

console.log(control.marcarAsistencia("Carlos"));
// Devuelve: "Asistencia confirmada para Carlos"

console.log(control.marcarAsistencia("Carlos"));
// Devuelve: "Esta persona ya registró su asistencia"

console.log(control.contarPresentes());
// Devuelve: 1 (solo Carlos ha marcado asistencia)

console.log(control.verLista());
/* Devuelve:
[
  { nombre: "Carlos", presente: true },
  { nombre: "Ana", presente: false }
]
*/

/*Ejercicio 11 => Vamos a aplicar todo lo aprendido a un gestor de entretenimiento. Esta vez combinaremos el cambio de estados booleanos con el filtrado de elementos (similar a lo que hiciste con el stock bajo).

Tu tarea:

Crea una función llamada crearWatchlist que inicialice un array privado let peliculas = [];.

Debe devolver un objeto con cuatro métodos:

agregarPelicula(titulo):

Añade un objeto al array privado con la estructura: { titulo: titulo, vista: false }.

Devuelve un string de confirmación, por ejemplo: "Película 'Inception' añadida a la lista.".

marcarVista(titulo):

Busca la película en el array por su título.

Si la encuentra y no ha sido vista (vista: false), cambia su estado a true y devuelve "¡Película marcada como vista!".

Si ya había sido vista (vista: true), devuelve "Esta película ya la habías visto".

Si la película no existe, devuelve "Película no encontrada".

obtenerNoVistas():

Recorre el array privado y devuelve un nuevo array con los títulos de las películas que todavía tienen vista: false.

verTodas():

Devuelve el array completo con todas las películas y sus estados actuales.



function crearWatchlist(){
    let peliculas = [];
    return {
        agregarPelicula:function(titulo){
            peliculas.push({titulo:titulo,vista:false});
            return `Pelicula => ${titulo} añadido a tu lista`
        },
        marcarVista: function (titulo){
            let vista = false;
            for (let pelicula of peliculas) {
                if (pelicula.titulo === titulo && pelicula.vista === vista){
                    pelicula.vista = true;
                    return "Película marcada como vista;"
                }
                if(pelicula.vista === true){
                    return "Esta película ha sido vista"
                }

            }
            return "Película no encontrada"
        },
        obtenerNoVistas:function(){
            let novistas = [];
            for (let pelicula of peliculas) {
                if ( pelicula.vista === false){
                    novistas.push(pelicula);
                }
            }
            return novistas;
        },
        verTodas:function(){
            return peliculas
        }

    }
}
// Ejemplo de uso esperado:
const miLista = crearWatchlist();

console.log(miLista.agregarPelicula("Inception"));
// Devuelve: "Película 'Inception' añadida a la lista."

console.log(miLista.agregarPelicula("Matrix"));
// Devuelve: "Película 'Matrix' añadida a la lista."

console.log(miLista.marcarVista("Inception"));
// Devuelve: "¡Película marcada como vista!"

console.log(miLista.marcarVista("Inception"));
// Devuelve: "Esta película ya la habías visto"

console.log(miLista.obtenerNoVistas());
// Devuelve: [ "Matrix" ]

console.log(miLista.verTodas());
/* Devuelve:
[
  { titulo: "Inception", vista: true },
  { titulo: "Matrix", vista: false }
]
*/

/*Ejercicio 12 => Vamos a subir un peldaño combinando todo lo que has dominado: estado privado, manipulación de objetos, validación de estados y filtrado por categorías o condiciones.

Tu tarea:

Crea una función llamada crearGestorNotas que inicialice un array privado let notas = [];.

Debe devolver un objeto con cuatro métodos:

agregarNota(titulo, contenido):

Añade un objeto al array privado con la estructura: { titulo: titulo, contenido: contenido, completada: false }.

Devuelve un string de confirmación, por ejemplo: "Nota 'Compras' agregada con éxito.".

completarNota(titulo):

Busca la nota en el array por su título.

Si la encuentra y no está completada (completada: false), cambia su estado a true y devuelve "Nota marcada como completada".

Si ya estaba completada (completada: true), devuelve "Esta nota ya estaba completada".

Si la nota no existe, devuelve "Nota no encontrada".

obtenerPendientes():

Recorre el array privado y devuelve un nuevo array con los títulos de las notas que todavía tienen completada: false.

verTodas():

Devuelve el array completo con todas las notas y sus propiedades actuales.



function crearGestorNotas() {
    let notas = [];
    return {
        agregarNota: function (titulo, contenido) {
            notas.push({titulo: titulo, contenido: contenido, completada: false});
            return `Nota ${titulo} agregada con éxito`;
        },
        completarNota: function (titulo) {
            for (let nota of notas) {
                if (nota.titulo === titulo && nota.completada === false) {
                    nota.completada = true;
                    return "Nota marcada como completada";
                }
                if (nota.completada === true) {
                    return "Esta nota ya estaba completada ";
                }
            }
            return "Nota no encontrada";
        },
        obtenerPendientes() {
            let pendientes = [];
            for (let nota of notas) {
                if (nota.completada === false) {
                    pendientes.push(nota);
                }

            }
            return pendientes;
        },
        verTodas: function () {
            return notas;
        }
    }
}

const miAgenda = crearGestorNotas();

console.log(miAgenda.agregarNota("Estudiar", "Repasar closures de JavaScript"));
// Devuelve: "Nota 'Estudiar' agregada con éxito."

console.log(miAgenda.agregarNota("Gimnasio", "Ir a entrenar a las 18:00"));
// Devuelve: "Nota 'Gimnasio' agregada con éxito."

console.log(miAgenda.completarNota("Estudiar"));
// Devuelve: "Nota marcada como completada"

console.log(miAgenda.completarNota("Estudiar"));
// Devuelve: "Esta nota ya estaba completada"

console.log(miAgenda.obtenerPendientes());
// Devuelve: [ "Gimnasio" ]

console.log(miAgenda.verTodas());
/* Devuelve:
[
  { titulo: "Estudiar", contenido: "Repasar closures de JavaScript", completada: true },
  { titulo: "Gimnasio", contenido: "Ir a entrenar a las 18:00", completada: false }
]
*/

/*Ejercicio 13 => Vamos a subir el nivel integrando cálculos numéricos y multiplicaciones dentro de tus objetos privados. Esta es la prueba de fuego definitiva para dominar la lógica de carritos de e-commerce.

Tu tarea:

Crea una función llamada crearCarrito que inicialice un array privado let carrito = [];.

Debe devolver un objeto con cuatro métodos:

agregarItem(producto, precio, cantidad):

Añade un objeto al array privado con la estructura: { producto: producto, precio: precio, cantidad: cantidad }.

Devuelve un string de confirmación, por ejemplo: "Producto 'Zapatillas' añadido al carrito.".

actualizarCantidad(producto, nuevaCantidad):

Busca el producto en el array por su nombre.

Si lo encuentra, actualiza su cantidad al nuevo valor y devuelve "Cantidad actualizada".

Si no existe, devuelve "Producto no encontrado".

calcularTotal():

Recorre todo el array privado, multiplica el precio por la cantidad de cada producto, los suma todos y devuelve el precio total de la compra.

verCarrito():

Devuelve el array completo con todos los productos del carrito.


function crearCarrito(){
    let carrito = [];
    return {
        agregarItem: function(producto, precio, cantidad){
            carrito.push({ producto: producto, precio: precio, cantidad: cantidad });
            return `Producto '${producto}' añadido al carrito`;
        },

        actualizarCantidad: function(producto, nuevaCantidad){
            for (let carritoElement of carrito) {
                if (carritoElement.producto === producto){
                    carritoElement.cantidad = nuevaCantidad;
                    return "Cantidad actualizada";
                }
            }
            return "Producto no encontrado";
        },

        calcularTotal: function(){
            let suma = 0;
            for (let carritoElement of carrito) {
                // Multiplicamos cantidad por precio y acumulamos en suma
                let calculo = carritoElement.cantidad * carritoElement.precio;
                suma += calculo;
            }
            return suma; // ¡El return va FUERA del bucle para devolver el total de todo!
        },

        verCarrito: function(){
            return carrito;
        }
    };
}

// Ejemplo de prueba:
const miTienda = crearCarrito();

console.log(miTienda.agregarItem("Zapatillas", 50, 2)); // 50 * 2 = 100
console.log(miTienda.agregarItem("Camisa", 20, 3));    // 20 * 3 = 60

console.log(miTienda.actualizarCantidad("Zapatillas", 1)); // "Cantidad actualizada" (ahora es 50 * 1 = 50)

console.log(miTienda.calcularTotal());
// Devuelve: 110 (50 de las zapatillas + 60 de las camisas)

console.log(miTienda.verCarrito());

 */

/*Ejercicio 14 => Crea una función llamada crearToDoList que inicialice un array privado let tareas = [];.

Debe devolver un objeto con cuatro métodos:

agregarTarea(descripcion):

Añade un objeto al array privado con la estructura: { id: tareas.length + 1, descripcion: descripcion, completada: false }.

Devuelve un string de confirmación, por ejemplo: "Tarea 'Estudiar JS' agregada con éxito.".

completarTarea(id):

Busca la tarea en el array por su número de id.

Si la encuentra, cambia su propiedad completada a true y devuelve "Tarea completada".

Si no existe, devuelve "ID de tarea no encontrado".

eliminarTarea(id):

Busca la tarea por su id y la elimina del array privado (puedes investigar o usar métodos como .splice(), o recorrer para quitarla).

Devuelve "Tarea eliminada" o "Tarea no encontrada".

verTareas():

Devuelve el array completo con todas las tareas actuales.

function crearToDoList(){
    let tareas = []
    return {
        agregarTarea:function(descripcion){
            tareas.push({id:tareas.length+1 , descripcion:descripcion ,completada : false});
            return `Tarea ${descripcion} agregada con éxito`;
        },
        completarTarea:function(id){
            for (let tarea of tareas) {
                if(tarea.id === id && tarea.completada===false){
                    tarea.completada = true;
                    return "Tarea completada"
                }

            }
            return "ID tarea no encontrada"
        },
        eliminarTarea: function(id){
            for (let i = 0; i < tareas.length; i++) {
                if (tareas[i].id === id) {
                    tareas.splice(i, 1);
                    return "Tarea eliminada";
                }
            }
            return "Tarea no encontrada";
        },
        verTareas:function(){
            return tareas
        }
    }
}
// Ejemplo de uso esperado:
const miAgenda = crearToDoList();

console.log(miAgenda.agregarTarea("Aprender Closures"));
// Devuelve: "Tarea 'Aprender Closures' agregada con éxito."

console.log(miAgenda.agregarTarea("Practicar Arrays"));
// Devuelve: "Tarea 'Practicar Arrays' agregada con éxito."

console.log(miAgenda.completarTarea(1));
// Devuelve: "Tarea completada" (la tarea 1 ahora tiene completada: true)

console.log(miAgenda.eliminarTarea(2));
// Devuelve: "Tarea eliminada" (elimina la tarea con id 2)

console.log(miAgenda.verTareas());

 */

/*Ejercicio 15 => Crea una función llamada crearPlaylist que inicialice un array privado let canciones = [];.

Debe devolver un objeto con cuatro métodos:

agregarCancion(titulo, artista, duracion):

Añade un objeto al array privado con la estructura: { id: canciones.length + 1, titulo: titulo, artista: artista, duracion: duracion } (donde duracion es un número en minutos).

Devuelve un string de confirmación, por ejemplo: "Canción 'Bohemian Rhapsody' agregada.".

eliminarCancion(id):

Busca la canción por su id y la elimina del array privado usando un bucle tradicional y .splice().

Devuelve "Canción eliminada" o "Canción no encontrada".

calcularDuracionTotal():

Recorre todo el array privado, suma la duracion de todas las canciones y devuelve el total de minutos.

verPlaylist():

Devuelve el array completo con todas las canciones actuales.


function crearPlayList(){
    let canciones = [];
    return {
        agregarCancion:function(titulo,artista,duracion){
            canciones.push({id:canciones.length+1,titulo:titulo,artista:artista,duracion:duracion});
            return `Canción ${titulo} agregada.`
        },
        eliminarCancion:function(id){
            for(let i = 0; i < canciones.length; i++){
                if(canciones[i].id === id){
                    canciones.splice(i,1);
                    return `Canción eliminada `;
                }
            }
        },
        calcularDuracionTotal:function(){
            let suma =0;
            for (let cancion of canciones) {
            suma += cancion.duracion

            }
            return suma;
        },
        verPlaylist:function(){
            return canciones
        }

    }
}
// Ejemplo de uso esperado:
const miMusica = crearPlayList();

console.log(miMusica.agregarCancion("Bohemian Rhapsody", "Queen", 6));
// Devuelve: "Canción 'Bohemian Rhapsody' agregada."

console.log(miMusica.agregarCancion("Stairway to Heaven", "Led Zeppelin", 8));
// Devuelve: "Canción 'Stairway to Heaven' agregada."

console.log(miMusica.eliminarCancion(1));
// Devuelve: "Canción eliminada" (elimina la canción con id 1)

console.log(miMusica.calcularDuracionTotal());
// Devuelve: 8 (solo queda la canción de Led Zeppelin)

console.log(miMusica.verPlaylist());
/* Devuelve:
[
  { id: 2, titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 8 }
]
*/

/*Ejercicio 16 => Crea una función llamada crearInventario que inicialice un array privado let productos = [];.

Debe devolver un objeto con cuatro métodos:

agregarProducto(nombre, precio, stock):

Añade un objeto al array privado con la estructura: { id: productos.length + 1, nombre: nombre, precio: precio, stock: stock }.

Devuelve un string de confirmación, por ejemplo: "Producto 'Laptop' añadido al inventario.".

venderProducto(id, cantidad):

Busca el producto por su id.

Si lo encuentra y el stock actual es mayor o igual a la cantidad solicitada, resta esa cantidad al stock y devuelve "Venta realizada con éxito".

Si no hay suficiente stock, devuelve "Stock insuficiente".

Si el producto no existe, devuelve "Producto no encontrado".

eliminarProducto(id):

Busca el producto por su id y lo elimina del array privado usando un bucle tradicional y .splice().

Devuelve "Producto eliminado del inventario" o "Producto no encontrado".

valorTotalInventario():

Recorre todo el array privado, multiplica el precio por el stock de cada producto, los suma todos y devuelve el valor monetario total de todo lo que hay en el inventario.

function crearInventario(){
    let productos = [];
    return {
        agregarProducto: function(nombre, precio, stock){
            productos.push({ id: productos.length + 1, nombre: nombre, precio: precio, stock: stock });
            return `Producto => ${nombre} añadido al inventario`;
        },

        venderProducto: function(id, cantidad){
            for (let producto of productos) {
                // 1. Buscamos por id
                if (producto.id === id) {
                    // 2. Validamos si hay suficiente stock
                    if (producto.stock >= cantidad) {
                        producto.stock -= cantidad;
                        return "Venta realizada con éxito";
                    } else {
                        return "Stock insuficiente";
                    }
                }
            }
            return "Producto no encontrado";
        },

        eliminarProducto: function(id){
            for (let i = 0; i < productos.length; i++) {
                // Comparamos el id del elemento actual del array (productos[i])
                if (productos[i].id === id) {
                    productos.splice(i, 1);
                    return "Producto eliminado del inventario";
                }
            }
            return "Producto no encontrado";
        },

        valorTotalInventario: function(){
            let suma = 0;
            for (let producto of productos) {
                // Multiplicamos precio por stock y acumulamos en suma
                let calculo = producto.precio * producto.stock;
                suma += calculo;
            }
            return suma; // El return va FUERA del bucle para devolver el total final
        }
    };
}

// Ejemplo de prueba:
const miInventario = crearInventario();

console.log(miInventario.agregarProducto("Laptop", 1000, 5));
console.log(miInventario.agregarProducto("Mouse", 20, 10));

console.log(miInventario.venderProducto(1, 2)); // "Venta realizada con éxito" (stock de Laptop pasa a 3)

console.log(miInventario.valorTotalInventario()); // 3200 (1000 * 3 + 20 * 10)

console.log(miInventario.eliminarProducto(2)); // "Producto eliminado del inventario"

 */

/*Ejercicio 18 => Crea una función llamada crearBibliotecaAvanzada que inicialice un array privado let catalogo = [];.

Debe devolver un objeto con cinco métodos:

agregarLibro(titulo, autor):

Añade un objeto al array privado con la estructura: { id: catalogo.length + 1, titulo: titulo, autor: autor, prestado: false }.

Devuelve un string de confirmación, por ejemplo: "Libro 'El Principito' añadido al catálogo.".

prestarLibro(id):

Busca el libro en el array por su id.

Si lo encuentra y no está prestado (prestado: false), cambia su estado a true y devuelve "Libro prestado con éxito".

Si ya estaba prestado (prestado: true), devuelve "El libro ya está prestado".

Si el libro no existe, devuelve "Libro no encontrado".

devolverLibro(id):

Busca el libro por su id.

Si lo encuentra y estaba prestado (prestado: true), cambia su estado de vuelta a false y devuelve "Libro devuelto correctamente".

Si no estaba prestado o no existe, devuelve el mensaje correspondiente.

eliminarLibro(id):

Busca el libro por su id y lo elimina del array privado usando un bucle tradicional y .splice().

Devuelve "Libro eliminado del catálogo" o "Libro no encontrado".

verCatalogo():

Devuelve el array completo con todos los libros y sus estados actuales.



function crearBibliotecaAvanzada(){
    let catalogo = []
    return {
        agregarLibro : function(titulo,autor){
            catalogo.push({id:catalogo.length+1, titulo:titulo, autor:autor,prestado:false});
            return `Libro ${titulo} añadido al catalogo`;
        },
        prestarLibro:function (id){
            for (let libros of catalogo) {
                if(libros.id ===id && libros.prestado===false){
                    libros.prestado = true;
                    return "Libro prestado con éxito"
                }
                if(libros.prestado===true){
                    return `El libro ya esta prestado`
                }
            }
            return "Libro no encontrado"
        },
        devolverLibro:function (id){
            for (let catalogo1 of catalogo) {
                if(catalogo1.id ===id&&catalogo1.prestado===true) {
                    catalogo1.prestado = false;
                    return "Libro devuelto con éxito"
                }
            }
            return "No estaba prestado"
        },
        eliminarLibro : function(id){
            for(let i=0; i<catalogo.length; i++){
                if(catalogo[i].id ===id){
                    catalogo.splice(i,1);
                    return "Libro eliminado con éxito"
                }
            }
        },
        verCatalogo : function(){
            return catalogo
        }
    }
}
// Ejemplo de uso esperado:
const biblioteca = crearBibliotecaAvanzada();

console.log(biblioteca.agregarLibro("El Principito", "Antoine de Saint-Exupéry"));
// Devuelve: "Libro 'El Principito' añadido al catálogo."

console.log(biblioteca.agregarLibro("Rayuela", "Julio Cortázar"));
// Devuelve: "Libro 'Rayuela' añadido al catálogo."

console.log(biblioteca.prestarLibro(1));
// Devuelve: "Libro prestado con éxito" (El Principito queda con prestado: true)

console.log(biblioteca.prestarLibro(1));
// Devuelve: "El libro ya está prestado"

console.log(biblioteca.devolverLibro(1));
// Devuelve: "Libro devuelto correctamente"

console.log(biblioteca.eliminarLibro(2));
// Devuelve: "Libro eliminado del catálogo" (elimina Rayuela)

console.log(biblioteca.verCatalogo());
/* Devuelve:
[
  { id: 1, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", prestado: false }
]
*/

/*Ejercicio 19 => Crea una función llamada crearGestionEmpleados que inicialice un array privado let empleados = [];.

Debe devolver un objeto con cinco métodos:

contratarEmpleado(nombre, puesto, salario):

Añade un objeto al array privado con la estructura: { id: empleados.length + 1, nombre: nombre, puesto: puesto, salario: salario, activo: true }.

Devuelve un string de confirmación, por ejemplo: "Empleado 'Carlos' contratado con éxito.".

cambiarPuesto(id, nuevoPuesto):

Busca al empleado en el array por su id.

Si lo encuentra, actualiza su propiedad puesto al nuevo valor y devuelve "Puesto actualizado con éxito".

Si no existe, devuelve "Empleado no encontrado".

despedirEmpleado(id):

Busca al empleado por su id y lo elimina del array privado usando un bucle tradicional y .splice().

Devuelve "Empleado dado de baja" o "Empleado no encontrado".

calcularNominaTotal():

Recorre todo el array privado, suma el salario de todos los empleados que estén con activo: true y devuelve el costo total mensual de las nóminas.

verEmpleados():

Devuelve el array completo con todos los empleados actuales.


function crearGestionEmpleado(){
    let empleados = [];
    return{
        contratarEmpleados:function (nombre,puesto,salario){
            empleados.push({id:empleados.length+1,nombre:nombre,puesto:puesto,salario:salario, activo:true});
            return `Empleado ${nombre} contratado con éxito`
        },
        cambiarPuesto:function (id,nuevoPuesto){
            for (let empleado of empleados) {
                if(empleado.id===id){
                    empleado.puesto = nuevoPuesto
                    return "Puesto actualizado"
                }
            }
            return  "Empleado no encontrado"
        },
        despedirEmpleado:function(id){
            for(let i=0;i<empleados.length;i++){
                if(empleados[i].id===id){
                    empleados.splice(i,1)
                    return "Empleado dado de baja"
                }
            }
        },
        calcularNominaTotal:function (){
            let suma =0
            for (let empleado of empleados) {
                if(empleado.activo===true){
                     suma+=empleado.salario
                }
            }return suma

        },
        verEmpleados:function (){
            return empleados
        }

    }
}
// Ejemplo de uso esperado:
const empresa = crearGestionEmpleado();

console.log(empresa.contratarEmpleados("Ana", "Desarrolladora", 3000));
// Devuelve: "Empleado 'Ana' contratado con éxito."

console.log(empresa.contratarEmpleados("Luis", "Diseñador", 2500));
// Devuelve: "Empleado 'Luis' contratado con éxito."

console.log(empresa.cambiarPuesto(1, "Senior Developer"));
// Devuelve: "Puesto actualizado con éxito"

console.log(empresa.calcularNominaTotal());
// Devuelve: 5500 (3000 + 2500)

console.log(empresa.despedirEmpleado(2));
// Devuelve: "Empleado dado de baja" (elimina a Luis)

console.log(empresa.verEmpleados());
/* Devuelve:
[
  { id: 1, nombre: "Ana", puesto: "Senior Developer", salario: 3000, activo: true }
]
*/

/*Ejercicio 20 => Crea una función llamada crearBibliotecaMaestra que inicialice dos arrays privados:

let catalogo = []; (para los libros)

let historial = []; (para guardar un registro de texto cada vez que se preste o devuelva un libro).

Debe devolver un objeto con cinco métodos:

agregarLibro(titulo, autor):

Añade un objeto al catálogo con la estructura: { id: catalogo.length + 1, titulo: titulo, autor: autor, prestado: false }.

Devuelve un string de confirmación, por ejemplo: "Libro 'Dune' agregado al catálogo.".

prestarLibro(id, usuario):

Busca el libro por su id.

Si el libro existe y no está prestado (prestado: false), cambia su estado a true, añade un mensaje al array historial (por ejemplo: "El usuario Carlos pidió el libro ID 1") y devuelve "Préstamo exitoso".

Si ya estaba prestado, devuelve "El libro ya está prestado".

Si no existe, devuelve "Libro no encontrado".

devolverLibro(id):

Busca el libro por su id.

Si existe y estaba prestado (prestado: true), cambia su estado a false, añade un registro al historial (por ejemplo: "Se devolvió el libro ID 1") y devuelve "Libro devuelto con éxito".

Si no estaba prestado o no existe, devuelve el mensaje correspondiente.

verHistorial():

Devuelve el array completo con todos los mensajes acumulados en el historial.

verCatalogo():

Devuelve el array completo con todos los libros y sus estados actuales.


function crearBibliotecaMaestra() {
    let catalogo = [];
    let historial =[];
    return {
        agregarLibro:function(titulo,autor){
            catalogo.push({id:catalogo.length+1,titulo:titulo,autor:autor,prestado:false});
            return `Libro ${titulo} agregado al catalogo`;
        },
        prestarLibro: function (id,usuario){
            for (let catalogo1 of catalogo) {
                if(catalogo1.id === id && catalogo1.prestado===false){
                    catalogo1.prestado = true;
                     historial.push(`El usuario ${usuario} pidio el libro con id => ${catalogo1.id}`)
                    return "Prestamo exitoso"
                }
                if(catalogo1.prestado===false){
                    return "El libro ya esta prestado"
                }
            }
            return "Libro no encontrado"
        },
        devolverLibro:function(id){
            for (let catalogo1 of catalogo) {
                if(catalogo1.id === id && catalogo1.prestado===true){
                    catalogo1.prestado = false;
                   return historial.push(`Se devolvio el libro ID => ${catalogo1.id}`)
                }
                if(catalogo1.id === id && catalogo1.prestado===false){
                    return "El libro no esta prestado"
                }
            }

        },
        verHistorial:function(){
            return historial
        },
        verCatalogo:function(){
            return catalogo
        }

    }
}
// Ejemplo de uso esperado:
const biblioteca = crearBibliotecaMaestra();
console.log( biblioteca.verCatalogo())

console.log(biblioteca.agregarLibro("Dune", "Frank Herbert"));
// Devuelve: "Libro 'Dune' agregado al catálogo."

console.log(biblioteca.agregarLibro("1984", "George Orwell"));
// Devuelve: "Libro '1984' agregado al catálogo."

console.log(biblioteca.prestarLibro(1, "Ana"));
// Devuelve: "Préstamo exitoso"

console.log(biblioteca.prestarLibro(1, "Luis"));
// Devuelve: "El libro ya está prestado"

console.log(biblioteca.devolverLibro(1));
// Devuelve: "Libro devuelto con éxito"

console.log(biblioteca.verHistorial());
/* Devuelve:
[
  "El usuario Ana pidió el libro ID 1",
  "Se devolvió el libro ID 1"
]
*/

/*Ejercicio 21 => Crea una función llamada crearCuentaBancaria que reciba un titular y un saldo inicial, e inicialice dos elementos privados:

let saldo = saldoInicial; (un número)

let transacciones = []; (un array para guardar mensajes de cada movimiento).

Debe devolver un objeto con cuatro métodos:

depositar(monto):

Si el monto es mayor a 0, suma esa cantidad al saldo, añade un registro al array transacciones (por ejemplo: "Depósito de $500") y devuelve el nuevo saldo o un mensaje de éxito.

Si el monto es menor o igual a 0, devuelve "Monto inválido".

retirar(monto):

Si el monto es mayor a 0 y es menor o igual al saldo actual, resta esa cantidad al saldo, añade un registro al historial (por ejemplo: "Retiro de $200") y devuelve "Retiro exitoso".

Si intentas retirar más de lo que tienes, devuelve "Fondos insuficientes".

Si el monto es inválido, devuelve "Monto inválido".

verSaldo():

Devuelve el saldo actual de la cuenta.

verHistorial():

Devuelve el array completo con todas las transacciones realizadas.



function crearCuentaBancaria(titular, saldoInicial){
    let saldo = saldoInicial;
    let transacciones = [];

    return {
        depositar: function(monto){
            if (monto > 0){
                saldo += monto;
                transacciones.push(`Depósito de $${monto}`);
                return "Depósito realizado con éxito";
            }
            return "Monto inválido";
        },

        retirar: function(monto){
            if (monto <= 0) {
                return "Monto inválido";
            }
            if (monto > saldo) {
                return "Fondos insuficientes";
            }

            saldo -= monto;
            transacciones.push(`Retiro de $${monto}`);
            return "Retiro exitoso";
        },

        verSaldo: function(){
            return saldo;
        },

        verHistorial: function(){
            return transacciones;
        }
    };
}
// Ejemplo de uso esperado:
const miCuenta = crearCuentaBancaria("Carlos", 1000);

console.log(miCuenta.depositar(500));
// Devuelve: "Depósito realizado con éxito" (Saldo pasa a 1500)

console.log(miCuenta.retirar(200));
// Devuelve: "Retiro exitoso" (Saldo pasa a 1300)

console.log(miCuenta.retirar(2000));
// Devuelve: "Fondos insuficientes"

console.log(miCuenta.verSaldo());
// Devuelve: 1300

console.log(miCuenta.verHistorial());
/* Devuelve:
[
  "Depósito de $500",
  "Retiro de $200"
]
*/

/*Ejercicio 22 => Crea una función llamada crearCarritoDeCompras que inicialice tres elementos privados:

let catalogoTienda = []; (los productos disponibles para comprar)

let carrito = []; (los productos que el usuario va añadiendo a su bolsa)

let descuentoAplicado = 0; (un número que guardará el porcentaje de descuento, por ejemplo, 0.10 para un 10%)

Debe devolver un objeto con seis métodos:

agregarProductoTienda(nombre, precio, stock):

Añade un producto al catalogoTienda con { id: catalogoTienda.length + 1, nombre: nombre, precio: precio, stock: stock }.

Devuelve un string de confirmación, por ejemplo: "Producto 'Zapatillas' añadido a la tienda.".

agregarAlCarrito(idProducto, cantidad):

Busca el producto en el catalogoTienda por su id.

Si existe y su stock es mayor o igual a la cantidad solicitada:

Resta esa cantidad al stock del producto en la tienda.

Lo añade al carrito (puedes guardar el id, nombre, precio unitario y la cantidad comprada).

Devuelve "Producto añadido al carrito".

Si no hay suficiente stock o no existe, devuelve el mensaje correspondiente.

eliminarDelCarrito(id):

Busca el producto dentro del carrito por su id y lo elimina usando un bucle tradicional y .splice().

(Opcional/Pro: si quieres hilar fino, podrías devolver su stock al catálogo, pero por ahora con eliminarlo del carrito y devolver "Producto eliminado del carrito" es perfecto).

aplicarCupon(codigo):

Si el código es "PROMO10", cambia descuentoAplicado a 0.10 (10% de descuento) y devuelve "Cupón aplicado: 10% de descuento".

Si el código es inválido, devuelve "Cupón inválido".

calcularTotal():

Recorre los productos del carrito, multiplica el precio por la cantidad de cada uno para sacar el subtotal, y luego aplica el descuentoAplicado si lo hubiera.

Devuelve el precio final a pagar (número).

verCarrito():

Devuelve el array completo del carrito.



function crearCarritoDeCompras(){
    let catalogoTienda = [];
    let carrito = [];
    let descuentoAplicado = 0;

    return{
        agregarProductoTienda: function(nombre, precio, stock){
            catalogoTienda.push({ id: catalogoTienda.length + 1, nombre: nombre, precio: precio, stock: stock });
            return `Producto ${nombre} añadido a la tienda`;
        },

        agregarAlCarrito: function(idProducto, cantidad){
            for (let tienda of catalogoTienda) {
                if (tienda.id === idProducto) {
                    if (tienda.stock >= cantidad) {
                        tienda.stock -= cantidad; // Descontamos stock
                        // Guardamos un objeto estructurado en el carrito
                        carrito.push({ id: tienda.id, nombre: tienda.nombre, precio: tienda.precio, cantidad: cantidad });
                        return "Producto añadido al carrito";
                    } else {
                        return "Stock insuficiente";
                    }
                }
            }
            return "Producto no encontrado";
        },

        eliminarDelCarrito: function(id){
            for (let i = 0; i < carrito.length; i++) {
                if (carrito[i].id === id){
                    carrito.splice(i, 1);
                    return "Producto eliminado del carrito";
                }
            }
            return "Producto no encontrado en el carrito";
        },

        aplicarCupon: function(codigo){
            if (codigo === "PROMO10"){
                descuentoAplicado = 0.10;
                return "Cupón aplicado: 10% de descuento";
            } else {
                return "Cupón no válido";
            }
        },

        calcularTotal: function(){
            let suma = 0;
            for (let item of carrito) {
                // Multiplicamos el precio por la cantidad comprada de cada item
                suma += item.precio * item.cantidad;
            }
            // Aplicamos el descuento correctamente restando el porcentaje al total
            let totalConDescuento = suma - (suma * descuentoAplicado);
            return totalConDescuento;
        },

        verCarrito: function(){
            return carrito;
        }
    };
}
// Ejemplo de uso esperado:
const miTienda = crearCarritoDeCompras();

console.log(miTienda.agregarProductoTienda("Camisa", 50, 10));
console.log(miTienda.agregarProductoTienda("Pantalón", 80, 5));

console.log(miTienda.agregarAlCarrito(1, 2)); // Añade 2 Camisas al carrito (Stock de camisa baja a 8)
console.log(miTienda.agregarAlCarrito(2, 1)); // Añade 1 Pantalón al carrito (Stock de pantalón baja a 4)

console.log(miTienda.calcularTotal()); // Debe dar 180 (50*2 + 80*1)

console.log(miTienda.aplicarCupon("PROMO10")); // "Cupón aplicado: 10% de descuento"
console.log(miTienda.calcularTotal()); // Debe dar 162 (180 - 10%)

console.log(miTienda.verCarrito());

 */

/*Ejercicio 23 => Crea una función llamada crearPersonajeRPG(nombre) que reciba el nombre del personaje y mantenga los siguientes elementos privados:

let nombreHeroe = nombre;

let nivel = 1;

let experiencia = 0;

let oro = 100; (empieza con 100 monedas)

let inventario = []; (array de objetos para guardar los objetos comprados/conseguidos)

Debe devolver un objeto con cinco métodos:

ganarExperiencia(puntos):

Suma los puntos a experiencia.

Si la experiencia acumulada llega a 100 o más, el personaje sube de nivel (nivel++), la experiencia se reinicia (o se le resta 100 para guardar el sobrante) y devuelve "¡Subiste de nivel! Ahora eres nivel X". Si no sube de nivel, devuelve "Experiencia ganada con éxito".

comprarItem(nombreItem, costo):

Si el aventurero tiene suficiente oro (oro >= costo), le resta el costo al oro, añade un objeto al inventario ({ id: inventario.length + 1, nombre: nombreItem }) y devuelve "Item comprado con éxito".

Si no tiene suficiente oro, devuelve "Oro insuficiente".

usarItem(id):

Busca el objeto en el inventario por su id usando un bucle tradicional y lo elimina con .splice().

Devuelve "Item utilizado y eliminado del inventario" o "Item no encontrado".

ganarOro(cantidad):

Suma la cantidad de monedas al oro privado y devuelve el nuevo total de oro.

verEstado():

Devuelve un resumen con el estado actual del héroe: { nombre: nombreHeroe, nivel: nivel, experiencia: experiencia, oro: oro, inventario: inventario }.



function crearPersonajeRPG(nombre){
    let nombreHeroe = nombre;
    let nivel = 1;
    let experiencia = 0;
    let oro = 100;
    let inventario = [];

    return {
        ganarExperiencia: function(puntos){
            experiencia += puntos;
            if (experiencia >= 100){
                nivel++;
                experiencia -= 100; // Guardamos el sobrante de experiencia
                return `¡Subiste de nivel! Ahora eres nivel ${nivel}`;
            } else {
                return "Experiencia ganada con éxito";
            }
        },

        comprarItem: function(nombreItem, costo){
            if (oro >= costo){
                oro -= costo;
                inventario.push({ id: inventario.length + 1, nombre: nombreItem });
                return "Item comprado con éxito";
            } else {
                return "Oro insuficiente";
            }
        },

        usarItem: function(id){
            for (let i = 0; i < inventario.length; i++){
                if (inventario[i].id === id){
                    inventario.splice(i, 1);
                    return "Item utilizado y eliminado del inventario";
                }
            }
            return "Item no encontrado";
        },

        ganarOro: function(cantidad){
            oro += cantidad;
            return oro;
        },

        verEstado: function(){
            // Devolvemos el objeto directamente sin envolverlo en un array
            return {
                nombre: nombreHeroe,
                nivel: nivel,
                experiencia: experiencia,
                oro: oro,
                inventario: inventario
            };
        }
    };
}
// Ejemplo de uso esperado:
const heroe = crearPersonajeRPG("Aragorn");

console.log(heroe.comprarItem("Espada de Hierro", 60));
// Devuelve: "Item comprado con éxito" (Oro baja a 40)

console.log(heroe.comprarItem("Poción de Vida", 50));
// Devuelve: "Oro insuficiente"

console.log(heroe.ganarOro(100)); // Oro sube a 140
console.log(heroe.ganarExperiencia(120)); // "¡Subiste de nivel! Ahora eres nivel 2"

console.log(heroe.verEstado());
/* Devuelve:
{
  nombre: "Aragorn",
  nivel: 2,
  experiencia: 20,
  oro: 140,
  inventario: [
    { id: 1, nombre: "Espada de Hierro" }
  ]
}
*/

/*Ejercicio 24 => Crea una función llamada crearGestorTareas que inicialice un array privado:

let tareas = []; (para guardar los objetos de las tareas).

Debe devolver un objeto con cinco métodos:

agregarTarea(titulo, prioridad):

Añade un objeto al array privado con la estructura: { id: tareas.length + 1, titulo: titulo, prioridad: prioridad, completada: false } (la prioridad puede ser "alta", "media" o "baja").

Devuelve un string de confirmación, por ejemplo: "Tarea 'Estudiar JS' agregada.".

completarTarea(id):

Busca la tarea en el array por su id.

Si la encuentra, cambia su propiedad completar o completada a true y devuelve "Tarea marcada como completada".

Si no existe, devuelve "Tarea no encontrada".

eliminarTarea(id):

Busca la tarea por su id y la elimina del array privado usando un bucle tradicional y .splice().

Devuelve "Tarea eliminada" o "Tarea no encontrada".

filtrarPorPrioridad(nivelPrioridad):

Recorre el array privado y devuelve un nuevo array únicamente con las tareas que coincidan con la prioridad indicada (por ejemplo, todas las de prioridad "alta").

verTodas():

Devuelve el array completo con todas las tareas actuales.


function crearGestorTareas(){
    let tareas = [];
    return {
        agregarTarea:function (titulo,prioridad){
            tareas.push({id:tareas.length+1,titulo:titulo,prioridad:prioridad, completada:false});
            return `Tarea ${titulo} y priordad ${prioridad} agregada`
        },
        completarTarea:function (id){
            for (let tarea of tareas) {
                if(tarea.id === id && tarea.completada===false){
                    tarea.completada=true
                    return `Tarea marcada como completada ${id}`;
                }

            }
            return "Tarea no completada";
        },
        eliminarTarea:function (id){
            for(let i =0; i < tareas[i].completada;i++){
                if(tareas[i].id === id){
                    tareas.splice(i,1);

                }
            }return `Tarea eliminada ${id} `;
        },
        filtrarPorPrioridad:function(nivelPrioridad){
            let lista = [];
            for (let tarea of tareas) {
                if(tarea.prioridad===nivelPrioridad){
                    lista.push(tarea);
                }
            }
            return lista;
        },
        verTodas: function(){
            return tareas
        }
    }
}
// Ejemplo de uso esperado:
const miGestor = crearGestorTareas();

console.log(miGestor.agregarTarea("Aprender Closures", "alta"));
console.log(miGestor.agregarTarea("Comprar pan", "baja"));
console.log(miGestor.agregarTarea("Revisar código", "alta"));

console.log(miGestor.completarTarea(1)); // "Tarea marcada como completada"
console.log(miGestor.verTodas());
console.log(miGestor.filtrarPorPrioridad("alta"));
/* Devuelve un array con:
[
  { id: 1, titulo: "Aprender Closures", prioridad: "alta", completada: true },
  { id: 3, titulo: "Revisar código", prioridad: "alta", completada: false }
]


console.log(miGestor.eliminarTarea(2)); // "Tarea eliminada" (borra la de comprar pan)


 */

/*Ejercicio 25 => Crea una función llamada crearReproductor que inicialice tres elementos privados:

let playlist = []; (para guardar las canciones)

let indiceActual = 0; (un número que indica la posición de la canción que está sonando actualmente, empezando en 0)

let historialReproduccion = []; (un array para guardar los títulos de las canciones que ya se han reproducido).

Debe devolver un objeto con seis métodos:

agregarCancion(titulo, artista):

Añade un objeto al array playlist con la estructura: { id: playlist.length + 1, titulo: titulo, artista: artista }.

Devuelve un string de confirmación, por ejemplo: "Canción 'Bohemian Rhapsody' añadida a la playlist.".

reproducirActual():

Comprueba si la playlist tiene canciones.

Si hay canciones, toma la canción en la posición de indiceActual, añade su título al historialReproduccion y devuelve un mensaje como: "Reproduciendo: [Título] de [Artista]".

Si la playlist está vacía, devuelve "No hay canciones en la playlist".

siguienteCancion():

Avanza el indiceActual en 1 para que apunte a la siguiente canción.

Si el indiceActual supera o iguala la longitud de la playlist, puedes hacer que vuelva a empezar desde 0 (bucle infinito).

Devuelve un mensaje indicando la nueva canción o "Fin de la playlist".

eliminarCancion(id):

Busca la canción en la playlist por su id usando un bucle tradicional y la elimina con .splice().

(Opcional Pro: si eliminas la canción actual o una anterior, puedes ajustar el indiceActual si es necesario, pero con eliminarla del array y devolver "Canción eliminada" es perfecto).

verHistorial():

Devuelve el array completo del historialReproduccion.

verPlaylist():

Devuelve el array completo de la playlist.


function crearReproductor(){
    let playlist = [];
    let indiceActual = 0; // Ojo con el nombre, cuidamos que no se cuele una 'i' de más
    let historialReproduccion = [];

    return {
        agregarCancion: function(titulo, artista){
            playlist.push({ id: playlist.length + 1, titulo: titulo, artista: artista });
            return `Canción '${titulo}' agregada con éxito a la playlist`;
        },

        reproducirActual: function(){
            if (playlist.length > 0){
                // Guardamos el título de la canción actual en el historial
                historialReproduccion.push(playlist[indiceActual].titulo);
                // Devolvemos el mensaje usando la posición exacta con [indiceActual]
                return `Reproduciendo: ${playlist[indiceActual].titulo} de ${playlist[indiceActual].artista}`;
            } else {
                return "No hay canciones en la playlist";
            }
        },

        siguienteCancion: function(){
            if (playlist.length === 0) {
                return "No hay canciones en la playlist";
            }

            indiceActual++;

            // Si llegamos al final del array, volvemos al principio (bucle infinito)
            if (indiceActual >= playlist.length) {
                indiceActual = 0;
            }

            // Reproducimos la nueva canción actual
            historialReproduccion.push(playlist[indiceActual].titulo);
            return `Reproduciendo: ${playlist[indiceActual].titulo} de ${playlist[indiceActual].artista}`;
        },

        eliminarCancion: function(id){
            for (let i = 0; i < playlist.length; i++){
                if (playlist[i].id === id){
                    playlist.splice(i, 1);
                    // Si eliminamos una canción anterior o la actual, ajustamos el índice si es necesario
                    if (indiceActual >= playlist.length && playlist.length > 0) {
                        indiceActual = playlist.length - 1;
                    }
                    return "Canción eliminada de la playlist";
                }
            }
            return "Canción no encontrada";
        },

        verHistorial: function(){
            return historialReproduccion;
        },

        verPlaylist: function(){
            return playlist;
        }
    };
}

// Ejemplo de prueba:
const miMusica = crearReproductor();

console.log(miMusica.agregarCancion("Blinding Lights", "The Weeknd"));
console.log(miMusica.agregarCancion("STAY", "The Kid LAROI"));

console.log(miMusica.reproducirActual()); // "Reproduciendo: Blinding Lights de The Weeknd"
console.log(miMusica.siguienteCancion()); // "Reproduciendo: STAY de The Kid LAROI"
console.log(miMusica.verHistorial());     // ["Blinding Lights", "STAY"]

 */

/*Ejercicio 26 => Crea una función llamada crearBiblioteca() que inicialice tres elementos privados:

let catalogoLibros = []; (para guardar los libros disponibles)

let prestamosActivos = []; (para llevar el registro de qué libros y usuarios tienen préstamos activos)

let historialTotal = []; (un registro general de todas las operaciones realizadas)

Debe devolver un objeto con cinco métodos:

agregarLibro(titulo, autor, copias):

Añade un objeto al catalogoLibros con la estructura: { id: catalogoLibros.length + 1, titulo: titulo, autor: autor, copiasDisponibles: copias }.

Devuelve un string de confirmación, por ejemplo: "Libro 'Cien Años de Soledad' añadido al catálogo.".

prestarLibro(idLibro, nombreUsuario):

Busca el libro en el catalogoLibros por su id.

Si existe y sus copiasDisponibles son mayores a 0:

Resta 1 a las copias disponibles del libro.

Añade un registro a prestamosActivos con { idPrestamo: prestamosActivos.length + 1, idLibro: idLibro, usuario: nombreUsuario }.

Registra un mensaje en el historialTotal (por ejemplo: "Préstamo: 'Cien Años de Soledad' a Juan").

Devuelve "Préstamo realizado con éxito".

Si no hay copias o no existe el libro, devuelve "Libro no disponible o sin stock".

devolverLibro(idPrestamo):

Busca el préstamo en prestamosActivos por su idPrestamo usando un bucle tradicional y lo elimina con .splice().

Al encontrarlo, busca de nuevo el libro correspondiente en el catalogoLibros por su idLibro y le devuelve la copia sumando 1 (copiasDisponibles++).

Registra la devolución en el historialTotal y devuelve "Libro devuelto correctamente".

Si no encuentra el préstamo, devuelve "Registro de préstamo no encontrado".

verCatalogo():

Devuelve el array completo con el estado actual del catalogoLibros.

verHistorial():

Devuelve el array completo con el historialTotal.

function crearBiblioteca(){
    let catalogo = [];
    let prestamos_activos =[];
    let historialTotal=[];

    return{
        agregarLibro:function (titulo,autor,copias){
            catalogo.push({id:catalogo.length+1,titulo:titulo,autor:autor,copiasDisponibles:copias});
            return `Libro ${titulo} añadido al catálogo`
        },
        prestarLibro:function(idLibro,nombreUsuario){
            for (let catalogo1 of catalogo) {
                if(catalogo1.id===idLibro && catalogo1.copiasDisponibles>0){
                    catalogo1.copiasDisponibles--;
                    prestamos_activos.push({ idPrestamo: prestamos_activos.length + 1, idLibro: idLibro, usuario: nombreUsuario, titulo: catalogo1.titulo });
                    historialTotal.push(`Préstamo: ${catalogo1.titulo} a ${nombreUsuario}`);
                    return "Préstamo realizado con éxito"
                }
                if(catalogo1.copiasDisponibles===0){
                    return "Libro no disponible ";
                }
            }
        },
        devolverLibro:function(idPrestamo){
            for(let i=0; i<prestamos_activos.length; i++){
                if(prestamos_activos[i].idPrestamo === idPrestamo){
                    let prestamo = prestamos_activos[i];
                    prestamos_activos.splice(i, 1);
                    for (let catalogo1 of catalogo) {
                        if (catalogo1.id === prestamo.idLibro) {
                            catalogo1.copiasDisponibles++;
                        }
                    }
                    historialTotal.push(`${prestamo.titulo} devuelto`);
                    return "Libro devuelto correctamente";
                }
            }
            return "No hay préstamo registrado";
        },
        verCatalogo:function(){
            return catalogo
        },
        verHistorial:function(){
            return historialTotal;
        }
    }
}
// Ejemplo de uso esperado:
const bibliotecaMunicipal = crearBiblioteca();

console.log(bibliotecaMunicipal.agregarLibro("El Quijote", "Cervantes", 2));
console.log(bibliotecaMunicipal.agregarLibro("1984", "George Orwell", 1));

console.log(bibliotecaMunicipal.prestarLibro(1, "Ana")); // "Préstamo realizado con éxito" (El Quijote se queda con 1 copia)
console.log(bibliotecaMunicipal.prestarLibro(1, "Luis")); // "Préstamo realizado con éxito" (El Quijote se queda con 0 copias)
console.log(bibliotecaMunicipal.prestarLibro(1, "Carlos")); // "Libro no disponible o sin stock"

console.log(bibliotecaMunicipal.devolverLibro(1)); // "Libro devuelto correctamente" (Ana devuelve El Quijote, vuelve a haber 1 copia)

console.log(bibliotecaMunicipal.verHistorial());

 */

/*Ejercicio 27 => Crea una función llamada crearSistemaEventos() que inicialice dos elementos privados:

let eventos = []; (para guardar los eventos disponibles)

let reservas = []; (para llevar el registro de las entradas compradas)

Debe devolver un objeto con cinco métodos:

crearEvento(nombre, precio, capacidad):

Añade un objeto al array eventos con la estructura: { id: eventos.length + 1, nombre: nombre, precio: precio, capacidadDisponible: capacidad }.

Devuelve un string de confirmación, por ejemplo: "Evento 'Rock Fest' creado con éxito.".

reservarEntrada(idEvento, nombreAsistente, cantidad):

Busca el evento en el array eventos por su id.

Si existe y su capacidadDisponible es mayor o igual a la cantidad solicitada:

Resta esa cantidad a la capacidad del evento (capacidadDisponible -= cantidad).

Añade un registro a reservas con la estructura: { idReserva: reservas.length + 1, idEvento: idEvento, asistente: nombreAsistente, cantidad: cantidad, costoTotal: cantidad * evento.precio }.

Devuelve "¡Reserva realizada con éxito!".

Si no hay suficiente aforo o no existe el evento, devuelve "Aforo insuficiente o evento no encontrado".

cancelarReserva(idReserva):

Busca la reserva en reservas por su idReserva usando un bucle tradicional y la elimina con .splice().

Al encontrarla, busca de nuevo el evento correspondiente en el array eventos por su idEvento y le devuelve las plazas sumándolas de nuevo a su capacidadDisponible (capacidadDisponible += reserva.cantidad).

Devuelve "Reserva cancelada y aforo restaurado".

Si no encuentra la reserva, devuelve "Reserva no encontrada".

verEventos():

Devuelve el array completo con el estado actual de los eventos.

verReservas():

Devuelve el array completo con las reservas activas.



function crearSistemaEventos() {
    let eventos = [];
    let reserva = [];
    return {
        crearEvento: function (nombre, precio, capacidad) {
            eventos.push({id: eventos.length + 1, nombre: nombre, precio: precio, capacidadDisponible: capacidad});
            return `Evento ${nombre} creado con éxito`;
        },

        reservarEntrada(id_Evento, nombreAsistente, cantidad) {
            for (let evento of eventos) {
                if (evento.id === id_Evento && evento.capacidadDisponible >= cantidad) {
                    evento.capacidadDisponible -= cantidad;
                    reserva.push({
                        idReserva: reserva.length + 1,
                        idEvento: id_Evento,
                        asistente: nombreAsistente,
                        cantidad: cantidad,
                        costoTotal: cantidad * evento.precio
                    });
                    return "Reserva realizada con éxito";
                }
            }
            return `Aforo insuficiente`;
        },

        cancelarReserva: function (idReserva) {
            for (let i = 0; i < reserva.length; i++) {
                if (reserva[i].idReserva === idReserva) {
                    let reservaActual = reserva[i];

                    reserva.splice(i, 1);

                    for (let evento of eventos) {
                        if (evento.id === reservaActual.idEvento) {
                            evento.capacidadDisponible += reservaActual.cantidad;
                            return "Reserva cancelada";
                        }
                    }
                }
            }
            return `Reserva no encontrada`;
        },

        verEventos: function () {
            return eventos;
        },

        verReservas: function () {
            return reserva;
        }
    }
}

const ticketMaster = crearSistemaEventos();

console.log(ticketMaster.crearEvento("Concierto Rock", 50, 3));
console.log(ticketMaster.crearEvento("Festival Indie", 40, 100));

console.log(ticketMaster.reservarEntrada(1, "Carlos", 2));

console.log("Eventos actuales:", ticketMaster.verEventos());
console.log("Reservas actuales:", ticketMaster.verReservas());

console.log(ticketMaster.cancelarReserva(1));

console.log("Eventos tras cancelar:", ticketMaster.verEventos());

 */

/*Ejercicio 28 =>Crea una función llamada crearTienda() que inicialice dos elementos privados:

let inventario = []; (para guardar los productos disponibles)

let historialVentas = []; (para registrar las ventas realizadas)

Debe devolver un objeto con cuatro métodos:

agregarProducto(nombre, precio, stock):

Añade un objeto al array inventario con la estructura: { id: inventario.length + 1, nombre: nombre, precio: precio, stock: stock }.

Devuelve un string de confirmación, por ejemplo: "Producto 'Camiseta' añadido al inventario.".

venderProducto(idProducto, cantidad):

Busca el producto en el inventario por su id usando un bucle.

Si el producto existe y su stock es mayor o igual a la cantidad solicitada:

Resta esa cantidad al stock del producto (stock -= cantidad).

Añade un registro al historialVentas con la estructura: { idVenta: historialVentas.length + 1, idProducto: idProducto, nombreProducto: producto.nombre, cantidad: cantidad, totalVenta: cantidad * producto.precio }.

Devuelve "Venta realizada con éxito".

Si no hay stock suficiente o el producto no existe, devuelve "Stock insuficiente o producto no encontrado".

verInventario():

Devuelve el array completo con el estado actual del inventario.

verHistorial():

Devuelve el array completo con el historialVentas.



function crearTienda(){
    let inventario = [];
    let historialVentas=[];

    return {
        agregarProducto:function (nombre,precio,stock){
            inventario.push({id:inventario.length+1,nombre:nombre,precio:precio,stock:stock});
            return `Producto ${nombre} añadido al inventario`;
        },
        venderProducto:function(idProducto,cantidad){
            for (let inv of inventario) {
                if(inv.id===idProducto){
                    if(inv.stock>=cantidad){
                        inv.stock-=cantidad;
                        historialVentas.push({ idVenta: historialVentas.length + 1, idProducto: idProducto,
                            nombreProducto: inv.nombre, cantidad: cantidad, totalVenta: cantidad * inv.precio });
                        return "Venta realizada con éxito";
                    }
                }
            }
            return "Producto no encontrado"
        },
        verInventario:function(){
            return inventario;
        },
        verHistorial:function(){
            return historialVentas;
        }


    }
}
const miTienda = crearTienda();

console.log(miTienda.agregarProducto("Laptop", 800, 5));
console.log(miTienda.agregarProducto("Ratón", 20, 10));

console.log(miTienda.venderProducto(1, 2)); // "Venta realizada con éxito" (Laptop se queda con 3 de stock)
console.log(miTienda.venderProducto(2, 15)); // "Stock insuficiente o producto no encontrado"

console.log(miTienda.verHistorial());
/* Devuelve el registro de la venta de las 2 Laptops por un total de 1600
*/

/*Ejercicio 29 => Crea una función llamada crearGimnasio() que inicialice tres elementos privados:

let socios = []; (para guardar los miembros registrados)

let clases = []; (para guardar las clases grupales disponibles y sus cupos)

let reservasClases = []; (para registrar qué socio está inscrito en qué clase)

Debe devolver un objeto con seis métodos:

registrarSocio(nombre, tipoMembresia):

Añade un objeto al array socios con la estructura: { id: socios.length + 1, nombre: nombre, tipoMembresia: tipoMembresia }.

Devuelve un string de confirmación, por ejemplo: "Socio 'Lucía' registrado con éxito.".

crearClase(nombreClase, cupos):

Añade un objeto al array clases con la estructura: { id: clases.length + 1, nombreClase: nombreClase, cuposDisponibles: cupos }.

Devuelve un string de confirmación, por ejemplo: "Clase 'Spinning' creada con 15 cupos.".

inscribirAClase(idSocio, idClase):

Verifica que el socio exista y que la clase exista y tenga cuposDisponibles > 0.

Si es así, resta 1 a los cupos disponibles de la clase.

Añade un registro a reservasClases con la estructura: { idReserva: reservasClases.length + 1, idSocio: idSocio, idClase: idClase }.

Devuelve "Inscripción a la clase realizada con éxito".

Si no hay cupos o no existe el socio/clase, devuelve "No se pudo realizar la inscripción (cupos agotados o datos incorrectos)".

cancelarInscripcion(idReserva):

Busca la reserva en reservasClases por su idReserva usando un bucle tradicional y la elimina con .splice().

Al encontrarla, busca la clase correspondiente en el array clases por su idClase y le devuelve el cupo sumando 1 (cuposDisponibles++).

Devuelve "Inscripción cancelada y cupo restaurado".

Si no encuentra la reserva, devuelve "Registro de reserva no encontrado".

verClases():

Devuelve el array completo con el estado actual de las clases.

verReservas():

Devuelve el array completo con las reservasClases.



function crearGimnasio(){
    let socios = [];
    let clases = [];
    let reservasClases = [];

    return {
        registrarSocio: function(nombre, tipoMembresia){
            socios.push({ id: socios.length + 1, nombre: nombre, tipoMembresia: tipoMembresia });
            return `Socio ${nombre} registrado con éxito`;
        },

        crearClase: function(nombreClase, cupos){
            clases.push({ id: clases.length + 1, nombreClase: nombreClase, cuposDisponibles: cupos });
            return `Clase ${nombreClase} creada con ${cupos} cupos`;
        },

        inscribirAClase: function(idSocio, idClase){
            // Verificamos que el socio exista
            let socioEncontrado = false;
            for (let socio of socios) {
                if (socio.id === idSocio) {
                    socioEncontrado = true;
                    break;
                }
            }
            if (!socioEncontrado) return "Socio no encontrado";

            // Buscamos la clase y validamos cupos
            for (let clase of clases) {
                if (clase.id === idClase) {
                    if (clase.cuposDisponibles > 0){
                        clase.cuposDisponibles--;
                        reservasClases.push({
                            idReserva: reservasClases.length + 1,
                            idSocio: idSocio,
                            idClase: idClase
                        });
                        return "Inscripción realizada correctamente";
                    } else {
                        return "Error: no hay cupos disponibles";
                    }
                }
            }
            return "Clase no encontrada";
        },

        cancelarInscripcion: function(idReserva){
            for (let i = 0; i < reservasClases.length; i++){
                if (reservasClases[i].idReserva === idReserva){
                    let reservaActual = reservasClases[i];

                    // Eliminamos la reserva del array
                    reservasClases.splice(i, 1);

                    // Buscamos la clase correspondiente para restaurar su cupo
                    for (let clase of clases) {
                        if (clase.id === reservaActual.idClase) {
                            clase.cuposDisponibles++;
                        }
                    }

                    return "Inscripción cancelada y cupo restaurado";
                }
            }
            return "Registro de reserva no encontrado";
        },

        verClases: function(){
            return clases;
        },

        verReservas: function (){
            return reservasClases;
        }
    }
}

// Pruebas:
const miGimnasio = crearGimnasio();

console.log(miGimnasio.registrarSocio("Elena", "VIP"));
console.log(miGimnasio.crearClase("Crossfit", 2));

console.log(miGimnasio.inscribirAClase(1, 1)); // "Inscripción realizada correctamente" (Crossfit se queda con 1 cupo)
console.log(miGimnasio.cancelarInscripcion(1)); // "Inscripción cancelada y cupo restaurado" (Crossfit vuelve a tener 2 cupos)

 */

/*Ejercicio 30 => Ejercicio: Sistema de Gestión de Restaurante (Mesas y Comandas)
Vamos a dar un paso más con un sistema de hostelería. Este reto pondrá a prueba tu capacidad para sincronizar el estado de recursos físicos (las mesas del restaurante) con las transacciones activas (comandas o pedidos de los clientes).

Tu tarea:

Crea una función llamada crearRestaurante() que inicialice tres elementos privados:

let platos = []; (para guardar el menú disponible)

let mesas = []; (para guardar las mesas del local y su estado de disponibilidad)

let comandas = []; (para registrar las comandas activas asociadas a una mesa)

Debe devolver un objeto con cinco métodos:

agregarPlato(nombre, precio):

Añade un objeto al array platos con la estructura: { id: platos.length + 1, nombre: nombre, precio: precio }.

Devuelve un string de confirmación, por ejemplo: "Plato 'Paella' añadido al menú.".

agregarMesa(numeroMesa, capacidad):

Añade un objeto al array mesas con la estructura: { id: mesas.length + 1, numeroMesa: numeroMesa, capacidad: capacidad, libre: true }.

Devuelve un string de confirmación, por ejemplo: "Mesa 1 creada con capacidad para 4 personas.".

crearComanda(idMesa, nombreCliente):

Busca la mesa en el array mesas por su id.

Si la mesa existe y está libre (libre === true):

Cambia el estado de la mesa a ocupada (libre = false).

Añade un registro a comandas con la estructura: { idComanda: comandas.length + 1, idMesa: idMesa, cliente: nombreCliente, items: [], total: 0 }.

Devuelve "Comanda abierta con éxito para " + nombreCliente.

Si la mesa no existe o ya está ocupada, devuelve "Mesa no disponible o inexistente".

agregarPlatoAComanda(idComanda, idPlato):

Busca la comanda en comandas y busca el plato en platos.

Si ambos existen:

Añade el plato al array items de esa comanda y suma su precio al total de la comanda (total += plato.precio).

Devuelve "Plato añadido a la comanda".

Si no, devuelve "Comanda o plato no encontrado".

cerrarComanda(idComanda):

Busca la comanda en comandas usando un bucle tradicional y la elimina con .splice().

Al encontrarla, busca la mesa correspondiente en el array mesas por su idMesa y la libera (libre = true).

Devuelve un mensaje con el total a pagar, por ejemplo: "Comanda cerrada. Total a pagar: 35€".

Si no encuentra la comanda, devuelve "Comanda no encontrada".


function crearRestaurante(){
    let platos = [];
    let mesas = [];
    let comandas = [];

    return {
        agregarPlato: function(nombre, precio){
            platos.push({ id: platos.length + 1, nombre: nombre, precio: precio });
            return `Plato ${nombre} añadido al menú`;
        },

        agregarMesas: function(numeroMesa, capacidad){
            mesas.push({ id: mesas.length + 1, numeroMesa: numeroMesa, capacidad: capacidad, libre: true });
            return `Mesa ${numeroMesa} con capacidad para ${capacidad} personas`;
        },

        crearComanda: function(idMesa, nombreCliente){
            for (let mesa of mesas) {
                if (mesa.id === idMesa){
                    if (mesa.libre === true){
                        mesa.libre = false;
                        comandas.push({
                            idComanda: comandas.length + 1,
                            idMesa: idMesa,
                            cliente: nombreCliente,
                            items: [],
                            total: 0
                        });
                        return `Comanda abierta con éxito para ${nombreCliente}`;
                    }
                }
            }
            return "Mesa no disponible";
        },

        agregarPlatoAComanda: function(idComanda, idPlato){
            for (let comanda of comandas) {
                if (comanda.idComanda === idComanda){
                    for (let plato of platos) {
                        if (plato.id === idPlato){
                            comanda.total += plato.precio;
                            comanda.items.push({ idPlato: idPlato, nombre: plato.nombre, precio: plato.precio });
                            return "Plato añadido a la comanda";
                        }
                    }
                }
            }
            return "No encontrado";
        },

        cerrarComanda: function(idComanda){
            for (let i = 0; i < comandas.length; i++){
                if (comandas[i].idComanda === idComanda){
                    // Guardamos la comanda en una variable antes de eliminarla
                    let comandaActual = comandas[i];
                    comandas.splice(i, 1);

                    // Buscamos la mesa correspondiente para liberarla
                    for (let mesa of mesas) {
                        if (mesa.id === comandaActual.idMesa){
                            mesa.libre = true;
                            return `Comanda cerrada. Total a pagar => ${comandaActual.total}€`;
                        }
                    }
                }
            }
            return "No encontrado";
        }
    }
}

// Ejemplo de uso:
const miRestaurante = crearRestaurante();

console.log(miRestaurante.agregarPlato("Hamburguesa", 12));
console.log(miRestaurante.agregarMesas(1, 4));

console.log(miRestaurante.crearComanda(1, "Ana"));
console.log(miRestaurante.agregarPlatoAComanda(1, 1));

console.log(miRestaurante.cerrarComanda(1)); // "Comanda cerrada. Total a pagar => 12€"

 */

/*Ejercicio 31 => Crea una función llamada crearHotel() que inicialice dos elementos privados:

let habitaciones = []; (para guardar las habitaciones del hotel y su estado)

let reservas = []; (para registrar las reservas activas de los huéspedes)

Debe devolver un objeto con cinco métodos:

agregarHabitacion(tipo, precioPorNoche, capacidad):

Añade un objeto al array habitaciones con la estructura: { id: habitaciones.length + 1, tipo: tipo, precioPorNoche: precioPorNoche, capacidad: capacidad, libre: true }.

Devuelve un string de confirmación, por ejemplo: "Habitación 'Doble' añadida al sistema.".

reservarHabitacion(idHabitacion, nombreHuesped, noches):

Busca la habitación en el array habitaciones por su id.

Si la habitación existe y está libre (libre === true):

Cambia el estado de la habitación a ocupada (libre = false).

Añade un registro a reservas con la estructura: { idReserva: reservas.length + 1, idHabitacion: idHabitacion, huesped: nombreHuesped, noches: noches, costoTotal: noches * habitacion.precioPorNoche }.

Devuelve "¡Reserva de habitación realizada con éxito!".

Si la habitación no existe o ya está ocupada, devuelve "Habitación no disponible o inexistente".

cancelarReserva(idReserva):

Busca la reserva en reservas por su idReserva usando un bucle tradicional y la elimina con .splice().

Al encontrarla, busca la habitación correspondiente en el array habitaciones por su idHabitacion y la libera (libre = true).

Devuelve "Reserva cancelada y habitación liberada".

Si no encuentra la reserva, devuelve "Reserva no encontrada".

verHabitaciones():

Devuelve el array completo con el estado actual de las habitaciones.

verReservas():

Devuelve el array completo con las reservas activas.



function crearHotel(){
    let habitaciones = [];
    let reservas = [];

    return {
        agregarHabitacion: function(tipo, precioPorNoche, capacidad){
            habitaciones.push({
                id: habitaciones.length + 1,
                tipo: tipo,
                precioPorNoche: precioPorNoche,
                capacidad: capacidad,
                libre: true
            });
            return `Habitación ${tipo} añadida al sistema`;
        },

        reservarHabitacion: function(idHabitacion, nombreHuesped, noches){
            for (let habitacione of habitaciones) {
                if (habitacione.id === idHabitacion){
                    if (habitacione.libre === true){
                        habitacione.libre = false;
                        reservas.push({
                            idReserva: reservas.length + 1,
                            idHabitacion: idHabitacion,
                            huesped: nombreHuesped,
                            noches: noches,
                            costoTotal: noches * habitacione.precioPorNoche // Usamos habitacione (singular)
                        });
                        return "Reserva de la habitación realizada con éxito";
                    }
                }
            }
            return "Habitación no disponible";
        },

        cancelarReserva: function(idReserva){
            for (let i = 0; i < reservas.length; i++){
                if (reservas[i].idReserva === idReserva){
                    let reservaActual = reservas[i]; // Guardamos la reserva antes de borrarla
                    reservas.splice(i, 1);

                    // Buscamos la habitación correspondiente para liberarla
                    for (let habitacione of habitaciones) {
                        if (habitacione.id === reservaActual.idHabitacion) {
                            habitacione.libre = true;
                            return "Reserva cancelada, habitación libre";
                        }
                    }
                }
            }
            return "Reserva no encontrada";
        },

        verHabitaciones: function(){
            return habitaciones;
        },

        verReservas: function(){
            return reservas;
        }
    }
}

// Pruebas:
const miHotel = crearHotel();

console.log(miHotel.agregarHabitacion("Doble", 100, 2));
console.log(miHotel.agregarHabitacion("Suite", 250, 4));

console.log(miHotel.reservarHabitacion(1, "Carlos", 3));
console.log("Habitaciones:", miHotel.verHabitaciones());
console.log("Reservas:", miHotel.verReservas());

console.log(miHotel.cancelarReserva(1));
console.log("Habitaciones tras cancelar:", miHotel.verHabitaciones());

 */

/*Ejercicio 32 => Crea una función llamada crearVideoclub() que inicialice dos elementos privados:

let peliculas = []; (para guardar el catálogo de películas y su stock disponible)

let alquileres = []; (para registrar los alquileres activos de los clientes)

Debe devolver un objeto con cinco métodos:

agregarPelicula(titulo, genero, stock):

Añade un objeto al array peliculas con la estructura: { id: peliculas.length + 1, titulo: titulo, genero: genero, stock: stock }.

Devuelve un string de confirmación, por ejemplo: "Película 'Matrix' añadida al catálogo.".

alquilarPelicula(idPelicula, nombreCliente, dias):

Busca la película en el array peliculas por su id.

Si la película existe y su stock es mayor a 0:

Resta 1 al stock de la película (stock--).

Añade un registro a alquileres con la estructura: { idAlquiler: alquileres.length + 1, idPelicula: idPelicula, cliente: nombreCliente, dias: dias, costoTotal: dias * 3 } (asumiendo un costo fijo de 3€ por día).

Devuelve "¡Película alquilada con éxito!".

Si no hay stock o no existe la película, devuelve "Película no disponible o inexistente".

devolverPelicula(idAlquiler):

Busca el alquiler en alquileres por su idAlquiler usando un bucle tradicional y lo elimina con .splice().

Al encontrarlo, busca la película correspondiente en el array peliculas por su idPelicula y le devuelve el stock sumando 1 (stock++).

Devuelve "Película devuelta y stock restaurado".

Si no encuentra el alquiler, devuelve "Registro de alquiler no encontrado".

verPeliculas():

Devuelve el array completo con el estado actual de las peliculas.

verAlquileres():

Devuelve el array completo con los alquileres activos.


function crearVideoclub(){
    let peliculas = [];
    let alquileres = [];

    return {
        agregarPelicula: function(titulo, genero, stock){
            peliculas.push({ id: peliculas.length + 1, titulo: titulo, genero: genero, stock: stock });
            return `Película => ${titulo} añadida al catálogo`;
        },

        alquilarPelicula: function(idPelicula, nombreCliente, dias){
            for (let pelicula of peliculas) {
                // Comparamos pelicula.id (no idPelicula)
                if (pelicula.id === idPelicula){
                    if (pelicula.stock > 0){
                        pelicula.stock--;
                        alquileres.push({
                            idAlquiler: alquileres.length + 1,
                            idPelicula: idPelicula,
                            cliente: nombreCliente,
                            dias: dias,
                            costoTotal: dias * 3
                        });
                        return "Película alquilada con éxito";
                    }
                }
            }
            return "Película no disponible";
        },

        devolverPelicula: function(idAlquiler){
            for (let i = 0; i < alquileres.length; i++){
                // Comprobamos idAlquiler dentro del bucle
                if (alquileres[i].idAlquiler === idAlquiler){
                    let alquilerActual = alquileres[i];
                    alquileres.splice(i, 1);

                    for (let pelicula of peliculas) {
                        // Buscamos la película usando el id y el id de la reserva guardada
                        if (pelicula.id === alquilerActual.idPelicula){
                            pelicula.stock++;
                            return "Película devuelta y stock restaurado";
                        }
                    }
                }
            }
            return "Registro no encontrado";
        },

        verPeliculas: function(){
            return peliculas;
        },

        verAlquileres: function(){
            return alquileres;
        }
    }
}

// Ejemplo de uso esperado:
const miVideoclub = crearVideoclub();

console.log(miVideoclub.agregarPelicula("Inception", "Ciencia Ficción", 2));
console.log(miVideoclub.agregarPelicula("Gladiator", "Acción", 5));

console.log(miVideoclub.alquilarPelicula(1, "Lucía", 4));
console.log("Catálogo tras alquilar:", miVideoclub.verPeliculas());

console.log(miVideoclub.devolverPelicula(1));
console.log("Catálogo tras devolver:", miVideoclub.verPeliculas());

 */

/*Ejercicio 33 => Ejercicio: Sistema de Gestión de Biblioteca Digital (Préstamos y Multas)
Vamos a subir otro escalón más en nuestra arquitectura de sistemas con un clásico avanzado: una Biblioteca Digital que maneja libros, usuarios y un sistema de préstamos que calcula multas por retraso.

Tu tarea:

Crea una función llamada crearBiblioteca() que inicialice tres elementos privados:

let libros = []; (para guardar el catálogo de libros y su disponibilidad de ejemplares)

let usuarios = []; (para registrar a los lectores del sistema)

let prestamos = []; (para registrar los préstamos activos de libros a los usuarios)

Debe devolver un objeto con seis métodos:

agregarLibro(titulo, autor, ejemplares):

Añade un objeto al array libros con la estructura: { id: libros.length + 1, titulo: titulo, autor: autor, ejemplaresDisponibles: ejemplares }.

Devuelve un string de confirmación, por ejemplo: "Libro 'El Quijote' añadido con 3 ejemplares.".

registrarUsuario(nombre, tipo):

Añade un objeto al array usuarios con la estructura: { id: usuarios.length + 1, nombre: nombre, tipo: tipo }.

Devuelve un string de confirmación, por ejemplo: "Usuario 'Sofía' registrado con éxito.".

prestarLibro(idUsuario, idLibro, diasPrestamo):

Verifica que el usuario exista y que el libro exista y tenga ejemplaresDisponibles > 0.

Si es así, resta 1 a los ejemplares disponibles del libro.

Añade un registro a prestamos con la estructura: { idPrestamo: prestamos.length + 1, idUsuario: idUsuario, idLibro: idLibro, diasPrestamo: diasPrestamo, devuelto: false }.

Devuelve "Préstamo realizado con éxito".

Si no hay ejemplares o no existe el usuario/libro, devuelve "No se pudo realizar el préstamo (ejemplares agotados o datos incorrectos)".

devolverLibro(idPrestamo, diasReales):

Busca el préstamo en prestamos por su idPrestamo usando un bucle tradicional.

Si el préstamo existe y no ha sido devuelto (devuelto === false):

Marca el préstamo como devuelto (devuelto = true) o elimínalo con .splice().

Busca el libro correspondiente en el array libros y devuelve el ejemplar sumando 1 (ejemplaresDisponibles++).

Calcula si hubo retraso: si diasReales > prestamo.diasPrestamo, calcula una multa de (diasReales - prestamo.diasPrestamo) * 2 (2€ por día de retraso).

Devuelve un mensaje informando el estado, por ejemplo: "Libro devuelto con éxito. Multa a pagar: 4€" o "Libro devuelto a tiempo. Sin multas.".

Si no encuentra el préstamo, devuelve "Registro de préstamo no encontrado".

verLibros():

Devuelve el array completo con el estado actual de los libros.

verPrestamos():

Devuelve el array completo con los prestamos.



function crearBiblioteca(){
    let libros = [];
    let usuarios = [];
    let prestamos = [];

    return {
        agregarLibro: function(titulo, autor, ejemplares){
            libros.push({ id: libros.length + 1, titulo: titulo, autor: autor, ejemplaresDisponibles: ejemplares });
            return `Libro ${titulo} añadido con ${ejemplares} ejemplares`;
        },

        registrarUsuario: function(nombre, tipo){
            // Añadimos el id para poder buscarlo después
            usuarios.push({ id: usuarios.length + 1, nombre: nombre, tipo: tipo });
            return `Usuario ${nombre} registrado con éxito`;
        },

        prestarLibro: function(idUsuario, idLibro, diasPrestamo){
            // 1. Verificamos que el usuario exista
            let usuarioEncontrado = false;
            for (let usuario of usuarios) {
                if (usuario.id === idUsuario) {
                    usuarioEncontrado = true;
                    break;
                }
            }
            if (!usuarioEncontrado) return "Usuario no encontrado";

            // 2. Buscamos el libro, validamos ejemplares y los descontamos
            for (let libro of libros) {
                if (libro.id === idLibro) {
                    if (libro.ejemplaresDisponibles > 0){
                        libro.ejemplaresDisponibles--;
                        prestamos.push({
                            idPrestamo: prestamos.length + 1,
                            idUsuario: idUsuario,
                            idLibro: idLibro,
                            diasPrestamo: diasPrestamo,
                            devuelto: false
                        });
                        return "Préstamo realizado con éxito";
                    } else {
                        return "No hay ejemplares disponibles";
                    }
                }
            }
            return "Libro no encontrado";
        },

        devolverLibro: function(idPrestamo, diasReales){
            for (let i = 0; i < prestamos.length; i++){
                if (prestamos[i].idPrestamo === idPrestamo){
                    let prestamoActual = prestamos[i];
                    prestamos.splice(i, 1);

                    // Buscamos el libro para devolverle el ejemplar
                    for (let libro of libros) {
                        if (libro.id === prestamoActual.idLibro){
                            libro.ejemplaresDisponibles++;

                            // Calculamos si hay multa
                            if (diasReales > prestamoActual.diasPrestamo){
                                let multa = (diasReales - prestamoActual.diasPrestamo) * 2;
                                return `Libro devuelto con éxito. Multa a pagar: ${multa}€`;
                            }
                            return "Libro devuelto a tiempo. Sin multas.";
                        }
                    }
                }
            }
            return "Registro de préstamo no encontrado";
        },

        verLibros: function(){
            return libros;
        },

        verPrestamos: function(){
            return prestamos;
        }
    }
}

// Ejemplo de uso esperado:
const miBiblioteca = crearBiblioteca();

console.log(miBiblioteca.agregarLibro("Cien años de soledad", "Gabriel García Márquez", 2));
console.log(miBiblioteca.registrarUsuario("Mateo", "Estudiante"));

console.log(miBiblioteca.prestarLibro(1, 1, 7)); // "Préstamo realizado con éxito" (Libro 1 se queda con 1 ejemplar)
console.log(miBiblioteca.devolverLibro(1, 10)); // "Libro devuelto con éxito. Multa a pagar: 6€" (Libro 1 vuelve a tener 2 ejemplares)

 */

/*Ejercicio 34 => Crea una función llamada crearCine() que inicialice tres elementos privados:

let salas = []; (para guardar las salas del cine y su capacidad total)

let funciones = []; (para guardar las películas programadas, su sala asignada y los asientos disponibles)

let entradas = []; (para registrar las entradas vendidas a los clientes)

Debe devolver un objeto con seis métodos:

agregarSala(numeroSala, capacidad):

Añade un objeto al array salas con la estructura: { id: salas.length + 1, numeroSala: numeroSala, capacidad: capacidad }.

Devuelve un string de confirmación, por ejemplo: "Sala 1 añadida con capacidad para 50 personas.".

programarPelicula(titulo, horario, idSala, precio):

Busca la sala en el array salas por su id.

Si la sala existe:

Añade un objeto al array funciones con la estructura: { id: funciones.length + 1, titulo: titulo, horario: horario, idSala: idSala, asientosDisponibles: sala.capacidad, precio: precio }.

Devuelve un string de confirmación, por ejemplo: "Película 'Avatar' programada en la Sala 1.".

Si la sala no existe, devuelve "Sala no encontrada".

comprarEntrada(idFuncion, nombreCliente, cantidad):

Busca la función en el array funciones por su id.

Si la función existe y sus asientosDisponibles >= cantidad:

Resta la cantidad a los asientos disponibles (asientosDisponibles -= cantidad).

Añade un registro a entradas con la estructura: { idEntrada: entradas.length + 1, idFuncion: idFuncion, cliente: nombreCliente, cantidad: cantidad, costoTotal: cantidad * funcion.precio }.

Devuelve "¡Entradas compradas con éxito!".

Si no hay suficientes asientos o la función no existe, devuelve "No hay asientos suficientes o función no encontrada".

cancelarEntrada(idEntrada):

Busca la entrada en entradas por su idEntrada usando un bucle tradicional y la elimina con .splice().

Al encontrarla, busca la función correspondiente en el array funciones por su idFuncion y le devuelve los asientos sumando la cantidad (asientosDisponibles += entradaActual.cantidad).

Devuelve "Entrada cancelada y aforo restaurado".

Si no encuentra la entrada, devuelve "Registro de entrada no encontrado".

verFunciones():

Devuelve el array completo con el estado actual de las funciones.

verEntradas():

Devuelve el array completo con las entradas.



function crearCine(){
    let salas = [];
    let funciones = [];
    let entradas = [];

    return {
        agregarSala: function(numeroSala, capacidad){
            salas.push({ id: salas.length + 1, numeroSala: numeroSala, capacidad: capacidad });
            return `Sala ${numeroSala} añadida con capacidad para ${capacidad} personas.`;
        },

        programarPelicula: function(titulo, horario, idSala, precio){
            for (let sala of salas) {
                if(sala.id === idSala){
                    funciones.push({
                        id: funciones.length + 1,
                        titulo: titulo,
                        horario: horario,
                        idSala: idSala,
                        asientosDisponibles: sala.capacidad,
                        precio: precio
                    });
                    return `Película ${titulo} programada en la Sala ${sala.numeroSala}`;
                }
            }
            return "Sala no encontrada";
        },

        comprarEntrada: function(idFuncion, nombreCliente, cantidad){
            for (let funcion of funciones) {
                if(funcion.id === idFuncion){
                    if(funcion.asientosDisponibles >= cantidad){
                        funcion.asientosDisponibles -= cantidad;
                        entradas.push({
                            idEntrada: entradas.length + 1,
                            idFuncion: idFuncion,
                            cliente: nombreCliente,
                            cantidad: cantidad,
                            costoTotal: cantidad * funcion.precio
                        });
                        return "Entradas compradas con éxito";
                    }
                }
            }
            return "No hay asientos disponibles";
        },

        cancelarEntrada: function(idEntrada){
            for(let i = 0; i < entradas.length; i++){
                if(entradas[i].idEntrada === idEntrada){
                    let entradaActual = entradas[i];

                    entradas.splice(i, 1);

                    for (let funcione of funciones) {
                        if(funcione.id === entradaActual.idFuncion){
                            funcione.asientosDisponibles += entradaActual.cantidad;
                            return "Entrada cancelada y aforo restaurado";
                        }
                    }
                }
            }
            return "No encontrado";
        },

        verFunciones: function(){
            return funciones;
        },

        verEntradas: function(){
            return entradas;
        }
    }
}

// === PRUEBAS DE COMPROBACIÓN ===
const miCine = crearCine();

console.log(miCine.agregarSala(1, 40));
console.log(miCine.programarPelicula("Interstellar", "20:00", 1, 8));

console.log("\n--- 1. Estado inicial de la función (debe salir 40, nunca NaN) ---");
console.log(miCine.verFunciones());

console.log("\n" + miCine.comprarEntrada(1, "Carlos", 3));

console.log("\n--- 2. Estado tras comprar 3 entradas (debe salir 37) ---");
console.log(miCine.verFunciones());

console.log("\n" + miCine.cancelarEntrada(1));

console.log("\n--- 3. Estado final tras cancelar (vuelve a 40 exactos) ---");
console.log(miCine.verFunciones());

 */

/*Ejercicio 35 => Crea una función fábrica llamada crearRestaurante() que encapsule tres arrays privados en su memoria léxica:

let mesas = []; (para registrar las mesas del local y su capacidad de comensales)

let menu = []; (para el catálogo de platos, su precio y las raciones disponibles del día)

let pedidos = []; (para registrar las comandas asociadas a una mesa y un plato, con su cantidad y costo total)

Debe devolver un objeto con seis métodos profesionales:

agregarMesa(numeroMesa, capacidad):

Añade un objeto a mesas: { id: mesas.length + 1, numeroMesa: numeroMesa, capacidad: capacidad }.

Devuelve un string de confirmación, por ejemplo: "Mesa 5 añadida con capacidad para 4 comensales.".

agregarPlato(nombre, categoria, precio, stock):

Añade un objeto a menu: { id: menu.length + 1, nombre: nombre, categoria: categoria, precio: precio, stock: stock }.

Devuelve un string de confirmación, por ejemplo: "Plato 'Entrecot' añadido al menú con stock de 10 raciones.".

hacerPedido(idMesa, idPlato, cantidad):

Valida que la mesa exista y que el plato exista en el menú.

Comprueba si el plato tiene suficientes raciones disponibles (stock >= cantidad).

Si es correcto:

Resta las raciones al stock del plato (stock -= cantidad).

Registra el pedido en pedidos: { idPedido: pedidos.length + 1, idMesa: idMesa, idPlato: idPlato, cantidad: cantidad, costoTotal: cantidad * plato.precio }.

Devuelve: "¡Comanda anotada con éxito!".

Si falla alguna validación o no hay stock, devuelve un mensaje de error descriptivo.

cancelarPedido(idPedido):

Busca el pedido en pedidos mediante un bucle tradicional y elimínalo con .splice().

Al encontrarlo, busca el plato correspondiente en el menu y devuelve las raciones sumándolas de nuevo (stock += pedidoActual.cantidad).

Devuelve: "Pedido cancelado y stock de raciones restaurado.".

Si no existe el pedido, devuelve "Pedido no encontrado".

verMenu() y verPedidos():

Devuelven los arrays correspondientes para auditar el estado del restaurante.



function crearRestaurante() {
    let mesas = [];
    let menu = [];
    let pedidos = [];
    let siguienteIdPedido = 1;

    return {
        agregarMesa: function (numero, capacidad) {
            mesas.push({ id: mesas.length + 1, numero: numero, capacidad: capacidad });
            return `Mesa ${numero} añadida con capacidad para ${capacidad} personas`;
        },

        agregarPlato: function (nombre, precio, stock) {
            menu.push({ id: menu.length + 1, nombre: nombre, precio: precio, stock: stock });
            return `Plato ${nombre} añadido al menú con stock de ${stock} raciones`;
        },

        hacerPedido: function (idMesa, idPlato, cantidad) {
            // Validar que la mesa exista (for...of)
            let mesaExiste = false;
            for (let mesa of mesas) {
                if (mesa.id === idMesa) {
                    mesaExiste = true;
                    break;
                }
            }
            if (!mesaExiste) return "Mesa no encontrada";

            // Buscar el plato (for...of)
            for (let plato of menu) {
                if (plato.id === idPlato) {
                    if (plato.stock >= cantidad) {
                        plato.stock -= cantidad;
                        pedidos.push({
                            idPedido: siguienteIdPedido++,
                            idMesa: idMesa,
                            idPlato: idPlato,
                            cantidad: cantidad,
                            costoTotal: cantidad * plato.precio
                        });
                        return "Comanda anotada con éxito";
                    } else {
                        return "Stock insuficiente";
                    }
                }
            }
            return "Plato no encontrado";
        },

        cancelarPedido: function (idPedido) {
            // Buscar el pedido (for clásico, porque necesitamos el índice para splice)
            for (let i = 0; i < pedidos.length; i++) {
                if (pedidos[i].idPedido === idPedido) {
                    let pedidoActual = pedidos[i];
                    pedidos.splice(i, 1);

                    // Devolver el stock (for...of)
                    for (let plato of menu) {
                        if (plato.id === pedidoActual.idPlato) {
                            plato.stock += pedidoActual.cantidad;
                            break;
                        }
                    }
                    return "Pedido cancelado y stock restaurado";
                }
            }
            return "Pedido no encontrado";
        },

        verMenu: function () {
            let copia = [];
            for (let plato of menu) {
                copia.push({ ...plato });
            }
            return copia;
        },

        verPedidos: function () {
            let copia = [];
            for (let pedido of pedidos) {
                copia.push({ ...pedido });
            }
            return copia;
        }
    };
}

// === PRUEBAS ===
const miRestaurante = crearRestaurante();

console.log(miRestaurante.agregarMesa(3, 4));
console.log(miRestaurante.agregarPlato("Paella Valenciana", 15, 5));

console.log("\n--- PASO 1: Hacer pedido ---");
console.log(miRestaurante.hacerPedido(1, 1, 2));

console.log("\n--- PASO 2: Ver pedidos ---");
console.log(miRestaurante.verPedidos());

console.log("\n--- PASO 3: Cancelar el pedido ---");
console.log(miRestaurante.cancelarPedido(1));

console.log("\n--- PASO 4: Ver pedidos tras cancelar (debe salir vacío) ---");
console.log(miRestaurante.verPedidos());

console.log("\n--- Menú (stock restaurado a 5) ---");
console.log(miRestaurante.verMenu());

 */

/*Ejercicio 36 =>  Biblioteca (crearBiblioteca)

Crea una función fábrica crearBiblioteca() que encapsule tres arrays privados: libros, socios y prestamos.

Debe devolver un objeto con seis métodos:

agregarLibro(titulo, autor, copias):
Añade a libros: { id: libros.length + 1, titulo, autor, copias }.
Devuelve un string de confirmación.
agregarSocio(nombre):
Añade a socios: { id: socios.length + 1, nombre }.
Devuelve un string de confirmación.
prestarLibro(idSocio, idLibro):
Valida que el socio exista y que el libro exista.
Comprueba que copias > 0.
Si es correcto: resta una copia y registra en prestamos { idPrestamo, idSocio, idLibro }.
Si falla, devuelve el mensaje de error correspondiente ("Socio no encontrado", "Libro no encontrado", "No quedan copias").
devolverLibro(idPrestamo):
Busca el préstamo, bórralo con .splice(), guarda el objeto temporalmente y suma de nuevo la copia al libro.
Devuelve confirmación o "Préstamo no encontrado".
verLibros() y verPrestamos(): devuelven sus respectivos arrays (usa for of o for i).



function crearBiblioteca() {
    let libros = [];
    let socios = [];
    let prestamos = [];
    let siguienteIdPrestamo = 1;

    return {
        agregarLibro: function (titulo, autor, copias) {
            libros.push({ id: libros.length + 1, titulo, autor, copias });
            return `Libro ${titulo} agregado con éxito`;
        },

        agregarSocio: function (nombre) {
            socios.push({ id: socios.length + 1, nombre });
            return `Socio ${nombre} agregado con éxito`;
        },

        prestarLibro: function (idSocio, idLibro) {
            for (let socio of socios) {
                if (socio.id === idSocio) {
                    for (let libro of libros) {
                        if (libro.id === idLibro) {
                            if (libro.copias > 0) {
                                libro.copias--;
                                let id = siguienteIdPrestamo++;
                                prestamos.push({ idPrestamo: id, idSocio: idSocio, idLibro: idLibro });
                                return `Préstamo registrado con id ${id}`;
                            }
                            return "No quedan copias";
                        }
                    }
                    return "Libro no encontrado";
                }
            }
            return "Socio no encontrado";
        },

        devolverLibro: function (idPrestamo) {
            for (let i = 0; i < prestamos.length; i++) {
                if (prestamos[i].idPrestamo === idPrestamo) {

                    // ERROR: `let id = prestamos[i].idPrestamo;` solo guardaba el id,
                    // que ya te llega por parámetro. No permitía saber qué libro devolver.
                    // CORRECCIÓN: guardar el OBJETO entero antes del splice,
                    // para poder leer después su idLibro.
                    let prestamoActual = prestamos[i];
                    prestamos.splice(i, 1);

                    // ERROR 1: `for (prestamos of libros)` no tenía `let`, así que
                    // reasignaba tu array `prestamos` de la fábrica con cada libro
                    // y lo destruía.
                    // ERROR 2: no buscabas el libro correcto, solo recorrías todos.
                    // ERROR 3: `libros.copias++` apunta al ARRAY, no a un libro
                    // (da NaN y no suma nada).
                    // CORRECCIÓN: `for (let libro of libros)`, comparar libro.id con
                    // prestamoActual.idLibro y sumar la copia a ESE libro.
                    // El return dentro del bucle corta la búsqueda (sin break).
                    for (let libro of libros) {
                        if (libro.id === prestamoActual.idLibro) {
                            libro.copias++;
                            return "Libro devuelto y copia restaurada";
                        }
                    }

                    // CORRECCIÓN: si el bucle termina sin encontrar el libro,
                    // se avisa en vez de confirmar algo que no ha pasado.
                    return "Libro devuelto, pero el libro ya no existe";
                }
            }

            // ERROR: devolvías "NO Devuelto", pero el enunciado pide "Préstamo no encontrado".
            // CORRECCIÓN: usar el texto exacto del enunciado.
            return "Préstamo no encontrado";
        },

        // ERROR: devolvías `libros` directamente (la referencia al array original).
        // Quien llame a verLibros() podría hacer push/pop y romper el estado interno,
        // y la consola podría mostrar datos ya modificados.
        // CORRECCIÓN: construir una copia con un bucle y devolverla.
        verLibros: function () {
            let copia = [];
            for (let libro of libros) {
                copia.push({ ...libro }); // {...libro} copia cada objeto
            }
            return copia;
        },

        // ERROR: igual que verLibros, devolvías `prestamos` directamente.
        // CORRECCIÓN: devolver una copia.
        verPrestamos: function () {
            let copia = [];
            for (let prestamo of prestamos) {
                copia.push({ ...prestamo });
            }
            return copia;
        }
    };
}

// === PRUEBAS ===
const miBiblioteca = crearBiblioteca();

console.log("--- 1. Añadir libros y socios ---");
console.log(miBiblioteca.agregarLibro("El Quijote", "Cervantes", 2));
console.log(miBiblioteca.agregarLibro("1984", "Orwell", 1));
console.log(miBiblioteca.agregarSocio("Ana"));
console.log(miBiblioteca.agregarSocio("Luis"));

console.log("\n--- 2. Préstamo correcto ---");
console.log(miBiblioteca.prestarLibro(1, 1)); // Préstamo registrado con id 1
console.log(miBiblioteca.verLibros());        // Quijote con copias: 1

console.log("\n--- 3. Errores de préstamo ---");
console.log(miBiblioteca.prestarLibro(99, 1)); // Socio no encontrado
console.log(miBiblioteca.prestarLibro(1, 99)); // Libro no encontrado

console.log("\n--- 4. Sin copias ---");
console.log(miBiblioteca.prestarLibro(2, 2)); // Préstamo registrado con id 2
console.log(miBiblioteca.prestarLibro(1, 2)); // No quedan copias

console.log("\n--- 5. Ver préstamos ---");
console.log(miBiblioteca.verPrestamos());     // ids 1 y 2

console.log("\n--- 6. Devolver libro ---");
console.log(miBiblioteca.devolverLibro(2));   // Libro devuelto y copia restaurada
console.log(miBiblioteca.verLibros());        // 1984 vuelve a copias: 1
console.log(miBiblioteca.devolverLibro(99));  // Préstamo no encontrado

console.log("\n--- 7. IDs únicos tras devolver ---");
console.log(miBiblioteca.prestarLibro(1, 2)); // Préstamo registrado con id 3
console.log(miBiblioteca.verPrestamos());     // ids 1 y 3

console.log("\n--- 8. Protección del estado interno ---");
let copia = miBiblioteca.verPrestamos();
copia.pop();
console.log(miBiblioteca.verPrestamos().length); // 2

 */

/*Ejercicio 37 => Crea una función fábrica crearGimnasio() que encapsule tres arrays privados: clases, socios e inscripciones.

Debe devolver un objeto con siete métodos:

agregarClase(nombre, monitor, plazas):
Añade a clases: { id: clases.length + 1, nombre, monitor, plazas }.
Devuelve un string de confirmación.
agregarSocio(nombre):
Añade a socios: { id: socios.length + 1, nombre }.
Devuelve un string de confirmación.
inscribir(idSocio, idClase):
Valida que el socio exista ("Socio no encontrado") y que la clase exista ("Clase no encontrada").
Comprueba que plazas > 0 ("Clase completa").
Comprueba que el socio no esté ya inscrito en esa clase ("Socio ya inscrito"). Para esto recorre inscripciones con for of.
Si todo es correcto: resta una plaza y registra en inscripciones { idInscripcion, idSocio, idClase }. Usa un contador privado para idInscripcion.
Devuelve un string de éxito que incluya el id de la inscripción.
cancelarInscripcion(idInscripcion):
Busca la inscripción con for i, bórrala con .splice(), guarda el objeto temporalmente y devuelve la plaza a la clase (plazas++).
Devuelve confirmación o "Inscripción no encontrada".
clasesDisponibles(): devuelve una copia solo con las clases que tengan plazas > 0.
inscritosDeClase(idClase): devuelve un array con los nombres de los socios inscritos en esa clase (recorre inscripciones y busca cada socio en socios).
verClases() y verInscripciones(): devuelven copias de sus arrays (con for of y { ...objeto }).



function crearGimnasio() {
    let clases = [];
    let socios = [];
    let inscripciones = [];
    // CORRECCIÓN: renombrado de `idInscripcion` a `siguienteIdInscripcion`
    // para que no se confunda con el parámetro de cancelarInscripcion.
    let siguienteIdInscripcion = 1;

    return {
        agregarClase: function (nombre, monitor, plazas) {
            clases.push({ id: clases.length + 1, nombre, monitor, plazas });
            return `Clase ${nombre} creada con éxito`;
        },

        agregarSocio: function (nombre) {
            socios.push({ id: socios.length + 1, nombre });
            return `Socio ${nombre} inscrito con éxito`;
        },

        inscribir: function (idSocio, idClase) {
            for (let socio of socios) {
                if (socio.id === idSocio) {
                    for (let clase of clases) {
                        // ERROR: `clase.id === idClase && clase.plazas > 0` juntos impedían
                        // distinguir "Clase no encontrada" de "Clase completa".
                        // CORRECCIÓN: separar las condiciones.
                        if (clase.id === idClase) {
                            if (clase.plazas <= 0) {
                                return "Clase completa";
                            }

                            // ERROR: faltaba la validación de "Socio ya inscrito".
                            // CORRECCIÓN: recorrer inscripciones buscando el mismo
                            // socio en la misma clase. Se hace ANTES de restar la plaza.
                            for (let inscripcion of inscripciones) {
                                if (inscripcion.idSocio === idSocio && inscripcion.idClase === idClase) {
                                    return "Socio ya inscrito";
                                }
                            }

                            // ERROR: no se restaba la plaza.
                            // CORRECCIÓN: restar una plaza una vez validado todo.
                            clase.plazas--;

                            // ERROR: `idInscripcion` nunca se incrementaba (todas con id 1).
                            // CORRECCIÓN: `siguienteIdInscripcion++` devuelve el valor
                            // actual y luego lo incrementa.
                            let id = siguienteIdInscripcion++;
                            inscripciones.push({ idInscripcion: id, idSocio: idSocio, idClase: idClase });
                            return `Inscripción realizada con éxito (id ${id})`;
                        }
                    }
                    // ERROR: un único mensaje genérico para todos los fallos.
                    // CORRECCIÓN: un return por cada caso, en su bucle correspondiente.
                    return "Clase no encontrada";
                }
            }
            return "Socio no encontrado";
        },

        cancelarInscripcion: function (idInscripcion) {
            for (let i = 0; i < inscripciones.length; i++) {
                if (inscripciones[i].idInscripcion === idInscripcion) {
                    let inscripcionActual = inscripciones[i];
                    inscripciones.splice(i, 1);

                    for (let clase of clases) {
                        // ERROR: `clase.id === inscripciones.idInscripcion` comparaba con
                        // una propiedad que no existe en el array (undefined),
                        // así que nunca se devolvía la plaza.
                        // CORRECCIÓN: comparar con el idClase del objeto guardado
                        // antes del splice.
                        if (clase.id === inscripcionActual.idClase) {
                            clase.plazas++;
                            return "Inscripción cancelada y plaza restaurada";
                        }
                    }
                    return "Inscripción cancelada, pero la clase ya no existe";
                }
            }
            // CORRECCIÓN: texto exacto del enunciado.
            return "Inscripción no encontrada";
        },

        clasesDisponibles: function () {
            let disponibles = [];
            // ERROR: `clases.find(...)` no recorre todo el array, y
            // `push(clase.plazas > 0)` metía true/false en vez de la clase.
            // CORRECCIÓN: for of + if + push de una copia de la clase.
            for (let clase of clases) {
                if (clase.plazas > 0) {
                    disponibles.push({ ...clase });
                }
            }
            return disponibles;
        },

        inscritosDeClase: function (idClase) {
            let nombres = [];
            // ERROR: el bucle se llamaba `clases` y tapaba el array `clases` de la fábrica.
            // CORRECCIÓN: nombre distinto (`inscripcion`).
            for (let inscripcion of inscripciones) {
                // ERROR: comparabas idInscripcion con el id de la clase.
                // CORRECCIÓN: comparar inscripcion.idClase con idClase.
                if (inscripcion.idClase === idClase) {
                    // ERROR: metías la inscripción entera; el enunciado pide nombres.
                    // CORRECCIÓN: buscar el socio y guardar su nombre.
                    for (let socio of socios) {
                        if (socio.id === inscripcion.idSocio) {
                            nombres.push(socio.nombre);
                        }
                    }
                }
            }
            return nombres;
        },

        // ERROR: faltaban verClases y verInscripciones.
        // CORRECCIÓN: devolver copias, no los arrays originales.
        verClases: function () {
            let copia = [];
            for (let clase of clases) {
                copia.push({ ...clase });
            }
            return copia;
        },

        verInscripciones: function () {
            let copia = [];
            for (let inscripcion of inscripciones) {
                copia.push({ ...inscripcion });
            }
            return copia;
        }
    };
}

// === PRUEBAS ===
const gym = crearGimnasio();

console.log(gym.agregarClase("Spinning", "Marta", 2));
console.log(gym.agregarClase("Yoga", "Pablo", 1));
console.log(gym.agregarSocio("Ana"));
console.log(gym.agregarSocio("Luis"));
console.log(gym.agregarSocio("Eva"));

console.log(gym.inscribir(1, 1));   // éxito, id 1
console.log(gym.inscribir(1, 1));   // Socio ya inscrito
console.log(gym.inscribir(2, 2));   // éxito, id 2 (Yoga se queda a 0)
console.log(gym.inscribir(3, 2));   // Clase completa
console.log(gym.inscribir(99, 1));  // Socio no encontrado
console.log(gym.inscribir(1, 99));  // Clase no encontrada

console.log(gym.clasesDisponibles());  // solo Spinning (1 plaza)
console.log(gym.inscritosDeClase(1));  // ["Ana"]

console.log(gym.cancelarInscripcion(2));   // confirmación
console.log(gym.clasesDisponibles());      // Spinning y Yoga
console.log(gym.cancelarInscripcion(99));  // Inscripción no encontrada

console.log(gym.inscribir(3, 2));   // éxito, id 3 (no repite el 2)

 */

/*Ejercicio 38 => Crea una función fábrica crearCine() que encapsule tres arrays privados: peliculas, salas y entradas. Usa un contador privado para idEntrada.

Debe devolver un objeto con siete métodos:

agregarPelicula(titulo, duracion, precio):
Añade a peliculas: { id: peliculas.length + 1, titulo, duracion, precio }.
Devuelve un string de confirmación.
agregarSala(numero, capacidad):
Añade a salas: { id: salas.length + 1, numero, capacidad, idPelicula: null, vendidas: 0 }.
Devuelve un string de confirmación.
asignarPelicula(idSala, idPelicula):
Valida que la sala exista ("Sala no encontrada") y que la película exista ("Película no encontrada").
Si la sala ya tiene entradas vendidas (vendidas > 0), devuelve "No se puede cambiar: hay entradas vendidas".
Si todo es correcto, asigna idPelicula a la sala y devuelve confirmación.
venderEntradas(idSala, cantidad):
Valida que la sala exista ("Sala no encontrada").
Comprueba que la sala tenga película asignada ("Sala sin película").
Comprueba que cantidad > 0 ("Cantidad no válida").
Comprueba que queden asientos: capacidad - vendidas >= cantidad ("No hay suficientes asientos").
Si todo es correcto: suma cantidad a vendidas, busca la película para obtener su precio y registra en entradas { idEntrada, idSala, cantidad, total: cantidad * precio }.
Devuelve un string de éxito que incluya el id de la entrada y el total.
devolverEntradas(idEntrada):
Busca la entrada con for i, bórrala con .splice(), guarda el objeto temporalmente y resta cantidad a vendidas de la sala correspondiente.
Devuelve confirmación o "Entrada no encontrada".
recaudacionPelicula(idPelicula):
Recorre entradas, y por cada una busca su sala para saber qué película proyecta. Suma el total de las entradas cuya sala tenga esa película.
Devuelve el total (un número).
verSalas() y verEntradas(): devuelven copias de sus arrays (con for of y { ...objeto }).



function crearCine() {
    let peliculas = [];
    let salas = [];
    let entradas = [];
    let siguienteIdEntrada = 1;

    return {
        agregarPelicula: function (titulo, duracion, precio) {
            peliculas.push({ id: peliculas.length + 1, titulo, duracion, precio });
            return `Película ${titulo} añadida correctamente`;
        },

        agregarSala: function (numero, capacidad) {
            salas.push({ id: salas.length + 1, numero, capacidad, idPelicula: null, vendidas: 0 });
            return `Sala ${numero} con capacidad de ${capacidad} personas`;
        },

        asignarPelicula: function (idSala, idPelicula) {
            for (let sala of salas) {
                if (sala.id === idSala) {
                    for (let pelicula of peliculas) {
                        if (pelicula.id === idPelicula) {
                            if (sala.vendidas > 0) {
                                // ERROR: el mensaje no era el del enunciado.
                                // CORRECCIÓN: texto completo.
                                return "No se puede cambiar: hay entradas vendidas";
                            }
                            sala.idPelicula = idPelicula;
                            return "Película asignada";
                        }
                    }
                    // ERROR: faltaba este return. Si la película no existía,
                    // salía "Sala no encontrada", que era falso.
                    // CORRECCIÓN: return propio tras el bucle de películas.
                    return "Película no encontrada";
                }
            }
            return "Sala no encontrada";
        },

        // ERROR: el método se llamaba venderEntrada; el enunciado pide venderEntradas.
        venderEntradas: function (idSala, cantidad) {
            for (let sala of salas) {
                if (sala.id === idSala) {

                    // ERROR: faltaba comprobar que la sala tiene película.
                    // CORRECCIÓN: idPelicula === null significa "sin película".
                    if (sala.idPelicula === null) {
                        return "Sala sin película";
                    }

                    // ERROR: faltaba validar la cantidad (y estaba anidada de forma
                    // que, si era 0, la función no devolvía nada).
                    if (cantidad <= 0) {
                        return "Cantidad no válida";
                    }

                    // ERROR: la condición estaba invertida. Devolvías "No hay asientos"
                    // cuando SÍ había sitio.
                    // CORRECCIÓN: error si lo que queda es MENOR que lo pedido.
                    if (sala.capacidad - sala.vendidas < cantidad) {
                        return "No hay suficientes asientos";
                    }

                    // ERROR: `for (sala of peliculas)` sin `let` reasignaba `sala`
                    // y la destruía; además comparaba la película con ella misma.
                    // CORRECCIÓN: `for (let pelicula of peliculas)` y comparar
                    // pelicula.id con sala.idPelicula.
                    for (let pelicula of peliculas) {
                        if (pelicula.id === sala.idPelicula) {
                            sala.vendidas += cantidad;
                            let total = cantidad * pelicula.precio; // ERROR: `precio` no existía
                            // ERROR: `idEntrada` no existía y nunca se incrementaba.
                            // CORRECCIÓN: contador con post-incremento.
                            let id = siguienteIdEntrada++;
                            entradas.push({ idEntrada: id, idSala: idSala, cantidad: cantidad, total: total });
                            return `Entrada ${id} vendida. Total: ${total}`;
                        }
                    }
                    return "Película no encontrada";
                }
            }
            // ERROR: faltaba este return (la función devolvía undefined).
            return "Sala no encontrada";
        },

        devolverEntradas: function (idEntrada) {
            for (let i = 0; i < entradas.length; i++) {
                if (entradas[i].idEntrada === idEntrada) {
                    let entradaActual = entradas[i];
                    entradas.splice(i, 1);

                    for (let sala of salas) {
                        if (sala.id === entradaActual.idSala) {
                            sala.vendidas -= entradaActual.cantidad;
                            return "Entrada devuelta y asientos liberados";
                        }
                    }
                    return "Entrada devuelta, pero la sala ya no existe";
                }
            }
            return "Entrada no encontrada";
        },

        recaudacionPelicula: function (idPelicula) {
            let suma = 0;
            for (let entrada of entradas) {
                for (let sala of salas) {
                    if (sala.id === entrada.idSala && sala.idPelicula === idPelicula) {
                        suma += entrada.total;
                    }
                }
            }
            return suma;
        },

        verSalas: function () {
            let copia = [];
            for (let sala of salas) {
                copia.push({ ...sala });
            }
            return copia;
        },

        verEntradas: function () {
            let copia = [];
            for (let entrada of entradas) {
                copia.push({ ...entrada });
            }
            return copia;
        }
    };
}

// === PRUEBAS ===
const cine = crearCine();

console.log(cine.agregarPelicula("Matrix", 136, 8));
console.log(cine.agregarPelicula("Up", 96, 6));
console.log(cine.agregarSala(1, 5));
console.log(cine.agregarSala(2, 3));

console.log(cine.venderEntradas(1, 2));        // Sala sin película
console.log(cine.asignarPelicula(1, 1));       // confirmación
console.log(cine.asignarPelicula(2, 2));       // confirmación
console.log(cine.asignarPelicula(99, 1));      // Sala no encontrada
console.log(cine.asignarPelicula(1, 99));      // Película no encontrada

console.log(cine.venderEntradas(1, 2));        // éxito, id 1, total 16
console.log(cine.venderEntradas(1, 4));        // No hay suficientes asientos
console.log(cine.venderEntradas(1, 0));        // Cantidad no válida
console.log(cine.venderEntradas(2, 3));        // éxito, id 2, total 18
console.log(cine.venderEntradas(2, 1));        // No hay suficientes

 */

/*Ejerccicio 39 => Crea una función fábrica crearTaller() que encapsule tres arrays privados: vehiculos, mecanicos y reparaciones. Usa un contador privado para idReparacion.

Debe devolver un objeto con ocho métodos:

agregarVehiculo(matricula, modelo):
Añade a vehiculos: { id: vehiculos.length + 1, matricula, modelo }.
Si ya existe un vehículo con esa matrícula, devuelve "Matrícula ya registrada" (recorre con for of).
Devuelve un string de confirmación.
agregarMecanico(nombre, especialidad):
Añade a mecanicos: { id: mecanicos.length + 1, nombre, especialidad, ocupado: false }.
Devuelve un string de confirmación.
abrirReparacion(idVehiculo, idMecanico, descripcion, precio):
Valida que el vehículo exista ("Vehículo no encontrado") y que el mecánico exista ("Mecánico no encontrado").
Comprueba que el mecánico no esté ocupado ("Mecánico ocupado").
Comprueba que el vehículo no tenga ya una reparación abierta ("Vehículo ya en reparación"). Recorre reparaciones buscando una con el mismo idVehiculo y estado === "abierta".
Comprueba que precio > 0 ("Precio no válido").
Si todo es correcto: pone ocupado = true en el mecánico y registra en reparaciones { idReparacion, idVehiculo, idMecanico, descripcion, precio, estado: "abierta" }.
Devuelve un string de éxito que incluya el id de la reparación.
cerrarReparacion(idReparacion):
Busca la reparación con for i. Si no existe, "Reparación no encontrada".
Si ya está cerrada, "Reparación ya cerrada".
Si no, cambia estado a "cerrada" y libera al mecánico (ocupado = false).
cancelarReparacion(idReparacion):
Solo se puede cancelar si está "abierta" (si no, "Solo se pueden cancelar reparaciones abiertas").
La borra con .splice(), guarda el objeto temporalmente y libera al mecánico.
historialVehiculo(matricula):
Busca el vehículo por matrícula ("Vehículo no encontrado" si no existe).
Devuelve un array con las descripciones de todas sus reparaciones (abiertas y cerradas).
ingresosTotales():
Devuelve la suma de precio de las reparaciones con estado === "cerrada" (las abiertas aún no cuentan).
verReparaciones(): devuelve una copia del array (con for of y { ...objeto })



function crearTaller() {
    let vehiculos = [];
    let mecanicos = [];
    let reparaciones = [];
    // CORRECCIÓN: renombrado para no confundirlo con el parámetro idReparacion.
    let siguienteIdReparacion = 1;

    return {
        agregarVehiculo: function (matricula, modelo) {
            for (let vehiculo of vehiculos) {
                if (vehiculo.matricula === matricula) {
                    // CORRECCIÓN menor: texto exacto del enunciado (con tilde).
                    return "Matrícula ya registrada";
                }
            }
            vehiculos.push({ id: vehiculos.length + 1, matricula, modelo });
            return `Vehículo ${matricula} añadido con éxito`;
        },

        agregarMecanico: function (nombre, especialidad) {
            mecanicos.push({ id: mecanicos.length + 1, nombre, especialidad, ocupado: false });
            return `Mecánico ${nombre} agregado con éxito`;
        },

        abrirReparacion: function (idVehiculo, idMecanico, descripcion, precio) {
            for (let vehiculo of vehiculos) {
                if (vehiculo.id === idVehiculo) {
                    for (let mecanico of mecanicos) {
                        if (mecanico.id === idMecanico) {

                            // ERROR: `if (mecanico.ocupado === true)` seguía adelante
                            // justo cuando el mecánico estaba ocupado.
                            // CORRECCIÓN: si está ocupado, se devuelve el error.
                            if (mecanico.ocupado) {
                                return "Mecánico ocupado";
                            }

                            // ERROR: el `for (let vehiculos of reparaciones)` tapaba el
                            // array `vehiculos`, usaba propiedades inexistentes
                            // (`vehiculos.reparaciones`) y, con `reparaciones` vacío,
                            // nunca se ejecutaba, así que el push no se alcanzaba jamás.
                            // CORRECCIÓN: bucle usado SOLO para comprobar si el vehículo
                            // ya tiene una reparación abierta. El push va fuera.
                            for (let reparacion of reparaciones) {
                                if (reparacion.idVehiculo === idVehiculo && reparacion.estado === "abierta") {
                                    return "Vehículo ya en reparación";
                                }
                            }

                            // ERROR: `reparaciones.precio > 0` (el array no tiene precio).
                            // CORRECCIÓN: usar el parámetro `precio`.
                            if (precio <= 0) {
                                return "Precio no válido";
                            }

                            // ERROR: nunca se marcaba al mecánico como ocupado.
                            // CORRECCIÓN: se hace DESPUÉS de todas las validaciones.
                            mecanico.ocupado = true;

                            // ERROR: el id no se incrementaba (todas serían la 1).
                            // CORRECCIÓN: post-incremento del contador.
                            let id = siguienteIdReparacion++;
                            reparaciones.push({
                                idReparacion: id,
                                idVehiculo: idVehiculo,
                                idMecanico: idMecanico,
                                descripcion: descripcion,
                                precio: precio,
                                estado: "abierta"
                            });
                            return `Reparación ${id} abierta con éxito`;
                        }
                    }
                    // ERROR: faltaban los returns específicos de cada caso
                    // (todo acababa en "ERROR").
                    return "Mecánico no encontrado";
                }
            }
            return "Vehículo no encontrado";
        },

        cerrarReparacion: function (idReparacion) {
            // ERROR: `reparaciones.length` sin `i <` hacía un bucle infinito.
            // CORRECCIÓN: `i < reparaciones.length`.
            for (let i = 0; i < reparaciones.length; i++) {
                // ERROR: `reparaciones.id` trataba el array como un objeto.
                // CORRECCIÓN: `reparaciones[i].idReparacion`.
                if (reparaciones[i].idReparacion === idReparacion) {

                    // ERROR: faltaba el mensaje "Reparación ya cerrada".
                    if (reparaciones[i].estado === "cerrada") {
                        return "Reparación ya cerrada";
                    }

                    // ERROR: escribías "cerrado", pero ingresosTotales busca "cerrada".
                    // CORRECCIÓN: mismo texto en todos los sitios.
                    reparaciones[i].estado = "cerrada";

                    // ERROR: recorrías `reparaciones` buscando al mecánico y comparabas
                    // con el id de la reparación.
                    // CORRECCIÓN: recorrer `mecanicos` y comparar con el idMecanico
                    // guardado en la reparación.
                    for (let mecanico of mecanicos) {
                        if (mecanico.id === reparaciones[i].idMecanico) {
                            mecanico.ocupado = false;
                            return "Reparación cerrada y mecánico liberado";
                        }
                    }
                    return "Reparación cerrada, pero el mecánico ya no existe";
                }
            }
            return "Reparación no encontrada";
        },

        cancelarReparacion: function (idReparacion) {
            for (let i = 0; i < reparaciones.length; i++) {
                // ERROR: `reparaciones.idReparacion` (array, no objeto).
                if (reparaciones[i].idReparacion === idReparacion) {

                    // ERROR: no comprobabas que estuviera abierta.
                    if (reparaciones[i].estado !== "abierta") {
                        return "Solo se pueden cancelar reparaciones abiertas";
                    }

                    // ERROR: borrabas sin guardar el objeto, y así no podías
                    // saber qué mecánico había que liberar.
                    // CORRECCIÓN: guardar el objeto ANTES del splice.
                    let reparacionActual = reparaciones[i];
                    reparaciones.splice(i, 1);

                    // ERROR: no se liberaba al mecánico (quedaría bloqueado).
                    for (let mecanico of mecanicos) {
                        if (mecanico.id === reparacionActual.idMecanico) {
                            mecanico.ocupado = false;
                            return "Reparación cancelada y mecánico liberado";
                        }
                    }
                    return "Reparación cancelada, pero el mecánico ya no existe";
                }
            }
            return "Reparación no encontrada";
        },

        historialVehiculo: function (matricula) {
            // ERROR: recorrías vehiculos y metías `vehiculo.descripcion`, que no
            // existe (las descripciones están en las reparaciones).
            // CORRECCIÓN: 1) encontrar el vehículo por matrícula,
            // 2) recorrer reparaciones buscando las de su id.
            for (let vehiculo of vehiculos) {
                if (vehiculo.matricula === matricula) {
                    let descripciones = [];
                    for (let reparacion of reparaciones) {
                        if (reparacion.idVehiculo === vehiculo.id) {
                            descripciones.push(reparacion.descripcion);
                        }
                    }
                    return descripciones;
                }
            }
            return "Vehículo no encontrado";
        },

        ingresosTotales: function () {
            let total = 0;
            // ERROR: el `return total` estaba DENTRO del forEach, así que la función
            // no devolvía nada.
            // CORRECCIÓN: for of, y return una sola vez al final.
            for (let reparacion of reparaciones) {
                if (reparacion.estado === "cerrada") {
                    total += reparacion.precio;
                }
            }
            return total;
        },

        verReparaciones: function () {
            // ERROR: no devolvía nada y `.map()` sin función da error.
            // CORRECCIÓN: construir una copia con un bucle y devolverla.
            let copia = [];
            for (let reparacion of reparaciones) {
                copia.push({ ...reparacion });
            }
            return copia;
        }
    };
}

// === PRUEBAS ===
const taller = crearTaller();

console.log(taller.agregarVehiculo("1234ABC", "Seat Ibiza"));
console.log(taller.agregarVehiculo("5678DEF", "Ford Focus"));
console.log(taller.agregarVehiculo("1234ABC", "Renault Clio"));   // Matrícula ya registrada
console.log(taller.agregarMecanico("Carlos", "Motor"));
console.log(taller.agregarMecanico("Lucía", "Frenos"));

console.log(taller.abrirReparacion(1, 1, "Cambio de aceite", 80));   // éxito, id 1
console.log(taller.abrirReparacion(2, 1, "Frenos", 120));            // Mecánico ocupado
console.log(taller.abrirReparacion(1, 2, "Revisión", 50));           // Vehículo ya en reparación
console.log(taller.abrirReparacion(99, 2, "Revisión", 50));          // Vehículo no encontrado
console.log(taller.abrirReparacion(2, 99, "Revisión", 50));          // Mecánico no encontrado
console.log(taller.abrirReparacion(2, 2, "Frenos", 0));              // Precio no válido
console.log(taller.abrirReparacion(2, 2, "Frenos", 120));            // éxito, id 2

console.log(taller.ingresosTotales());          // 0

console.log(taller.cerrarReparacion(1));        // confirmación
console.log(taller.cerrarReparacion(1));        // Reparación ya cerrada
console.log(taller.cerrarReparacion(99));       // Reparación no encontrada
console.log(taller.ingresosTotales());          // 80

console.log(taller.cancelarReparacion(1));      // Solo se pueden cancelar reparaciones abiertas
console.log(taller.cancelarReparacion(2));      // confirmación (Lucía queda libre)

console.log(taller.abrirReparacion(1, 1, "Neumáticos", 200));   // éxito, id 3
console.log(taller.historialVehiculo("1234ABC"));               // ["Cambio de aceite", "Neumáticos"]
console.log(taller.historialVehiculo("0000XXX"));               // Vehículo no encontrado
console.log(taller.verReparaciones());

 */

/*Ejercicio 40 => Crea una función fábrica crearSupermercado() que encapsule tres arrays privados: productos, clientes y compras. Usa un contador privado para idCompra.

Debe devolver un objeto con ocho métodos:

agregarProducto(nombre, categoria, precio, stock):
Si ya existe un producto con ese nombre, devuelve "Producto ya registrado" (recorre con for of).
Si precio <= 0 devuelve "Precio no válido".
Añade a productos: { id: productos.length + 1, nombre, categoria, precio, stock }.
Devuelve un string de confirmación.
agregarCliente(nombre):
Añade a clientes: { id: clientes.length + 1, nombre, puntos: 0 }.
Devuelve un string de confirmación.
comprar(idCliente, idProducto, cantidad):
Valida que el cliente exista ("Cliente no encontrado") y que el producto exista ("Producto no encontrado").
Comprueba que cantidad > 0 ("Cantidad no válida").
Comprueba que stock >= cantidad ("Stock insuficiente").
Si todo es correcto: resta el stock, calcula total = cantidad * precio, suma al cliente Math.floor(total / 10) puntos y registra en compras { idCompra, idCliente, idProducto, cantidad, total }.
Devuelve un string de éxito que incluya el id de la compra y el total.
devolverCompra(idCompra):
Busca la compra con for i. Si no existe, "Compra no encontrada".
La borra con .splice(), guarda el objeto temporalmente, devuelve el stock al producto y resta al cliente los puntos que ganó (Math.floor(total / 10)).
Devuelve confirmación.
gastoCliente(idCliente):
Si el cliente no existe, "Cliente no encontrado".
Devuelve la suma de total de todas sus compras (un número).
productosPorCategoria(categoria):
Devuelve un array con copias de los productos de esa categoría (con for of).
productoMasVendido():
Recorre compras y suma las cantidades por producto. Devuelve el nombre del producto con más unidades vendidas, o "Sin ventas" si no hay compras.
verCompras(): devuelve una copia del array (con for of y { ...objeto }).


function crearSupermercado() {
    let productos = [];
    let clientes = [];
    let compras = [];
    let siguienteIdCompra = 1;

    return {
        agregarProducto: function (nombre, categoria, precio, stock) {
            for (let producto of productos) {
                if (producto.nombre === nombre) {
                    // ERROR: el mensaje no era el del enunciado.
                    // CORRECCIÓN: texto exacto.
                    return "Producto ya registrado";
                }
                // ERROR: aquí comprobabas `producto.precio` (de un producto ya existente),
                // y con el array vacío este código nunca se ejecutaba.
                // CORRECCIÓN: se movió fuera del bucle y usa el parámetro `precio`.
            }
            if (precio <= 0) {
                return "Precio no válido";
            }
            productos.push({ id: productos.length + 1, nombre, categoria, precio, stock });
            // ERROR: imprimías `stock` en lugar de `precio` en el primer hueco.
            return `Producto ${nombre} añadido con precio ${precio} y stock ${stock}`;
        },

        agregarCliente: function (nombre) {
            clientes.push({ id: clientes.length + 1, nombre, puntos: 0 });
            return `Cliente ${nombre} agregado con éxito`;
        },

        comprar: function (idCliente, idProducto, cantidad) {
            for (let cliente of clientes) {
                if (cliente.id === idCliente) {
                    for (let producto of productos) {
                        if (producto.id === idProducto) {
                            // ERROR: las condiciones estaban anidadas sin return propio,
                            // así que todos los fallos acababan en "Producto no disponible".
                            // CORRECCIÓN: un return por cada validación, en orden.
                            if (cantidad <= 0) {
                                return "Cantidad no válida";
                            }
                            if (producto.stock < cantidad) {
                                return "Stock insuficiente";
                            }

                            // ERROR: no se restaba el stock.
                            producto.stock -= cantidad;

                            let total = cantidad * producto.precio;

                            // ERROR: `Math.floor(total/10);` se calculaba pero no se
                            // guardaba ni se sumaba al cliente.
                            // CORRECCIÓN: sumarlo a cliente.puntos.
                            cliente.puntos += Math.floor(total / 10);

                            let id = siguienteIdCompra++;
                            compras.push({
                                idCompra: id,
                                idCliente: idCliente,
                                idProducto: idProducto,
                                cantidad: cantidad,
                                total: total
                            });
                            return `Compra ${id} realizada con éxito. Total: ${total}`;
                        }
                    }
                    // CORRECCIÓN: mensaje propio para producto inexistente.
                    return "Producto no encontrado";
                }
            }
            // ERROR: aquí devolvías "Producto no disponible" para un cliente inexistente.
            return "Cliente no encontrado";
        },

        devolverCompra: function (idCompra) {
            for (let i = 0; i < compras.length; i++) {
                if (compras[i].idCompra === idCompra) {

                    // ERROR: `compras[i].idCliente !== idCompra` comparaba un id de
                    // cliente con un id de compra. No tenía sentido y rechazaba
                    // devoluciones válidas.
                    // CORRECCIÓN: eliminado. Si encontramos la compra, se puede devolver.

                    let compraActual = compras[i];
                    compras.splice(i, 1);

                    // ERROR: `for (let producto of compras)` recorría las compras, y
                    // `compras.cantidad` trataba el array como un objeto.
                    // CORRECCIÓN: recorrer `productos` y usar la cantidad del objeto
                    // guardado antes del splice.
                    for (let producto of productos) {
                        if (producto.id === compraActual.idProducto) {
                            producto.stock += compraActual.cantidad;
                            break;
                        }
                    }

                    // ERROR: no se restaban los puntos al cliente.
                    // CORRECCIÓN: restar los mismos que se sumaron, calculados con
                    // el total guardado en la compra.
                    for (let cliente of clientes) {
                        if (cliente.id === compraActual.idCliente) {
                            cliente.puntos -= Math.floor(compraActual.total / 10);
                            break;
                        }
                    }

                    return "Compra devuelta, stock y puntos restaurados";
                }
            }
            // CORRECCIÓN: texto exacto del enunciado.
            return "Compra no encontrada";
        },

        gastoCliente: function (idCliente) {
            for (let cliente of clientes) {
                if (cliente.id === idCliente) {
                    let total = 0;
                    // ERROR: sumabas el precio de todos los productos, que no tiene
                    // nada que ver con el cliente.
                    // CORRECCIÓN: recorrer compras y sumar el total de las suyas.
                    for (let compra of compras) {
                        if (compra.idCliente === idCliente) {
                            total += compra.total;
                        }
                    }
                    return total;
                }
            }
            // ERROR: con un cliente inexistente devolvías 0.
            return "Cliente no encontrado";
        },

        productosPorCategoria: function (categoria) {
            let resultado = [];
            for (let producto of productos) {
                if (producto.categoria === categoria) {
                    resultado.push({ ...producto });
                }
            }
            return resultado;
        },

        productoMasVendido: function () {
            // ERROR: usabas `stock === 0` como indicador. Un producto agotado no
            // tiene por qué ser el más vendido, y devolvías el primero que encontrabas.
            // CORRECCIÓN: sumar las unidades vendidas de cada producto recorriendo
            // compras, y quedarse con el máximo.
            let maxUnidades = 0;
            let nombreMasVendido = "Sin ventas";
            for (let producto of productos) {
                let unidades = 0;
                for (let compra of compras) {
                    if (compra.idProducto === producto.id) {
                        unidades += compra.cantidad;
                    }
                }
                if (unidades > maxUnidades) {
                    maxUnidades = unidades;
                    nombreMasVendido = producto.nombre;
                }
            }
            return nombreMasVendido;
        },

        verCompras: function () {
            let copia = [];
            for (let compra of compras) {
                copia.push({ ...compra });
            }
            return copia;
        }
    };
}

// === PRUEBAS ===
const super1 = crearSupermercado();

console.log(super1.agregarProducto("Leche", "Lácteos", 2, 20));
console.log(super1.agregarProducto("Pan", "Panadería", 1, 30));
console.log(super1.agregarProducto("Queso", "Lácteos", 8, 5));
console.log(super1.agregarProducto("Leche", "Lácteos", 2, 10));   // Producto ya registrado
console.log(super1.agregarProducto("Agua", "Bebidas", 0, 10));    // Precio no válido
console.log(super1.agregarCliente("Ana"));
console.log(super1.agregarCliente("Luis"));

console.log(super1.comprar(1, 3, 3));     // éxito, id 1, total 24
console.log(super1.comprar(1, 3, 5));     // Stock insuficiente
console.log(super1.comprar(1, 1, 0));     // Cantidad no válida
console.log(super1.comprar(99, 1, 1));    // Cliente no encontrado
console.log(super1.comprar(1, 99, 1));    // Producto no encontrado
console.log(super1.comprar(2, 1, 10));    // éxito, id 2, total 20
console.log(super1.comprar(2, 2, 5));     // éxito, id 3, total 5

console.log(super1.gastoCliente(1));      // 24
console.log(super1.gastoCliente(2));      // 25
console.log(super1.gastoCliente(99));     // Cliente no encontrado

console.log(super1.productosPorCategoria("Lácteos"));   // Leche (stock 10) y Queso (stock 2)
console.log(super1.productoMasVendido());               // Leche

console.log(super1.devolverCompra(2));    // confirmación
console.log(super1.devolverCompra(99));   // Compra no encontrada
console.log(super1.productoMasVendido()); // Pan (5 unidades)

console.log(super1.comprar(1, 2, 1));     // éxito, id 4
console.log(super1.verCompras());

 */

/*Ejercicio 41 => Crea una función fábrica crearEscuela() que encapsule tres arrays privados: alumnos, asignaturas y matriculas. Usa un contador privado para idMatricula.

Debe devolver un objeto con ocho métodos:

agregarAlumno(nombre, edad):
Si edad < 16, devuelve "Edad no válida".
Añade a alumnos: { id: alumnos.length + 1, nombre, edad }.
Devuelve un string de confirmación.
agregarAsignatura(nombre, plazas):
Si ya existe una asignatura con ese nombre, devuelve "Asignatura ya registrada" (recorre con for of).
Si plazas <= 0, devuelve "Plazas no válidas".
Añade a asignaturas: { id: asignaturas.length + 1, nombre, plazas }.
Devuelve un string de confirmación.
matricular(idAlumno, idAsignatura):
Valida que el alumno exista ("Alumno no encontrado") y que la asignatura exista ("Asignatura no encontrada").
Comprueba que queden plazas ("Asignatura completa").
Comprueba que el alumno no esté ya matriculado en esa asignatura ("Alumno ya matriculado"). Recorre matriculas.
Si todo es correcto: resta una plaza y registra en matriculas { idMatricula, idAlumno, idAsignatura, nota: null }.
Devuelve un string de éxito que incluya el id de la matrícula.
ponerNota(idMatricula, nota):
Si la matrícula no existe, "Matrícula no encontrada".
Si nota < 0 o nota > 10, "Nota no válida".
Asigna la nota a la matrícula y devuelve confirmación.
anularMatricula(idMatricula):
Busca con for i. Si no existe, "Matrícula no encontrada".
Si ya tiene nota (nota !== null), "No se puede anular: ya tiene nota".
La borra con .splice(), guarda el objeto temporalmente y devuelve la plaza a la asignatura.
notaMedia(idAlumno):
Si el alumno no existe, "Alumno no encontrado".
Devuelve la media de las notas de sus matrículas que tengan nota (ignora las que son null). Si no tiene ninguna, devuelve "Sin notas".
Usa 3 decimales: Number(media.toFixed(3)).
aprobadosDeAsignatura(idAsignatura):
Devuelve un array con los nombres de los alumnos con nota >= 5 en esa asignatura (cruza matriculas con alumnos).
verMatriculas(): devuelve una copia del array (con for of y { ...objeto }).



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

 */

/*Ejercicio 42 => agregarCoche(matricula, modelo, precioDia):
Si ya existe un coche con esa matrícula, devuelve "Matrícula ya registrada" (recorre con for of).
Si precioDia <= 0, devuelve "Precio no válido".
Añade a coches: { id: coches.length + 1, matricula, modelo, precioDia, disponible: true }.
Devuelve un string de confirmación.
agregarCliente(nombre, edad):
Si edad < 18, devuelve "Cliente menor de edad".
Añade a clientes: { id: clientes.length + 1, nombre, edad }.
Devuelve un string de confirmación.
alquilar(idCliente, idCoche, dias):
Valida que el cliente exista ("Cliente no encontrado") y que el coche exista ("Coche no encontrado").
Comprueba que dias > 0 ("Días no válidos").
Comprueba que el coche esté disponible ("Coche no disponible").
Comprueba que el cliente no tenga ya un alquiler con estado === "activo" ("Cliente ya tiene un alquiler activo"). Recorre alquileres.
Si todo es correcto: pone disponible = false y registra en alquileres { idAlquiler, idCliente, idCoche, dias, total: dias * precioDia, estado: "activo" }.
Devuelve un string de éxito que incluya el id del alquiler y el total.
devolverCoche(idAlquiler, diasReales):
Busca el alquiler con for i. Si no existe, "Alquiler no encontrado".
Si estado !== "activo", "Alquiler ya finalizado".
Calcula los días extra: extra = diasReales - dias (si sale negativo, es 0). El total final es diasReales * precioDia + extra * precioDia * 0.5 (los días extra llevan un 50% de recargo).
Actualiza total del alquiler, pone estado = "finalizado" y deja el coche disponible = true.
Devuelve un string que incluya el total final.
cancelarAlquiler(idAlquiler):
Solo si está "activo" (si no, "Solo se pueden cancelar alquileres activos").
Lo borra con .splice(), guarda el objeto temporalmente y libera el coche.
Si no existe, "Alquiler no encontrado".
cochesDisponibles(): devuelve un array con copias de los coches con disponible === true.
ingresosTotales(): devuelve la suma de total de los alquileres "finalizado" (los activos aún no cuentan).
clienteMasGasta():
Para cada cliente, suma el total de sus alquileres finalizados.
Devuelve el nombre del que más ha gastado, o "Sin alquileres" si no hay ninguno finalizado.
verAlquileres(): devuelve una copia del array (con for of y { ...objeto }).



function crearAlquiler() {
    let coches = [];
    let clientes = [];
    let alquileres = [];
    let siguienteIdAlquiler = 1;

    return {
        agregarCoche: function (matricula, modelo, precioDia) {
            // Duplicado: compara el dato nuevo con los guardados -> bucle
            for (let coche of coches) {
                if (coche.matricula === matricula) {
                    return "Matrícula ya registrada";
                }
            }
            // Precio: solo mira el parámetro -> sin bucle
            if (precioDia <= 0) {
                return "Precio no válido";
            }
            coches.push({ id: coches.length + 1, matricula, modelo, precioDia, disponible: true });
            return `Coche ${modelo} con matrícula ${matricula} añadido con éxito`;
        },

        agregarCliente: function (nombre, edad) {
            // Edad: solo mira el parámetro -> sin bucle
            if (edad < 18) {
                return "Cliente menor de edad";
            }
            clientes.push({ id: clientes.length + 1, nombre, edad });
            return `Cliente ${nombre} agregado con éxito`;
        },

        alquilar: function (idCliente, idCoche, dias) {
            for (let cliente of clientes) {
                if (cliente.id === idCliente) {
                    for (let coche of coches) {
                        if (coche.id === idCoche) {
                            if (dias <= 0) {
                                return "Días no válidos";
                            }
                            if (!coche.disponible) {
                                return "Coche no disponible";
                            }
                            for (let alquiler of alquileres) {
                                if (alquiler.idCliente === idCliente && alquiler.estado === "activo") {
                                    return "Cliente ya tiene un alquiler activo";
                                }
                            }
                            coche.disponible = false;
                            let id = siguienteIdAlquiler++;
                            let total = dias * coche.precioDia;
                            alquileres.push({
                                idAlquiler: id,
                                idCliente: idCliente,
                                idCoche: idCoche,
                                dias: dias,
                                total: total,
                                estado: "activo"
                            });
                            return `Alquiler ${id} realizado con éxito. Total: ${total}`;
                        }
                    }
                    return "Coche no encontrado";
                }
            }
            return "Cliente no encontrado";
        },

        devolverCoche: function (idAlquiler, diasReales) {
            for (let i = 0; i < alquileres.length; i++) {
                if (alquileres[i].idAlquiler === idAlquiler) {
                    if (alquileres[i].estado !== "activo") {
                        return "Alquiler ya finalizado";
                    }
                    for (let coche of coches) {
                        if (coche.id === alquileres[i].idCoche) {
                            let extra = diasReales - alquileres[i].dias;
                            if (extra < 0) {
                                extra = 0;
                            }
                            let totalFinal = diasReales * coche.precioDia + extra * coche.precioDia * 0.5;
                            alquileres[i].total = totalFinal;
                            alquileres[i].estado = "finalizado";
                            coche.disponible = true;
                            return `Coche devuelto. Total final: ${totalFinal}`;
                        }
                    }
                    return "Coche no encontrado";
                }
            }
            return "Alquiler no encontrado";
        },

        cancelarAlquiler: function (idAlquiler) {
            for (let i = 0; i < alquileres.length; i++) {
                if (alquileres[i].idAlquiler === idAlquiler) {
                    if (alquileres[i].estado !== "activo") {
                        return "Solo se pueden cancelar alquileres activos";
                    }
                    let alquilerActual = alquileres[i];
                    alquileres.splice(i, 1);
                    for (let coche of coches) {
                        if (coche.id === alquilerActual.idCoche) {
                            coche.disponible = true;
                            return "Alquiler cancelado y coche liberado";
                        }
                    }
                    return "Alquiler cancelado, pero el coche ya no existe";
                }
            }
            return "Alquiler no encontrado";
        },

        cochesDisponibles: function () {
            let resultado = [];
            for (let coche of coches) {
                if (coche.disponible === true) {
                    resultado.push({ ...coche });
                }
            }
            return resultado;
        },

        ingresosTotales: function () {
            let total = 0;
            for (let alquiler of alquileres) {
                if (alquiler.estado === "finalizado") {
                    total += alquiler.total;
                }
            }
            return total;
        },

        clienteMasGasta: function () {
            let maximo = 0;
            let nombre = "Sin alquileres";
            for (let cliente of clientes) {
                let gastado = 0;
                for (let alquiler of alquileres) {
                    if (alquiler.idCliente === cliente.id && alquiler.estado === "finalizado") {
                        gastado += alquiler.total;
                    }
                }
                if (gastado > maximo) {
                    maximo = gastado;
                    nombre = cliente.nombre;
                }
            }
            return nombre;
        },

        verAlquileres: function () {
            let copia = [];
            for (let alquiler of alquileres) {
                copia.push({ ...alquiler });
            }
            return copia;
        }
    };
}

// === PRUEBAS ===
const alquiler = crearAlquiler();

console.log(alquiler.agregarCoche("1111AAA", "Seat Ibiza", 30));
console.log(alquiler.agregarCoche("2222BBB", "Ford Focus", 40));
console.log(alquiler.agregarCoche("3333CCC", "Audi A3", 70));
console.log(alquiler.agregarCoche("1111AAA", "Renault Clio", 25));   // Matrícula ya registrada
console.log(alquiler.agregarCoche("4444DDD", "Fiat 500", 0));        // Precio no válido
console.log(alquiler.agregarCliente("Ana", 25));
console.log(alquiler.agregarCliente("Luis", 30));
console.log(alquiler.agregarCliente("Eva", 17));                     // Cliente menor de edad

console.log(alquiler.alquilar(1, 1, 3));      // éxito, id 1, total 90
console.log(alquiler.alquilar(2, 1, 2));      // Coche no disponible
console.log(alquiler.alquilar(1, 2, 2));      // Cliente ya tiene un alquiler activo
console.log(alquiler.alquilar(2, 2, 0));      // Días no válidos
console.log(alquiler.alquilar(99, 1, 1));     // Cliente no encontrado
console.log(alquiler.alquilar(2, 99, 1));     // Coche no encontrado
console.log(alquiler.alquilar(2, 2, 4));      // éxito, id 2, total 160

console.log(alquiler.cochesDisponibles());    // solo el Audi A3

console.log(alquiler.devolverCoche(1, 5));    // total final 180
console.log(alquiler.devolverCoche(1, 5));    // Alquiler ya finalizado
console.log(alquiler.devolverCoche(2, 3));    // total final 120
console.log(alquiler.devolverCoche(99, 1));   // Alquiler no encontrado

console.log(alquiler.ingresosTotales());      // 300
console.log(alquiler.clienteMasGasta());      // Ana

console.log(alquiler.cancelarAlquiler(1));    // Solo se pueden cancelar alquileres activos
console.log(alquiler.alquilar(1, 3, 2));      // éxito, id 3, total 140
console.log(alquiler.cancelarAlquiler(3));    // confirmación
console.log(alquiler.cancelarAlquiler(99));   // Alquiler no encontrado
console.log(alquiler.alquilar(2, 3, 1));      // éxito, id 4, total 70

console.log(alquiler.verAlquileres());

 */


/*####################EJERCICIOS PROTOTYPE########################### */
/*Ejercicio 1 => Es un ejercicio sencillo para practicar el molde con this y prototype. Sin validaciones complicadas: solo un array y cuatro métodos.

Crea una función constructora ListaTareas() (con mayúscula, se usa con new).

En el constructor (con this.):

this.tareas = []; (el array de tareas)
this.siguienteId = 1; (contador para los ids)

En el prototype, estos cuatro métodos:

agregar(titulo):
Añade a this.tareas: { id: this.siguienteId++, titulo: titulo, hecha: false }.
Devuelve un string de confirmación.
completar(id):
Busca la tarea con for of.
Si la encuentra, pone hecha = true y devuelve "Tarea completada".
Si no, devuelve "Tarea no encontrada".
eliminar(id):
Busca la tarea con for i, la borra con .splice() y devuelve "Tarea eliminada".
Si no existe, devuelve "Tarea no encontrada".
pendientes():
Devuelve un array con copias ({ ...tarea }) de las tareas con hecha === false.

 

function ListaTareas() {
    this.tareas = [];
    this.siguienteId = 1;
}

ListaTareas.prototype.agregar = function (titulo) {
    this.tareas.push({ id: this.siguienteId++, titulo: titulo, hecha: false });
    return `Tarea "${titulo}" añadida con éxito`;
};

ListaTareas.prototype.completar = function (id) {
    for (let tarea of this.tareas) {
        if (tarea.id === id) {
            tarea.hecha = true;
            return "Tarea completada";
        }
    }
    return "Tarea no encontrada";
};

ListaTareas.prototype.eliminar = function (id) {
    for (let i = 0; i < this.tareas.length; i++) {
        if (this.tareas[i].id === id) {
            this.tareas.splice(i, 1);
            return "Tarea eliminada";
        }
    }
    return "Tarea no encontrada";
};

ListaTareas.prototype.pendientes = function () {
    let resultado = [];
    for (let tarea of this.tareas) {
        if (tarea.hecha === false) {
            resultado.push({ ...tarea });
        }
    }
    return resultado;
};

// === PRUEBAS ===
const lista = new ListaTareas();

console.log(lista.agregar("Estudiar prototype"));
console.log(lista.agregar("Hacer la compra"));
console.log(lista.agregar("Llamar al médico"));

console.log(lista.completar(1));      // Tarea completada
console.log(lista.completar(99));     // Tarea no encontrada

console.log(lista.pendientes());      // tareas 2 y 3

console.log(lista.eliminar(2));       // Tarea eliminada
console.log(lista.eliminar(99));      // Tarea no encontrada

console.log(lista.pendientes());      // solo la tarea 3

console.log(lista.agregar("Nueva"));  // id 4
console.log(lista.pendientes());      // tareas 3 y 4
*/