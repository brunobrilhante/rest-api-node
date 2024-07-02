const { Router } = require('express')
const { getSubscribers, getSubscriberById, createSubscriber, updateSubscriber, deleteSusbcriber } = require('./controllers/SubscriberController')

const routes = Router()

routes.get('/subscribers', getSubscribers)
routes.get('/subscribers/:id', getSubscriberById)
routes.post('/subscribers', createSubscriber)
routes.patch('/subscribers/:id', updateSubscriber)
routes.delete('/subscribers/:id', deleteSusbcriber)

module.exports = routes