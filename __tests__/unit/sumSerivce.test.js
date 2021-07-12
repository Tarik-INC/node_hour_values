const SumService = require('../../src/services/SumService');
const sensorList = require('../mock/sensorList');
const sensorListOnHour = require('../mock/sensorListOnHour');

describe('Test Sum Service calc', () => {
    it('Should return an array', () => {
        const response = SumService.sumByHour(sensorList);

        expect(response.length).toBeGreaterThan(0);
    });

    it('Should return on one position array with value  = 32', () => {
        const response = SumService.sumByHour(sensorListOnHour);

        expect(response).toHaveLength(1);
        expect(response[0]).toHaveProperty('value');
        expect(response[0].value).toBe(32);
    });

    it('Should return array with 17 position', () => {
        const response = SumService.sumByHour(sensorList);

        expect(response.length).toBe(17);
    });
})