
const { User } = require("../database/models/index");

async function findAll() {
    let user = User.findAll();
    return user;
}

async function findById(id) {
    let user = User.findByPk(id,{
        raw: true,
    })
    return user;
}

async function findByUsername(username: string) {
    let user = User.findOne({
        where: {
            username: username,
        },
        raw: true,
    })
    return user;
}

async function create(user: any) {
    let createdUser = await User.create(user);
    return createdUser;
}

async function update(user: any) {
    let createdUser = await User.update(user, {
        where: {
            id: user.id,
        }
    });
    return createdUser;
}

export default {
    findAll,
    findById,
    findByUsername,
    create,
    update,
};
