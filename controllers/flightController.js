import * as service from './flightService';

const filterFlight = (req, res, next) => {
    const { flights } = req.body;
    if (!flights || flights.length === 0) {
        res.json({
            flights: [],
        });
    } else {
        const result = service.filterFlight();
        res.json(result);
    }
};

export {
    filterFlight,
};
