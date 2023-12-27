import Service from '../models/services.js';
import {getAll, getOne, createOne, deleteOne, updateOne} from './handleFactory.js';

export const getAllServices = getAll(Service)
export const getService = getOne(Service);
export const createService = createOne(Service);
export const removeService = deleteOne(Service);
export const updateService = updateOne(Service);