'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserMain = sequelize.define('UserMain', {
    prefix: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
    isDeleted:DataTypes.INTEGER,
    projectId:DataTypes.INTEGER
    //rollId:foreignKey,
  }, {});
  UserMain.associate = function(models) {
    // associations can be defined here
  //UserMain.hasOne(models.Roles, {as: 'roles'});

  UserMain.belongsTo(models.Roles,{foreignKey: 'roleId'});
  models.Roles.hasOne(UserMain,{foreignKey: 'roleId'});

  UserMain.belongsTo(models.Project,{foreignKey: 'projectId'});
  models.Project.hasMany(UserMain,{foreignKey: 'projectId'});

  };

  return UserMain;
};