const { User } = require("../database/models/index");

const getByUser = async function (username) {
    let user = User.findOne({
        where: {
            username: username,
        }
    })
    return user;
}

module.exports = {
    getByUser,
};
