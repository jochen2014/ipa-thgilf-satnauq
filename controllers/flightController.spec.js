import * as flightController from './flightController';

describe("flight-controller", () => {
    let res;
    beforeEach(() => {
        res = {
            json: jest.fn(),
        };
    });

    it("should handle empty array", () => {
        const req = {
            body: {
                flights: [],
            },
        };
        flightController.filterFlight(req, res);
        // first para in first call
        expect(res.json.mock.calls[0][0]).toEqual(
            { flights: [] },
        );
    });
    it("should throw error with invalid JSON", () => {
        const req = {
            body: {
                flights: [{
                    _aireline: "QF",
                }],
            },
        };
        // https://github.com/facebook/jest/issues/781#issuecomment-193991055
        expect(() => {
            flightController.filterFlight(req, res);
        }).toThrow(SyntaxError);
    });
});
