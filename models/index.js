const Location = require('./Location')
const Traveler = require('./Traveler')
const Trip = require('./Trip')

Traveler.belongsToMany(Location, {
    through: 'Trips',
    uniqueKey: false
})
Location.belongsToMany(Traveler, {
    through: 'Trips',
    uniqueKey: false
})


module.exports = {
    Location,
    Traveler,
    Trip
}