const UserModel = require("../models/User");
const RoleModel = require("../models/Role");
const generateJwtToken = require('../utils/generateJwtToken')

const bcrypt = require("bcrypt");
class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь с почтовым адресом ${email} существует.`);
    }

    const passwordHash = bcrypt.hashSync(password, 3);

    const userRole = await RoleModel.findOne({value: "USER"})

    const user = new UserModel({
      email,
      password: passwordHash,
      roles: [userRole.value]
    });

    await user.save();

    return {
      user,
    };
  }
  async login(email, password) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error(`Пользователь с ${email} не существует.`);
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      throw new Error("Логин или пароль введены неправильно.");
    }

    const token = generateJwtToken(user._id, user.roles)

    return token
  }
  async getUser(id) {
    const user = await UserModel.findById(id)
    if(!user) throw new Error(`Такого пользователя не существует.`)
    return user
  }
}

module.exports = new UserService();
