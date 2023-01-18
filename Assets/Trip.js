const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {};

Trip.init({
    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    trip_budget: {
        type:DataTypes.FLOAT,
    },
    traveller_amount: {
        type:DataTypes.INTEGER,
    },
    traveller_id: {
        type:DataTypes.INTEGER,
        unique: false,
        references: {
            model: 'traveller',
            key: 'id',
            unique: false,
        }
    },
    location_id: {
        type:DataTypes.INTEGER,
        unique: false,
        references: {
            model: 'location',
            key: 'id',
            unique: false,
        }
    }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
});

module.exports = Trip;