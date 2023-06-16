import { Router } from 'express'
import getEventsAndParticipants from '../controllers/eventController'

const router = Router()

router.post('/events/eventsandparticipants', getEventsAndParticipants)

export default router
