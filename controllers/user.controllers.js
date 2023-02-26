const db = require('../db.js')

class UserController {
  //Создает пользователя
  async createUser(req, res) {
    const { name, surname } = req.body
    const newPerson = await db.query(
      'INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *',
      [name, surname]
    )
    res.json(newPerson.rows[0])
  }
  //Возвращает всех пользователей
  async getUser(req, res) {
    const users = await db.query('SELECT * from person')
    res.json(users.rows)
  }
  //Возвращает конкретного пользователя по id
  async getOneUser(req, res) {
    const id = req.params.id
    const user = await db.query('SELECT * from person where id = $1', [id])
    res.json(user.rows[0])
  }
  //Обновляет пользователя
  async updateUser(req, res) {
    const { id, name, surname } = req.body
    const updateUser = await db.query(
      'UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *',
      [name, surname, id]
    )
    res.json(updateUser.rows[0])
  }
  //Удаляет пользователя
  async deleteUser(req, res) {
    const id = req.params.id
    const user = await db.query('DELETE FROM person where id = $1', [id])
    res.json(user.rows)
  }
}

module.exports = new UserController()
