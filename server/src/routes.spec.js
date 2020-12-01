import 'babel-polyfill';

const request = require('supertest');
const routes = require('./routes');

describe('Testing routes', () => {
  it('should get main route', async () => {
    const res = await request(routes).get('/');

    expect(res.body).toHaveProperty('message');
  });
});
