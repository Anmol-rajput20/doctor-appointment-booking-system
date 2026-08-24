import express from 'express'
import { appointmentsDoctor, doctorList,loginDoctor,appointmentCompleted,appointmentCancel,doctorDashboard} from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'
const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.post('/complete-appointment',authDoctor,appointmentCompleted)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)
doctorRouter.get('/doctor-dashboard',authDoctor,doctorDashboard)

export default doctorRouter