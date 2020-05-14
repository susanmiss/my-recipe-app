
process.env.NODE_ENV = 'test';
let mongoose = require("mongoose")
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');
let Recipe = require('../models/recipeModel');
let should = chai.should();
let router = require('../routes/recipeRoute')
let server = require('../server');



chai.use(chaiHttp);

// describe('Recipe', () => {
//   beforeEach((done) => { //Before each test we empty the database
//       Recipe.remove({}, (err) => { 
//          done();           
//       });        
//   });





  describe('/GET recipes', () => {
      it('it should GET all the recipes', (done) => {
        chai.request(app)
            .get('/list')
            .end((err, res) => {
                  res.should.have.status(200);
                  // res.body.should.be.a('array');
                  // res.body.length.should.be.eql(0);
              done();
            });
      });
  });


  describe('GET /recipe/:slug', function() {
    it('should return a single recipe', function(done) {
      chai.request(app)
      .get('/recipe/:slug')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('recipeTitle');
        res.body.should.have.property('recipeContent');
        done();
      });
    });
  });

  describe('POST /recipe/create', function() {
    it('should add a recipe', function(done) {
      chai.request(app)
      .post('/recipe/create')
      .send({
        recipeTitle: 'Recipe Title from Chai',
        recipeContent : 'Recipe Content from Chai'
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('recipeTitle');
        res.body.should.have.property('recipeContent');
        done();
      });
    });
  });

  describe('PUT /recipe/:slug', function() {
    it('should update a recipe', function(done) {
      chai.request(app)
      .put('/recipe/1')
      .send({
        recipeTitle: "Title recipe Updated",
        recipeContent: "Content recipe Updated"
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('recipeTitle');
        done();
      });
    });
  })

  describe('DELETE /recipe/:slug', function() {
    it('should delete a recipe', function(done) {
      chai.request(app)
      .delete('/recipe/:slug')
      .end(function(error, response) {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('recipeTitle');
        response.body.should.have.property('recipeContent'); 
        
      });
    });
  });


