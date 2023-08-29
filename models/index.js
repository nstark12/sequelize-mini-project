const Location = require('./Location')
const Traveler = require('./Traveler')
const Trip = require('./Trip')

Traveler.belongsToMany(Location, {
    through: 'TravelerLocations',
    uniqueKey: false
})
Location.belongsToMany(Traveler, {
    through: 'TravelerLocations',
    uniqueKey: false
})


module.exports = {
    Location,
    Traveler,
    Trip
}