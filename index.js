const express = require('express')
const userRouter = require('./routes/user.routes')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} ...`)
})
