const generateUniqueiD = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueiD();

        expect(id).toHaveLength(8);
    })
});