const express = require('express');
const routes = express.Router()

const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController')
/**
 * ongs routes
 */
routes.post('/ongs', ongController.create)
routes.get('/ongs', ongController.listOng)

/**
 * incidents routes
 */
routes.get('/incidents', incidentsController.listIncidente)
routes.post('/incidents', incidentsController.create)
routes.delete('/incidents/:id', incidentsController.delete)

/**
 * Profile routes
 */
routes.get('/profile', profileController.listSpecificForOng)

/**
 * Session routes
 */
routes.post('/session', sessionController.create)


module.exports = routes