const filterFlight = (flights, airline, city) => {
    const results = flights
        .filter(f =>
            f.airline.toUpperCase() === airline
            && (f.departure.airport.toUpperCase() === city
                || f.arrival.airport.toUpperCase() === city),
    )
        .map(f => ({
            flight: f.airline + f.flightNumber,
            origin: f.departure.airport,
            destination: f.arrival.airport,
            departureTime: f.departure.scheduled,
        }));

    return {
        flights: results,
    };
};

export {
    filterFlight,
};

