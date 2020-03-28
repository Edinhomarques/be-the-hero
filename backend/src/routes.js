const express = require('express');
const {celebrate, Joi, Segments } = require('celebrate');

const routes = express.Router();

const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');
/**
 * ongs routes
 */
routes.post('/ongs', celebrate({
  [Segments.BODY]:Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), ongController.create);

routes.get('/ongs', ongController.listOng);

/**
 * incidents routes
 */
routes.get('/incidents',celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), incidentsController.listIncidente);

routes.post('/incidents', incidentsController.create);

routes.delete('/incidents/:id',celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), incidentsController.delete);

/**
 * Profile routes
 */
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown()
}),profileController.listSpecificForOng);

/**
 * Session routes
 */
routes.post('/session', sessionController.create);


module.exports = routes;