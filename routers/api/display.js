const Users = require('../../models/usermain');

const display = async (req, res) => {
    try {
        const user = await Users.query();
        res.json({
            success: true,
            user,
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = exports = display;