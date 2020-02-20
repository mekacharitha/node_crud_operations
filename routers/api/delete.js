const Users = require('../../models/usermain');

const deleting = async (req, res, next) => {
   try {
       const deletedRecord = await Users.query().delete().where('id', req.query.id).returning('*');
       res.json({
           success: true,
           deletedRecord,
       });

   } catch (error) {
       next(error);
   }
}
module.exports = exports = deleting