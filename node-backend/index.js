import cors from 'cors'
import { config } from 'dotenv'
import Express from 'express'
import AdminRoute from './Routes/AdminRoute.js'
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
config()
const app = Express()

app.use(Express.json())
app.use(cors())

app.use('/auth', AuthRoute)
app.use("/user", UserRoute)
app.use("/admin", AdminRoute)


app.listen(5000, () => {
  console.log('listening on port 5000')
})
