const UserService = require("../services/UserService");
const jwt = require("jsonwebtoken");

class UserController {
  async registration(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserService.registration(email, password);

      return res.json({
        success: true,
        user,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: "Не удалось создать пользователя.",
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await UserService.login(email, password);

      res.json({
        success: true,
        token
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: "Неудачная авторизация.",
      });
    }
  }
  async getUser(req, res) {
    try {
      const { id } = req.params
      const data = await UserService.getUser(id)
      res.json({
        success: true,
        data
      })
    } catch(e) {
        console.info(e);
        res.status(400).json({
          success: false,
          message: "Такого пользователя не существует.",
        });
    }
  }
}

module.exports = new UserController();
