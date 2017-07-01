import express from 'express';
import * as flightController from '../controllers/flightController';

const router = express.Router();
router.post('/flights', (req, res, next) => {
    flightController.filterFlight(req, res, next);
});

export default router;
