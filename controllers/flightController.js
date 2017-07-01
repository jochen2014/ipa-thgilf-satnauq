import * as service from './flightService';

const filterFlight = (req, res, next) => {
    const { flights } = req.body;
    if (!flights || flights.length === 0) {
        res.json({
            flights: [],
        });
    } else {
        try {
            const filteredFlights = service.filterFlight(flights, 'QF', 'SYD');
            res.json({
                flights: filteredFlights,
            });
        } catch (error) {
            // swallow 500 and replace with 400
            const err = new SyntaxError('invalid flight JSON');
            err.status = 400;
            throw err;
        }
    }
};

export {
    filterFlight,
};
