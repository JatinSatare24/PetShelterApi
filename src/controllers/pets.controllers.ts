import type {Request, Response} from 'express'
import type {Pet} from '../data/pets'

import {pets} from '../data/pets'

type PetQueryParams = {
  species?:string,
  adopted?: 'true' | 'false',
  minAge?: string,
  maxAge?: string
}


export const getPetById = (
  req:Request<{id:string}>,
  res:Response<Pet|{message:string}>):void=>{
  const {id} = req.params
  const pet:Pet|undefined = pets.find((pet:Pet):boolean => pet.id.toString() === id)
  
  if (pet){
    res.json(pet)
  } else {
    res.status(404).json({message: "No pet with that ID"})
  }
}