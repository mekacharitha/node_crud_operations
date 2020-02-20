//const models = require('../../models/index');
const Users = require('../../models/usermain');

const createUser = async (req, res) => {
    try {
        const user = await Users.create()({
            prefix:  req.body.prefix,
            firstName: req.body.firstName ,
            middleName:  req.body.middleName,
            lastName:  req.body.lastName,
            phoneNumber:  req.body.phoneNumber,
            roleId: req.body.roleId ,
        });
        res.json({
            success: true,
            user,
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = exports = createUser;