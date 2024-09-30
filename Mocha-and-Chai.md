
# Introducción a Mocha y Chai

En el desarrollo de software, garantizar la calidad y el correcto funcionamiento del código es fundamental. Para ello, las herramientas de **testing** juegan un papel crucial. Entre las más populares en el ecosistema de **JavaScript** se encuentran **Mocha** y **Chai**. Este documento proporciona una introducción a ambas herramientas, describiendo sus funciones, características y diferencias.

---

## ¿Qué es Mocha?

**Mocha** es un **framework de pruebas** para JavaScript que se ejecuta tanto en el entorno de **Node.js** como en el navegador. Fue diseñado para ser flexible y fácil de usar, permitiendo a los desarrolladores escribir y organizar pruebas de manera eficiente.

### Características de Mocha

- **Soporte para pruebas asincrónicas**: Permite manejar operaciones asincrónicas con facilidad.
- **Estructura flexible**: Ofrece una estructura de pruebas basada en `describe` e `it`, lo que facilita la organización de las pruebas.
- **Integración con otras librerías**: Funciona bien con librerías de aserciones como **Chai** y herramientas de generación de informes.
- **Hooks**: Proporciona hooks (`before`, `after`, `beforeEach`, `afterEach`) para configurar el entorno de pruebas y realizar limpieza después de las pruebas.

### Funciones Principales de Mocha

- **`describe`**: Agrupa un conjunto de pruebas relacionadas.
- **`it`**: Define una prueba individual.
- **Hooks**:
  - **`before`**: Se ejecuta una vez antes de todas las pruebas en un bloque `describe`.
  - **`after`**: Se ejecuta una vez después de todas las pruebas en un bloque `describe`.
  - **`beforeEach`**: Se ejecuta antes de cada prueba en un bloque `describe`.
  - **`afterEach`**: Se ejecuta después de cada prueba en un bloque `describe`.

### Ejemplo Básico con Mocha

```javascript
// test/ejemplo.test.js

const assert = require('assert');

describe('Array', () => {
  before(() => {
    // Configuración antes de todas las pruebas
  });

  after(() => {
    // Limpieza después de todas las pruebas
  });

  describe('#indexOf()', () => {
    it('debería devolver -1 cuando el valor no está presente', () => {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

---

## ¿Qué es Chai?

**Chai** es una **librería de aserciones** para JavaScript que se utiliza comúnmente junto con frameworks de pruebas como **Mocha**. Proporciona una interfaz rica y legible para escribir aserciones que verifican si el código funciona como se espera.

### Características de Chai

- **Estilos de aserción**: Ofrece tres estilos diferentes de aserciones: `should`, `expect` y `assert`.
- **Extensible**: Permite la creación de plugins para ampliar su funcionalidad.
- **Legible y expresivo**: Las aserciones están diseñadas para ser claras y fáciles de entender.

### Funciones Principales de Chai

- **Estilo `expect`**:
  ```javascript
  const { expect } = require('chai');

  expect(valor).to.equal(esperado);
  expect(array).to.include(elemento);
  ```
  
- **Estilo `should`**:
  ```javascript
  const chai = require('chai');
  const should = chai.should();

  valor.should.equal(esperado);
  array.should.include(elemento);
  ```
  
- **Estilo `assert`**:
  ```javascript
  const { assert } = require('chai');

  assert.equal(valor, esperado);
  assert.include(array, elemento);
  ```

### Ejemplo Básico con Chai

```javascript
// test/ejemploChai.test.js

const { expect } = require('chai');

describe('Chai Expect', () => {
  it('debería verificar si un número es igual al esperado', () => {
    const resultado = 5;
    expect(resultado).to.equal(5);
  });

  it('debería verificar si un array incluye un elemento específico', () => {
    const frutas = ['manzana', 'banana', 'cereza'];
    expect(frutas).to.include('banana');
  });
});
```

---

## Diferencias entre Mocha y Chai

Aunque **Mocha** y **Chai** a menudo se utilizan juntas en el desarrollo de pruebas, cumplen roles diferentes en el proceso de testing:

| Aspecto        | Mocha                                      | Chai                                      |
|----------------|--------------------------------------------|-------------------------------------------|
| **Tipo**       | Framework de pruebas                       | Librería de aserciones                    |
| **Función**    | Organiza y ejecuta las pruebas            | Proporciona métodos para verificar resultados |
| **Uso Principal** | Define la estructura de las pruebas (`describe`, `it`) | Escribe aserciones para validar condiciones (`expect`, `should`, `assert`) |
| **Integración** | Se integra con librerías de aserciones como Chai | Se utiliza junto con frameworks de pruebas como Mocha |

### Resumen de Roles

- **Mocha** se encarga de la **estructura** y **ejecución** de las pruebas, permitiendo agrupar pruebas, definir casos de prueba y gestionar la ejecución.
- **Chai** se enfoca en las **verificaciones** dentro de las pruebas, proporcionando una sintaxis clara y expresiva para validar resultados.

---

## Ejemplo Completo Integrando Mocha y Chai

A continuación, se presenta un ejemplo que integra **Mocha** y **Chai** para probar una función sencilla.

### 1. Configuración del Proyecto

1. **Inicializa un nuevo proyecto Node.js**:
    ```bash
    mkdir proyecto-testing
    cd proyecto-testing
    npm init -y
    ```

2. **Instala las dependencias necesarias**:
    ```bash
    npm install --save-dev mocha chai
    ```

3. **Estructura del Proyecto**:
    ```
    proyecto-testing/
    ├── src/
    │   └── calculadora.js
    ├── test/
    │   └── calculadora.test.js
    ├── package.json
    ```

### 2. Creación de las Funciones

**Archivo:** `src/calculadora.js`

```javascript
// src/calculadora.js

/**
 * Suma dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} - Resultado de la suma.
 */
function suma(a, b) {
    return a + b;
}

/**
 * Resta dos números.
 * @param {number} a - Número minuendo.
 * @param {number} b - Número sustraendo.
 * @returns {number} - Resultado de la resta.
 */
function resta(a, b) {
    return a - b;
}

module.exports = {
    suma,
    resta
};
```

### 3. Creación de las Pruebas

**Archivo:** `test/calculadora.test.js`

```javascript
// test/calculadora.test.js

const { expect } = require('chai');
const calculadora = require('../src/calculadora');

describe('Módulo Calculadora', () => {

    describe('Función suma(a, b)', () => {
        it('debería devolver la suma de dos números positivos', () => {
            const resultado = calculadora.suma(2, 3);
            expect(resultado).to.equal(5);
        });

        it('debería devolver la suma de un número positivo y uno negativo', () => {
            const resultado = calculadora.suma(5, -2);
            expect(resultado).to.equal(3);
        });

        it('debería devolver la suma de dos números negativos', () => {
            const resultado = calculadora.suma(-4, -6);
            expect(resultado).to.equal(-10);
        });
    });

    describe('Función resta(a, b)', () => {
        it('debería devolver la resta de dos números positivos', () => {
            const resultado = calculadora.resta(10, 4);
            expect(resultado).to.equal(6);
        });

        it('debería devolver la resta de un número positivo y uno negativo', () => {
            const resultado = calculadora.resta(7, -3);
            expect(resultado).to.equal(10);
        });

        it('debería devolver la resta de dos números negativos', () => {
            const resultado = calculadora.resta(-5, -2);
            expect(resultado).to.equal(-3);
        });
    });

});
```

### 4. Configuración de Scripts en `package.json`

Para facilitar la ejecución de las pruebas, añadiremos un script en el archivo `package.json`.

**Archivo:** `package.json`

```json
{
  "name": "proyecto-testing",
  "version": "1.0.0",
  "description": "Ejemplo de testing con Mocha y Chai",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "devDependencies": {
    "chai": "^4.3.7",
    "mocha": "^10.2.0"
  },
  "author": "",
  "license": "ISC"
}
```

### 5. Ejecutar las Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando en la terminal dentro del directorio del proyecto:

```bash
npm test
```

### 6. Resultado de las Pruebas

Al ejecutar `npm test`, deberías ver una salida similar a la siguiente:

```
> proyecto-testing@1.0.0 test
> mocha



  Módulo Calculadora
    Función suma(a, b)
      ✓ debería devolver la suma de dos números positivos
      ✓ debería devolver la suma de un número positivo y uno negativo
      ✓ debería devolver la suma de dos números negativos
    Función resta(a, b)
      ✓ debería devolver la resta de dos números positivos
      ✓ debería devolver la resta de un número positivo y uno negativo
      ✓ debería devolver la resta de dos números negativos


  6 passing (XXms)
```

Esto indica que todas las pruebas han pasado exitosamente.

---

## Conclusión

**Mocha** y **Chai** son herramientas poderosas y complementarias para realizar pruebas en aplicaciones JavaScript. Mientras que **Mocha** proporciona la estructura y el flujo de ejecución de las pruebas, **Chai** ofrece una sintaxis clara y flexible para las aserciones, permitiendo verificar que el código funciona según lo esperado. Juntas, facilitan la creación de pruebas robustas que aseguran la calidad y confiabilidad del software.

### Recursos Adicionales

- [Documentación Oficial de Mocha](https://mochajs.org/)
- [Documentación Oficial de Chai](https://www.chaijs.com/)
- [Tutorial de Testing con Mocha y Chai](https://www.digitalocean.com/community/tutorials/getting-started-with-node-js-and-mocha)
- [Supertest para Pruebas de APIs](https://github.com/visionmedia/supertest)
