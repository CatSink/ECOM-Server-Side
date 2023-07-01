const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: { 
      type: DataTypes.INTEGER,
      referneces: {
        model: ProductTag,
        key: 'id',
      }
    },
    tag_id: { 
      type: DataTypes.INTEGER,
      referneces: {
        model: Tag,
        key: 'id',  
      }
    }  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
