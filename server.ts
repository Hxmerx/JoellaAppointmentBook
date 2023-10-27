import express, { Express, Request, Response } from 'express';
import { Send } from 'express-serve-static-core';
// TypedResponse<Array<Client>>

interface TypedResponse<T> extends Response {
    json: Send<T, this>;
}

const app: Express = express()
const port: number = 3000

app.get('/clients',(req: Request, res: Response) => {
    res.json([])
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})

