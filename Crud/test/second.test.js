let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect
chai.use(chaiHttp)

describe('Testing Rest Api',() => {
    it('should return 200 for myuser',(done) => {
        chai.request(`http://localhost:9700`)
        .get('/myuser')
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) =>{
            throw err
        })
    })
    it('should return 404 for myusers',(done) => {
        chai.request(`http://localhost:9700`)
        .get('/myusers')
        .then((res) => {
            expect(res).to.have.status(404);
            done();
        })
        .catch((err) =>{
            throw err
        })
    })
    it('should return 200 for adduser',(done) => {
        chai.request(`http://localhost:9700`)
        .post('/adduser')
        .send({"name":"testuser"})
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) =>{
            throw err
        })
    })

    
})