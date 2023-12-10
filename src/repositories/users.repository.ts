const { User } = require("../database/models/index");

const getByUser = async function (username: string) {
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
