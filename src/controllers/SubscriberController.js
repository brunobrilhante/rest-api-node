const Subscriber = require('../models/subscriber')

async function getSubscribers(req, res) {
    try {
        const subscribers = await Subscriber.find()
        return res.status(200).json(subscribers)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

async function getSubscriberById(req, res) {
    try {
        const id = req.params.id
        const subscriber = await Subscriber.findById(id)
        return res.status(200).json(subscriber)
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}

async function createSubscriber(req, res) {    
    try {
        const subscriber = req.body
        const newSubscriber = await Subscriber.create(subscriber)
        return res.status(201).json(newSubscriber)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

async function updateSubscriber(req, res) {
    try {
        const id = req.params.id
        const uptadeSubscriber = await Subscriber.findOneAndUpdate({ _id: id }, { userName: req.body.userName, userChannel: req.body.userChannel })
        return res.status(200).json(uptadeSubscriber)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

async function deleteSusbcriber(req, res) {
    try {
        const id = req.params.id
        await Subscriber.findByIdAndDelete({_id: id})
        return res.status(200).json({message: 'Subscriber was deleted'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = { getSubscribers, getSubscriberById, createSubscriber, updateSubscriber, deleteSusbcriber }