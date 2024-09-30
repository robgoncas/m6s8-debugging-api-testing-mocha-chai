const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../server.js');
chai.use(chaiHttp);

//Continuar con la actividad de cierre del módulo 6!!! parte Testing!!!!!!
//MÍNIMO UNA ASERCIÓN DE UN ENDPOINT GET Y OTRO POST.

describe('Esta es la descripción del caso de prueba: API de Países y Animales', () => {
    
    // Prueba del endpoint GET /paises
    describe('GET /paises', () => {
        it('debería devolver una lista de países', (done) => {
            //Respuesta obj {} info, array paises
            chai.request(server)
                .get('/paises')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.paises).to.be.an('array');
                    expect(res.body.paises.length).to.be.greaterThan(0);
                    done();
                });
        });
    });

    // Prueba del endpoint POST /paises
    describe('POST /paises', () => {
        it('debería agregar un nuevo país', (done) => {
            const nuevoPais = {
                nombre: 'Brasil',
                sufijoTelefonico: '+55',
                sueldoMinimo: 450000
            };

            chai.request(server)
                .post('/paises')
                .send(nuevoPais)
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    expect(res.body.paises).to.be.an('array');
                    //Opcionalmente podriamos mejorar el rendimiento (respondiendo con el objeto creado)
                    expect(res.body.paises.some(pais => pais.nombre === 'Brasil')).to.be.true;
                    done();
                });
        });

        it('debería devolver un error si faltan campos obligatorios', (done) => {
            const nuevoPaisIncompleto = {
                nombre: 'Uruguay'
            };

            chai.request(server)
                .post('/paises')
                .send(nuevoPaisIncompleto)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.have.property('error');
                    done();
                });
        });
    });

    // Prueba del endpoint PUT /paises
    describe('PUT /paises', () => {
        it('debería actualizar completamente un país', (done) => {
            const actualizacionPais = {
                indice: 0,
                pais: {
                    nombre: 'Chile Actualizado',
                    sufijoTelefonico: '+56',
                    sueldoMinimo: 500000
                }
            };

            chai.request(server)
                .put('/paises')
                .send(actualizacionPais)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.paises[0].nombre).to.equal('Chile Actualizado');
                    done();
                });
        });
    });

    // Prueba del endpoint PATCH /paises
    describe('PATCH /paises', () => {
        it('debería modificar parcialmente un país', (done) => {
            const actualizacionParcial = {
                indice: 0,
                actualizacion: { sueldoMinimo: 550000 }
            };

            chai.request(server)
                .patch('/paises')
                .send(actualizacionParcial)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.paises[0].sueldoMinimo).to.equal(550000);
                    done();
                });
        });
    });

    // Prueba del endpoint DELETE /paises
    describe('DELETE /paises', () => {
        it('debería eliminar un país por índice', (done) => {
            chai.request(server)
                .delete('/paises?indice=0')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.paises).to.be.an('array');
                    done();
                });
        });
    });

    // Prueba del endpoint GET /animal
    describe('GET /animal', () => {
        it('debería agregar un animal con nombre y familia', (done) => {
            chai.request(server)
                .get('/animal?nombre=león&familia=felinos')
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.have.property('animales');
                    expect(res.body.animales[0].nombre).to.equal('león');
                    done();
                });
        });

        it('debería devolver un error si faltan parámetros', (done) => {
            chai.request(server)
                .get('/animal?nombre=perro')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.have.property('error');
                    done();
                });
        });
    });

    // Prueba de ruta no existente
    describe('Ruta no encontrada', () => {
        it('debería devolver un 404 en rutas no existentes', (done) => {
            chai.request(server)
                .get('/rutaInexistente')
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    expect(res.body).to.have.property('error');
                    done();
                });
        });
    });
});
