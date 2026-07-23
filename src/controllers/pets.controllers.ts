import type {Request, Response} from 'express'
import type {Pet} from '../data/pets'

import {pets} from '../data/pets'

type PetQueryParams = {
  species?:string,
  adopted?: 'true' | 'false',
  minAge?: string,
  maxAge?: string
}

