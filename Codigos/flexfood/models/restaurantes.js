'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class restaurantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo (models.usuarios,{
        as: 'usuarios',
        foreignKey: 'usuarios_id'
      })
    }
  }
  restaurantes.init({
    nome: DataTypes.STRING,
    logo: DataTypes.STRING,
    status: DataTypes.CHAR(1),
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'restaurantes',
  });
  return restaurantes;
};