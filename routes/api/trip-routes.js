const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const tripData = await Trip.create(req.body);
        res.status(200).json(tripData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Trip.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Deletion successful."
        });
    } catch (err) {
        res.status(500).json(err);
    }
});