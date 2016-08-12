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
    it("returns a correct json format", function(done){
      supertest(app)
        .get('/members')
        .expect([ { name: 'Jun Kai',
                    email: 'junkaiii@gmail.com',
                    favcolor: 'Green' },
                    { name: 'Veronica Ler',
                    email: 'veronler@hotmail.com',
                    favcolor: 'white' },
                    { name: 'Fu Zhezhang',
                    email: 'zephitez@gmail.com',
                    favcolor: 'blue' },
                    { name: 'Tan Kai Lin',
                    email: 'kailin.tan.2010@gmail.com',
                    favcolor: 'blue' },
                    { name: 'Nicholas Lai',
                    email: 'nicholas.lai1985@gmail.com',
                    favcolor: 'blue' },
                    { name: 'Barnabas Chan',
                    email: 'barny@post.com',
                    favcolor: 'grey' } ],done);
                    });
                  });
});
