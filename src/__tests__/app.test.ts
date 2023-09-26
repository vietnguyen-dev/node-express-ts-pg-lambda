import request from 'supertest';
import app from '../app'; // Import your Express app

describe('sample test', () => {
    it('responds with an array of strings', async () => {
      const response = await request(app).get('/sample');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true); // Check if it's an array
      expect(response.body.every((item: string) => typeof item === 'string')).toBe(true); // Check if all elements are strings
    });
  });