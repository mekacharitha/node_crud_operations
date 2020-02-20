const models = require('../models')
const { QueryTypes } = require('sequelize');

async function createUser (req, res, next) {
    try {
        const user = await models.UserMain.create(req.body)
        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(404),json({error})
    }
}

async function updateUser (req, res, next) {
    try {
        const user = await models.UserMain.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
        res.status(200).json({
            user
        })
    } catch (error) {
        next(error)
    }
}

async function softDeleteUser (req, res, next) {
    try {
        console.log("In soft deleted users");
        const user = await models.UserMain.update({'isDeleted':1},{
            where: {
                id: req.params.userId
            }
        })
        res.status(200).json({
            user
        })
    } catch (error) {
        next(error)
    }
}

async function getSoftDeletedUsers (req, res, next) {
    try {
        const users = await models.UserMain.findAll({where:{'isDeleted':1}})
        res.status(200).json({
            users
        })
    } catch (error) {
        next(error)
    }
    
}


async function getUsers (req, res, next) {
    try {
        const users = await models.UserMain.findAll({})
        res.status(200).json({
        users
    })
    } catch (error) {
        next(error)
    }
    
}

async function getUserDetails (req, res, next) {
    try {
        const user = await models.UserMain.findOne({
            where: {
                id: req.params.userId
            }
        })
        res.status(200).json({
            user
        })
    } catch (error) {
        next(error)
    }
    
}

async function deleteUser (req, res, next) {
    try {
        const deletedUser = await models.UserMain.destroy({
            where: {
                id: req.params.userId
            }
        })
        res.status(200).json({
            deletedUser
        })
    } catch (error) {
        next(error)
    }
    
}




async function getRequiredUser (req, res, next) {
    try {
    //    console.log("in getRequiresUser");
    //     const user = await models.UserMain.findAll({
    //          include:[{
    //               model:models.Roles ,
    //              // through:{attributes:['id'],where:{completed:true}},  
    //               required:true,
    //         }]
    //          where:[{roleId:}]
    //   })  
        //const user = await sequelize.query(`SELECT * FROM ${models.UserMain} , ${models.Roles} WHERE ${models.UserMain.roleId} = ${models.Roles.id}`)  
        //   const user = await sequelize.query('SELECT * FROM '+models.UserMain+','+models.Roles +'WHERE  ' +models.UserMain.roleId+'='+models.Roles.id ,
        //   {type:QueryTypes.SELECT});

        const user = await models.UserMain.findAll({
            include: [{
                model: models.Roles, // will create a left join
                where:{id: req.params.userId }
            }]
        });

        res.status(200).json({
            user
        })
    } catch (error) {
        next(error)
    }
    
}

async function getUserProjectDetails (req, res, next) {
    try {
        const user = await models.UserMain.findOne({
            include: [{
                model: models.Project 
            }]
            // where: {
            //     id: req.params.userId
            // }
        })
        res.status(200).json({
            user
        })
    } catch (error) {
        next(error)
    }
    
}


module.exports = {
    createUser,
    updateUser,
    getUserDetails,
    getUsers,
    deleteUser,
    getRequiredUser,
    getUserProjectDetails,
    softDeleteUser,
    getSoftDeletedUsers,
}