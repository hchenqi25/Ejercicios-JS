/*## Ejercicio 1

Escribe una función llamada "aplanar" que reciba un array de arrays
de números y retorne un único array con todos los números en orden, sin anidar

Usa reduce() y el operador spread (...)

    ```
aplanar([ [1, 2], [3, 4], [5] ]) -> [1, 2, 3, 4, 5]
aplanar([ [10], [20, 30], [] ]) -> [10, 20, 30]
*/


function  aplanar(arrays){
    return arrays.reduce((acc, cur) => [...acc, ...cur], []);
}


console.log(aplanar([[1, 2], [3, 4], [5]]));
console.log(aplanar([[10], [20, 30], []]));





/*Ejercicio 2

Tienes este array de productos:

```
const productos = [
    {nombre: "Camiseta", precio: 15, categoria: "ropa", stock: 3},
    {nombre: "Pantalón", precio: 40, categoria: "ropa", stock: 0},
    {nombre: "Teclado", precio: 75, categoria: "tecnología", stock: 12},
    {nombre: "Auriculares", precio: 60, categoria: "tecnología", stock: 5},
];
```

a) Filtra solo los productos con stock > 0 y retorna un array con sus nombres en mayúsculas
`Resultado esperado: ["Camiseta", "Teclado", "Auriculares"]`

b) Calcula el precio total de todos los productos con stock > 0.

c) Devuelve el producto más caro de toda la lista (con o sin stock).

 */

const productos = [
    {nombre: "Camiseta", precio: 15, categoria: "ropa", stock: 3},
    {nombre: "Pantalón", precio: 40, categoria: "ropa", stock: 0},
    {nombre: "Teclado", precio: 75, categoria: "tecnología", stock: 12},
    {nombre: "Auriculares", precio: 60, categoria: "tecnología", stock: 5},
];
//Productos sin stock
let sin_stock=[];
for (let producto of productos) {
    if (producto.stock === 0) {
        sin_stock.push(producto.nombre)
    }
}
console.log(sin_stock);
//Productos mas caros con stock
let suma_total=0;

for (let producto of productos) {
    if(producto.stock>0){
        suma_total+=producto.precio;
    }
}
console.log(suma_total);


//Producto mas caro


function productoMasCaro(productos) {
    let masCaro = productos[0];

    for (let producto of productos) {
        if (producto.precio > masCaro.precio) {
            masCaro = producto;
        }
    }

    return masCaro;
}

console.log(productoMasCaro(productos));

/*Tienes este array de alumnos con sus notas:

```
const alumnos = [
    {nombre: "Ana", notas: [8, 7, 9, 6]},
    {nombre: "Luis", notas: [4, 5, 3, 6]},
    {nombre: "Maria", notas: [10, 9, 8, 10]},
    {nombre: "Pedro", notas: [5, 4, 6, 3]},
    {nombre: "Sofia", notas: [7, 8, 7, 9]},
];
```

a) Crea un nuevo array donde cada elemento sea un objeto con el nombre del alumno y su media de notas *(redondeada a 2 decimales)*
`Resultado esperado: [ {nombre: "Ana", media: 7.50} ]`

b) Filtra y devuelve solo los alumnos aprobados (media >= 5).

c) ¿Algún alumno tiene alguna nota perfecta (10)?. Retorna true o false usando un método de iteración avanzado.

 */
const alumnos = [
    {nombre: "Ana", notas: [8, 7, 9, 6]},
    {nombre: "Luis", notas: [4, 5, 3, 6]},
    {nombre: "Maria", notas: [10, 10, 10, 10]},
    {nombre: "Pedro", notas: [5, 4, 6, 3]},
    {nombre: "Sofia", notas: [7, 8, 7, 9]},
];

/*a) Crea un nuevo array donde cada elemento sea un objeto con el nombre del alumno y su media de notas *(redondeada a 2 decimales)*
`Resultado esperado: [ {nombre: "Ana", media: 7.50} ]`
 */
let nuevo = [];
alumnos.forEach(alumno => {
    let suma = 0;
    alumno.notas.forEach(nota => {
        suma += nota;
    });

    let media = suma / alumno.notas.length;

    nuevo.push({
        nombre: alumno.nombre,
        media: Number(media.toFixed(2))
    });
});
console.log(nuevo);

/*b) Filtra y devuelve solo los alumnos aprobados (media >= 5).*/
let aprobados = [];
for (let aptos of nuevo) {
    if(aptos.media>=5){
        aprobados.push(aptos);

    }
}
console.log(aprobados);

/*c) ¿Algún alumno tiene alguna nota perfecta (10)?. Retorna true o false usando un método de iteración avanzado. */
const hayNotaPerfecta = alumnos.some(alumno => alumno.notas.some(nota => nota === 10));
console.log(hayNotaPerfecta); // true
/*Ejercicio 4 => Crea una función llamada "crearPila" que implemente una estructura de datos tipo pila (stack) usando un closure.

La función principal (crearPila) NO DEBE recibir parámetros y debe retornar un objeto JSON con estos métodos:
- apilar(valor) => añade el valor al tope de la pila.
- desapilar() => elimina y retorna el valor del tope. Si la pila está vacía retorna *null*.
- tope() => devuelve el valor del tope de la pila sin eliminarlo. Si está vacía retorna *null*.
- tamano() => retorna el número de elementos que tiene la pila.

IMPORTANTE: La pila (el array interno) NO debe ser accesible desde fuera.

 */
function crearPila() {
    const elementos = []; // privado: solo accesible desde los métodos

    return {
        apilar(valor) {
            elementos.push(valor);
        },
        desapilar() {
            return elementos.length === 0 ? null : elementos.pop();
        },
        tope() {
            return elementos.length === 0 ? null : elementos[elementos.length - 1];
        },
        tamano() {
            return elementos.length;
        }
    };
}

// Pruebas
const pila = crearPila();
pila.apilar(1);
pila.apilar(2);
pila.apilar(3);
console.log(pila.tope());     // 3
console.log(pila.desapilar()); // 3

console.log(pila.tope());     // 2
console.log(pila.tamano());   // 2

// Pila vacía
const vacia = crearPila();
console.log(vacia.desapilar()); // null
console.log(vacia.tope());      // null
console.log(vacia.tamano());    // 0

// El array interno no es accesible
console.log(pila.elementos);

/*## Ejercicio 5

Crea una clase llamada "CuentaBancaria" con:

- constructor(titular, saldoInicial). Guarda el titular y el saldo. El historial empieza vacío.
- ingresar(cantidad) => Suma la cantidad al saldo y guarda en el historial:
  - "Ingreso: +100 | Saldo: 600"
- retirar(cantidad) => Resta la cantidad al saldo si hay fondos suficientes y guarda en el historial.
  - "Retiro -50 | Saldo: 550"
  - Si no hay fondos, muestra por consola: "Saldo insuficiente" y NO guardes nada en el historial.
- verHistorial() => imprime por consola cada movimiento del historial numerado:
  - "1. Ingreso: +100 | Saldo: 500"
  - "2. Ingreso: +100 | Saldo: 600"
  - "3. Ingreso: +50 | Saldo: 650"
  - "4. Retiro: -250 | Saldo: 400"
- getSaldoActual() => Getter que retorna el saldo actual.

```
Ejemplo:

const cuenta = new CuentaBancaria("Camilo", 500);
cuenta.ingresar(100);
cuenta.retirar(50);
cuenta.retirar(700); // Saldo insuficiente
console.log(cuenta.saldoActual); // 550
cuenta.verHistorial();
```


*/
class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.historial = [];
    }

    ingresar(cantidad) {
        this.saldo += cantidad;
        this.historial.push(`Ingreso: +${cantidad} | Saldo: ${this.saldo}`);
    }

    retirar(cantidad) {
        if (cantidad > this.saldo) {
            console.log("Saldo insuficiente");
            return; // no se guarda nada en el historial
        }
        this.saldo -= cantidad;
        this.historial.push(`Retiro: -${cantidad} | Saldo: ${this.saldo}`);
    }

    verHistorial() {
        this.historial.forEach((movimiento, i) => {
            console.log(`${i + 1}. ${movimiento}`);
        });
    }

    get saldoActual() {
        return this.saldo;
    }
}

// Pruebas
const cuenta = new CuentaBancaria("Camilo", 500);
cuenta.ingresar(100);
cuenta.retirar(50);
cuenta.retirar(700);              // Saldo insuficiente
console.log(cuenta.saldoActual);  // 550
cuenta.verHistorial();
// 1. Ingreso: +100 | Saldo: 600
// 2. Retiro: -50 | Saldo: 550
