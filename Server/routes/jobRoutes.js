import { Router } from 'express'
import { getAllJobs, getJob, createJob, removeJob, updateJob, getMyJobs } from '../controllers/jobController.js'
import { protect, permission } from '../controllers/authController.js'

const router = Router()

// router.use(protect);

router.get('/:id', getMyJobs);
router.get('/update/:id', getJob);

router.route('/')
    .get(getAllJobs)
    .post(createJob)

router.route('/:id')
    .patch(updateJob)
    .delete(removeJob)

export default router;