const TransformUtil = require('../../src/utils/TransformUtil');
const objectedSummed = require('../mock/objectSummed');
/**
 * {
 * '2021-07-09_14:00' : {
 *      value: 1
 *    }
 * }
 *
*/

describe('Test Transform Util', () => {
    it('Should return an array with length equal to 2', () => {
        const response = TransformUtil.objectToArray(objectedSummed);

        expect(response).toHaveLength(2);
    });

    it('Should return an array with length equal to 2', () => {
        const [obj1, obj2] = TransformUtil.objectToArray(objectedSummed);

        expect(obj1).toHaveProperty('ts');
        expect(obj1).toHaveProperty('value');
        expect(obj2).toHaveProperty('ts');
        expect(obj2).toHaveProperty('value');
    });

    it('Should return an empty array if object is empty', () => {
        const response = TransformUtil.objectToArray({});

        expect(response).toHaveLength(0);
    });

    it('Should return an empty array by undefined param', () => {
        const response = TransformUtil.objectToArray()

        expect(response).toHaveLength(0);
    });
})