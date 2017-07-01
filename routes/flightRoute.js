import express from 'express';
import * as flightController from '../controllers/flightController';

const router = express.Router();
router.get('/flights', (req, res) => {
    flightController.filterFlight(req, res);
});

export default router;
