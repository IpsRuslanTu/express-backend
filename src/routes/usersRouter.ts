import {Request, Response, Router} from "express";

export const usersRouter = Router({})

const users = [
    {id: 1, name: 'Ruslan', age: 36},
    {id: 2, name: 'Timur', age: 11},
    {id: 3, name: 'Alina', age: 33},
    {id: 4, name: 'Mia', age: 2}
]

usersRouter.get('/', (req: Request, res: Response) => {
    if (req.query.name) {
        const name = req.query.name.toString()
        res.send(users.filter(user => user.name.indexOf(name) > -1))
    } else {
        res.send(users)
    }
})

usersRouter.delete('/:id', (req: Request, res: Response) => {
    const index = users.findIndex(user => user.id === +req.params.id)
    if (index > -1) {
        users.splice(index, 1)
        res.send(204)
    }
    res.send(404)
})

usersRouter.post('/', (req: Request, res: Response) => {
    const maxId = users[users.length - 1].id

    const newUser = {
        id: maxId + 1,
        name: req.body.name,
        age: req.body.age
    }
    users.push(newUser)

    res.status(201).send(newUser)
})
