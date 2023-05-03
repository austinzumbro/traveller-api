const router = require('express').Router();
const { Traveller, Location, Trip } = '';  //placeholder for future model

router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id, {
            include: [{ model: Trip }]
        });
        if (!locationData) {
            res.status(400).json({ message: "No location found with that id." });
        }
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Location.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: "Deletion successful." });
    } catch (err) {
        res.status(500).json(err);
    }

})