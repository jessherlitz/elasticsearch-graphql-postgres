import { Router } from 'express'
import getEventsAndParticipants from '../controllers/event'

const router = Router()

router.post('/events/eventsandparticipants', getEventsAndParticipants)

export default router
