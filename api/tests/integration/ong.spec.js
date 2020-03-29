const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('Ong', () => {
    //to execute the migrate(table) selected
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })
    
    //owner function to execute the test
    it('should be able to create a new ONG', async () => {
        const res = await request(app)
            .post('/ongs')
            .send({
                name : "TESTE",
	            email : "test2i@email.com",
	            whatsapp : "0000000000",
	            city : "Pouso Alegre",
	            uf : "MG"
            })
       expect(res.body).toHaveProperty('id');
       expect(res.body.id).toHaveLength(8);
    });
});