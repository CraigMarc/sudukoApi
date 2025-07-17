
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');
/*
import chai from 'chai'
import chaiHttp from 'chaiHttp'
import server from '../server'

const assert = chai.assert;*/

chai.use(chaiHttp);

suite('Functional Tests', () => {
/*test1*/
    test('Logic handles a valid puzzle string of 81 characters', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/solve')
        .send({puzzle: '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'})
        .end(function (err, res) {
        
          assert.equal(res.body.solution, '135762984946381257728459613694517832812936745357824196473298561581673429269145378');

          done();
        });
    });

  
/*test2*/
    test('Solve a puzzle with missing puzzle string: POST request to /api/solve', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/solve')
        .send({puzzle: ''})
        .end(function (err, res) {
        
          assert.equal(res.body.error, 'Required field missing');

          done();
        });
    });
/*test3*/
    test('Solve a puzzle with invalid characters: POST request to /api/solve', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/solve')
        .send({puzzle: '1.5..2.84..63.1a.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'})
        .end(function (err, res) {
        
          assert.equal(res.body.error, 'Invalid characters in puzzle');

          done();
        });
    });

/*test4*/
   test('Solve a puzzle with incorrect length: POST request to /api/so', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/solve')
        .send({puzzle: '1.5..2.84..63.1.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'})
        .end(function (err, res) {
        
          assert.equal(res.body.error, 'Expected puzzle to be 81 characters long');

          done();
        });
    });
/*test5*/
   test('Solve a puzzle that cannot be solved: POST request to /api/solve', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/solve')
        .send({puzzle: '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..'})
        .end(function (err, res) {
        
          assert.equal(res.body.error, 'Puzzle cannot be solved');

          done();
        });
    });
/*test6*/
   test('Check a puzzle placement with all fields: POST request to /api/check', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/check')
        .send({puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
   coordinate: 'a1',
   value: 7
})
        .end(function (err, res) {
       
          assert.equal(res.body.valid, true);

          
          done();
        });
    });
/*test7*/
   test('Check a puzzle placement with single placement conflict: POST request to /api/check', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/check')
        .send({puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
   coordinate: 'a1',
   value: 3
})
        .end(function (err, res) {
        
          assert.equal(res.body.valid, false);
assert.equal(res.body.conflict[0], 'region');
          
          done();
        });
    });

/*test8*/
   test('Check a puzzle placement with multiple placement conflicts: POST request to /api/check', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/check')
        .send({puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
   coordinate: 'a1',
   value: 1
})
        .end(function (err, res) {
      
          assert.equal(res.body.valid, false);
assert.equal(res.body.conflict[0], 'row');
 assert.equal(res.body.conflict[1], 'column');         
          done();
        });
    });
  
/*test9*/
  
   test('Check a puzzle placement with all placement conflicts: POST request to /api/check', function (done) {
     chai
        .request(server)
        .keepOpen()
        .post('/api/check')
        .send({puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
   coordinate: 'a1',
   value: 1
})
        .end(function (err, res) {
      
          assert.equal(res.body.valid, false);
assert.equal(res.body.conflict[0], 'row');
 assert.equal(res.body.conflict[1], 'column');         
          done();
        });
    });
  
  /*test10*/
     test('Check a puzzle placement with missing required fields: POST request to /api/check', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/check')
        .send({puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
   coordinate: '',
   value: 3
})
        .end(function (err, res) {
       
          assert.equal(res.body.error, 'Required field(s) missing');

          
          done();
        });
    });
/*test11*/
    test('Check a puzzle placement with invalid characters: POST request to /api/check', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/check')
        .send({puzzle: '..9..5.1.85.4....a432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
   coordinate: 'a1',
   value: 3
})
        .end(function (err, res) {
       
          assert.equal(res.body.error, 'Invalid characters in puzzle');

          
          done();
        });
    });
/*test12*/
    test('Check a puzzle placement with invalid characters: POST request to /api/check', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/check')
        .send({puzzle: '..9..5.1.85.4..a432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
   coordinate: 'a1',
   value: 3
})
        .end(function (err, res) {
       
          assert.equal(res.body.error, 'Invalid characters in puzzle');

          
          done();
        });
    });
/*test13*/
   test('Check a puzzle placement with invalid placement coordinate: POST request to /api/check', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/check')
        .send({puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
   coordinate: '1',
   value: 1
})
        .end(function (err, res) {
      
          assert.equal(res.body.error, 'Invalid coordinate');
         
          done();
        });
    });
  /*test14*/
     test('Check a puzzle placement with invalid placement value: POST request to /api/check', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/check')
        .send({puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
   coordinate: 'a1',
   value: 'a'
})
        .end(function (err, res) {
      
          assert.equal(res.body.error, 'Invalid value');
         
          done();
        });
    });

  


  
});
