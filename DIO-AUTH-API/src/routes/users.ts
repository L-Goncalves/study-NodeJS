import {NextFunction, Request, Response, Router} from 'express';
import { StatusCodes } from 'http-status-codes';
const usersRoute = Router()



usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{username: 'Renan'}];

    res.status(StatusCodes.OK).send(users);
})


usersRoute.get('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    const users = [{username: 'Renan'}];
    const uuid = req.params.uuid
    res.status(StatusCodes.OK).send({uuid});
})



usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    const newUser = req.body

    res.status(StatusCodes.CREATED).send(newUser);
})


// @ts-ignore
usersRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    console.log(req.params.uuid)
    const uuid = req.params.uuid

    res.status(StatusCodes.OK).send({uuid});
})

// @ts-ignore
usersRoute.delete('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    console.log(req.params.uuid)
    const uuid = req.params.uuid

    res.sendStatus(StatusCodes.OK);
})

export default usersRoute;