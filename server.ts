const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("here");
    res.send("hi");
  });
  app.listen(3000);

// import express, { Express, Request, Response } from 'express';
// import { send } from 'express-serve-static-core';


// interface TypedResponse<T> extends Response {
//     json: Send<T, this>;
// }

// const app: Express = express()
// const port: number = 3000

// app.get('/pets',(req: Request, res: TypedResponse<Array<Pet>>) => {
//     res.json([])
// })

// app.listen(port, ()=>{
//     console.log(`server is running on port ${port}`)
// })

