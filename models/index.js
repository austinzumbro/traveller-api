const Location = require('./Location.js');
const Trip = require('./Trips.js');
const Traveller = require('./Traveller.js');

Traveller.belongsToMany(Location, {
    through: {
        model: Trip,
        unique: false,
    },
    as: 'planned_trips',
});

Location.hasMany(Traveller, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'location_travellers',
});


module.exports = { Location, Trip, Traveller };