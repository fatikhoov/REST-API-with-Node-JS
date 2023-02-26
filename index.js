const express = require('express')
const app = express()

const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} ...`)
})
