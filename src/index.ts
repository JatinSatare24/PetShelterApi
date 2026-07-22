import express from 'express'
import type {Express, Request, Response} from 'express'
import cors from 'cors'

import {petRouter} from './routes/pets.routes'

const PORT = 8000
const app:Express = express()

