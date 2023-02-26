const db = require('../db.js')

class PostController {
  async createPost(req, res) {
    const { title, content, idUser } = req.body
    const newPost = await db.query(
      'INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *',
      [title, content, idUser]
    )
    res.json(newPost.rows[0])
  }

  async getPostsByUser(req, res) {
    const id = req.query.id
    const posts = await db.query('select * from post where user_id = $1', [id])
    res.json(posts.rows)
  }
}

module.exports = new PostController()
