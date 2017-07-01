import * as service from './flightService';


describe("flight-service", () => {
    it('should filer flights correctly', () => {
        const input = {
            flights: [{
                airline: 'QF',
                flightNumber: '001',
                departure: {
                    airport: 'SYD',
                    scheduled: '2017-06-22T07:45:00Z',
                },
                arrival: {
                    airport: 'MEL',
                },
            },
            {
                airline: 'QF',
                flightNumber: '002',
                departure: {
                    airport: 'MEL',
                    scheduled: '2017-06-22T07:45:00Z',
                },
                arrival: {
                    airport: 'SYD',
                },
            },
            {
                airline: 'QF',
                flightNumber: '003',
                departure: {
                    airport: 'MEL',
                    scheduled: '2017-06-22T07:45:00Z',
                },
                arrival: {
                    airport: 'PER',
                },
            }],
        };
        const result = service.filterFlight(input.flights, 'QF', 'SYD');
        expect(result).toEqual(
            [{
                flight: 'QF001',
                origin: 'SYD',
                destination: 'MEL',
                departureTime: '2017-06-22T07:45:00Z',
            },
            {
                flight: 'QF002',
                origin: 'MEL',
                destination: 'SYD',
                departureTime: '2017-06-22T07:45:00Z',
            }],
        );
    });
});
