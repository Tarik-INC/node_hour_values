const request = require('supertest');

const app = require("../../src/server");

describe("Sensor sum controller", () => {

    it('Should return a 200 status code', async () => {
        const response = await request(app).get('/sensor/sum');

        expect(response.status).toBe(200);
    });

    it('Should return an object in body', async () => {
        const response = await request(app).get('/sensor/sum');

        expect(typeof response.body).toBe('object');
    });

    it('Should return an object in body with attribute status being 0', async () => {
        const response = await request(app).get('/sensor/sum');

        expect(response.body.status).toBe(0);
    });


    it('Should return an array in body called sensorSummedByHouList with size greater than 0', async () => {
        const response = await request(app).get('/sensor/sum');

        expect(response.body.sensorSummedByHourList.length).toBeGreaterThan(0);
    });
})