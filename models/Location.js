const sequelize = require('../config/connection')
const { DataTypes, Model } = require('sequelize')

class Location extends Model {}

Location.init({
    location_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Location'
})


module.exports = Location