const express = require('express');
const routes = express.Router();

const { celebrate, Segments, Joi } = require('celebrate');

const SessionController = require('./controllers/session.controller');
const OngController = require('./controllers/ong.controller');
const IncidentController = require('./controllers/incident.controller');
const ProfileController = require('./controllers/profile.controller');

//Session
routes.post('/sessions', SessionController.create);

//Ongs
//get all
routes.get('/ongs', OngController.index);
//create
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    }) 
}), OngController.create);

//Incidents
//get all
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);
//create
routes.post('/incidents', IncidentController.create);
//delete
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

//Profile
//get all
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}) , ProfileController.index)

module.exports = routes;
