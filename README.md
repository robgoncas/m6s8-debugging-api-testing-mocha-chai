
# Clase de Testing: Objetivos

### 1. Tipos de errores en la programación.
## (Lógica) bucle infinito loop que no termina y no deja avanzar al siguiente bloque de código. resultado aritmético erroneo
## (Runtime o Ejecución) 
## (Sintaxis)

### 2. Concepto de Debugging. (Bug=Bicho) Error (3) en el código lo que no permite una correcta ejecución del programa
### 3. Debugging con Visual Studio Code (VS Code).
### 4. Introducción al testing con Mocha y Chai.
### 5. Códigos HTTP.

---

## 1. Tipos de errores en la programación

### a. **Errores de sintaxis**:
   - Son los errores que ocurren cuando el código no sigue las reglas del lenguaje de programación.
   - Ejemplo:
     ```javascript
     console.log("Hola Mundo // Falta cerrar las comillas.
     ```

### b. **Errores de ejecución (runtime errors)**:
   - Ocurren cuando el programa está en ejecución y algo no sale como se esperaba.
   - Ejemplo:
     ```javascript
     let a = 5;
     console.log(a.toUpperCase()); // Error: a no es un string.
     ```

### c. **Errores lógicos**:
   - Estos errores son más difíciles de detectar porque el programa no falla, pero el resultado no es el esperado.
   - Ejemplo: PAPOMUDAS ParentesisPotenciasMultiplicacionDivisionAdicionSustracción - PEMDAS PotenciasExponentesMultiplicacionDivisionAdicionSustraccion
     ```javascript
     let total = 10 + 2 * 3; // ¿El resultado esperado es 36 o 16?
     ```

---

## 2. Concepto de Debugging

### a. ¿Qué es el Debugging?
   - **Debugging** es el proceso de identificar, analizar y corregir errores o "bugs" en el código.
   - El objetivo del debugging es hacer que el programa funcione como se espera.

### b. Buenas prácticas de debugging:
   - **Leer los errores** que el entorno o consola arrojan.
   - Usar herramientas como **breakpoints** para detener la ejecución y observar el estado del programa.
   - **Imprimir mensajes** (console.log) en el código para rastrear variables y el flujo de la aplicación.

---

## 3. Debugging con Visual Studio Code (VS Code)

### a. ¿Por qué usar VS Code para debugging?
   - VS Code es una de las herramientas más populares para desarrollo y debugging gracias a su **depurador integrado** y su facilidad de uso.

### b. Uso básico del Debugging en VS Code:
   1. **Configuración**:
      - Crea un archivo `launch.json` para configurar el depurador.
      - Selecciona el entorno correcto (Node.js, navegador, etc.).
   
   2. **Breakpoints**:
      - Puedes agregar un breakpoint (punto de interrupción) haciendo clic en la línea del número en el editor.
   
   3. **Panel de Debugging**:
      - Inicia el debugging usando el icono de "play" o presionando `F5`.
      - El código se detendrá en los puntos de interrupción y podrás ver el valor de las variables en el panel lateral.
   
   4. **Herramientas adicionales**:
      - **Step Over** (pasar a la siguiente línea sin entrar a funciones).
      - **Step Into** (entrar a una función para inspeccionarla).
      - **Step Out** (salir de una función).

### Ejemplo:
```javascript
function suma(a, b) {
    return a + b;
}

let resultado = suma(2, 3);
console.log(resultado); // Agregar un breakpoint en esta línea.
```

---

## 4. Introducción al testing con Mocha y Chai

### a. ¿Qué es el Testing?
   - El **testing** es el proceso de validar que tu código funcione correctamente, como se espera. Se ejecutan casos de prueba sobre el código para encontrar errores antes de que lleguen a producción.

### b. **Mocha**:
   - **Mocha** es un framework de testeo para JavaScript, que se ejecuta en Node.js. Es una herramienta simple y flexible para organizar y ejecutar pruebas.
   - Instalación:
     ```bash
     npm install --save-dev mocha
     ```

### c. **Chai**:
   - **Chai** es una librería de aserciones (assertions) que se usa junto con Mocha. Ofrece diferentes estilos de aserción: `should`, `expect` y `assert`.
   - Instalación:
     ```bash
     npm install --save-dev chai
     ```

### d. Ejemplo básico de test usando Mocha y Chai:
   1. Crear un archivo `test.js` en la carpeta `test`.
   2. Escribir una prueba para una función:
   ```javascript
   const { expect } = require('chai');

   // Función a probar
   function suma(a, b) {
       return a + b;
   }

   // Pruebas con Mocha y Chai
   describe('Test de la función suma', () => {
       it('debería devolver la suma de dos números', () => {
           const resultado = suma(2, 3);
           expect(resultado).to.equal(5); // Prueba que el resultado sea 5
       });

       it('debería devolver un número', () => {
           const resultado = suma(2, 3);
           expect(resultado).to.be.a('number'); // Prueba que el resultado sea un número
       });
   });
   ```

   3. Ejecutar las pruebas con Mocha:
   ```bash
   npx mocha
   ```

---

## 5. Códigos HTTP

### a. **Códigos HTTP**:
   - Los códigos de estado HTTP son usados para indicar el resultado de las solicitudes HTTP. Los códigos más comunes incluyen:

     - **2xx: Éxito**:
       - **200 OK**: Solicitud exitosa.
       - **201 Created**: El recurso ha sido creado con éxito.

     - **4xx: Errores del cliente**:
       - **400 Bad Request**: Solicitud mal formada.
       - **401 Unauthorized**: Falta autenticación.
       - **404 Not Found**: Recurso no encontrado.

     - **5xx: Errores del servidor**:
       - **500 Internal Server Error**: Error en el servidor.
       - **503 Service Unavailable**: Servicio no disponible.

### b. Ejemplo de códigos HTTP en Node.js:
   ```javascript
   const http = require('http');

   const server = http.createServer((req, res) => {
       if (req.url === '/' && req.method === 'GET') {
           res.statusCode = 200;
           res.end('OK');
       } else if (req.url === '/not-found' && req.method === 'GET') {
           res.statusCode = 404;
           res.end('Página no encontrada');
       } else {
           res.statusCode = 500;
           res.end('Error interno del servidor');
       }
   });

   server.listen(3000, () => {
       console.log('Servidor en http://localhost:3000');
   });
   ```

---

## Actividades sugeridas:
- **Ejercicio 1**: Encontrar y corregir errores en fragmentos de código (debugging).
- **Ejercicio 2**: Escribir tests simples para funciones en Mocha y Chai.
- **Ejercicio 3**: Configurar breakpoints y depurar un código en VS Code.
- **Ejercicio 4**: Crear un servidor en Node.js que devuelva diferentes códigos de estado HTTP.