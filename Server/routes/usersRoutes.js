import { Router } from 'express'
import { signUp, login, logout, permission, protect } from '../controllers/authController.js'
import { getAllUsers, getUser, getClients, getYoutubers, deleteUser, updateUser, createYoutuber } from '../controllers/usersController.js'

const router = Router()

router.get('/', getAllUsers);
router.get('/youtubers', getYoutubers, getAllUsers);
router.post('/youtubers', createYoutuber);
router.get('/clients', getClients, getAllUsers);

router.route('/:id')
    .get(getUser)
    .delete(deleteUser)
    .patch(updateUser);

//Authentication Routes
router.post('/signup', signUp);
router.post('/login', login);
router.post('/logout', logout);

// router.route('/:id')
//     .get(getService)
//     .patch(updateService)
//     .delete(removeService)

export default router