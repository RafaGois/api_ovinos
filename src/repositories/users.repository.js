const { User } = require("../database/models/index");

const getByUser = async function (username) {
    let user = User.findOne({
        where: {
            username: username,
        }
    })
    return user;
}

const create = async (user) => {
    let createdUser = await User.create(user);
    console.log(createdUser);
    return createdUser;
}

module.exports = {
    getByUser,
    create,
};
