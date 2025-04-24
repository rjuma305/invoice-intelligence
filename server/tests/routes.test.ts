// Tests for API routes will be defined here.
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const request = require('supertest');
const app = require('../index');

describe('API Routes', () => {
  it('should test the /api/invoices/analyze route', async () => {
    const response = await request(app).get('/api/invoices/analyze');
    expect(response.statusCode).toBe(200);
  });

  it('should test the /api/insights route', async () => {
    const response = await request(app).get('/api/insights');
    expect(response.statusCode).toBe(200);
  });
});
