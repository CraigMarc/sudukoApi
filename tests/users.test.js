const request = require('supertest');    // import Supertest
const express = require("express");
const users = require("../routes/users");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", users);

// use npm run test to run tests


it('should return the solved puzzle', async () => {
  const res = await request(app)
    .post('/solve')
    .set("Content-Type", 'application/json')
    .send({ "puzzle": ".1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37." })
  expect(res.statusCode).toBe(200);
  // Optionally, check that an error message is returned in the body
  expect(res.body).toBe("135762984946381257728459613694517832812936745357824196473298561581673429269145378");
});

describe('GET /', () => {
  it('should return HTTP 200 and a list of users', async () => {
    const res = await request(app)
      .post('/solve')
      .send({ name: 'John' })
      .expect(200)
    //expect(res.statusCode).toBe(200);                  // assert status code is 200
    //expect(res.body).toBeInstanceOf(Object);            // assert response body is an array
    //expect(res.body).toBe('ok');
  });
});


it('when fields are missing should return required fields are missing', async () => {
  const res = await request(app)
    .post('/solve')
    .send({});  // sending an empty body, assuming "name" or other fields are required
  expect(res.statusCode).toBe(200);
  // Optionally, check that an error message is returned in the body
  expect(res.body.error).toBe("Required field missing");
});



