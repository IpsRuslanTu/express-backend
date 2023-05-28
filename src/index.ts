import express, {Request, Response} from 'express'
import bodyParser from "body-parser"
import {usersRouter} from "./routes/usersRouter";

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!!!!')
})

app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})