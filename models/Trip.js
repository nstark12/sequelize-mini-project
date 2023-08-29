const sequelize = require('../config/connection')
const { DataTypes, Model } = require('sequelize')

class Trip extends Model {}

Trip.init({
    trip_budget: {
        type: DataTypes.STRING
    },
    traveler_amount: {
        type: DataTypes.INTEGER
    },
    traveler_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'travelers',
            key: 'id'
        }
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'locations',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Trip'
})


module.exports = Trip