var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:7000/";

describe("Express Server API", function(){
  describe("should return users json on get /members", function(){
    it("returns status code 200", function(done){
      supertest(app)
        .get('/members')
        .expect('Content-Type',/json/)
        .expect(200, done);
    });
    // it("returns a correct json format", function(done){
    //   supertest(app)
    //     .get('/members')
    //     .expect([{
    // name: 'Fu Zhezhang',
    // email: 'zephitez@gmail.com',
    // favcolor: 'blue'
    // }]);
    //               });
});
});
