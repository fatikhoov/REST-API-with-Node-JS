class UserController {
  //Создает пользователя
  async createUser(req, res) {}
  //Возвращает всех пользователей
  async getUser(req, res) {}
  //Возвращает конкретного пользователя по id
  async getOneUser(req, res) {}
  //Обновляет пользователя
  async updateUser(req, res) {}
  //Удаляет пользователя
  async deleteUser(req, res) {}
}

module.exports = new UserController()
