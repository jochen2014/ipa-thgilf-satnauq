import * as service from './flightService';

const filterFlight = (req, res, next) => {
    const result = service.filterFlight();
    res.json(result);
};

export {
    filterFlight,
};
