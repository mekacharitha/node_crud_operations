'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    roles: DataTypes.STRING
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
    //Roles.belongsTo(models.UserMain)
    
    //models.UserMain.hasOne(Roles)
  };
  return Roles;
};