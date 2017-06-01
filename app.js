import express from 'express'
import next from 'next'
import bodyParser from 'body-parser'

import { graphQLHandler } from './server'

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

nextApp.prepare()
.then(() => {
    const server = express()

    server.get('/test', (req, res) => {
        res.send('Yep')
    })

    server.use('/graphql', bodyParser.json(), graphQLHandler)

    server.get('*', (req, res) => {
        nextHandler(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
