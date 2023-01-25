const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class PostComment extends Model {}

PostComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
    }
)