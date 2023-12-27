import { Router } from 'express'
import { getAllServices, getService, createService, removeService, updateService } from '../controllers/servicesController.js'
import { protect, permission } from '../controllers/authController.js'

const router = Router()

router.route('/')
    .get(getAllServices)
    .post(protect, permission('admin'), createService)

router.route('/:id')
    .get(getService)
    .patch(protect, permission('admin'), updateService)
    .delete(protect, permission('admin'), removeService)

export default router