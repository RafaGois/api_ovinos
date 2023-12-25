
const { User } = require("../database/models/index");

const getById = async function (id) {
    console.log(id);
    let user = User.findByPk(id,{
        raw: true,
    })
    return user;
}

const getByUsername = async function (username) {
    let user = User.findOne({
        where: {
            username: username,
        },
        raw: true,
    })
    return user;
}

const create = async (user) => {
    let createdUser = await User.create(user);
    return createdUser;
}

module.exports = {
    getById,
    getByUsername,
    create,
};
