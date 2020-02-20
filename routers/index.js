const express = require('express');
const router = express.Router(); // initialize router 

const {
    createUser,deleteUser,getUserDetails,getUsers,updateUser,getRequiredUser,getUserProjectDetails,softDeleteUser,getSoftDeletedUsers
} = require('./userHandler')

router.get('/users', getUsers)
router.get('/usersProject', getUserProjectDetails)
router.get('/users/:userId', getUserDetails)
router.get('/query/:userId',getRequiredUser)
router.get('/users/del', getSoftDeletedUsers)

router.delete('/users/:userId', deleteUser) // hard code delete using destroy

//router.put('/users/:userId', softDeleteUser)

router.post('/users', createUser)

router.put('/users/:userId', updateUser)
router.put('/users/delete/:userId', softDeleteUser)


module.exports = router;