const sequelize = require('../config/connection')
const { DataTypes, Model } = require('sequelize')

class Traveler extends Model {}

Traveler.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
}, {
    sequelize,
    modelName: 'Traveler'
})


module.exports = Traveler