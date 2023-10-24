import { expect } from 'chai';
import request from 'supertest';
import app from '../server.js';
import { connectToDatabase } from '../config/database.js';
//before test
before(() => {
  connectToDatabase();
  
})

describe('Quiz API', () => {
var id;
  it('should create a new quiz', async () => {
    const response = await request(app)
      .post('/api/quiz')
      .send({
        course: 'Math',
        topic: 'Algebra',
        dueDate: '2023-12-31',
      })
       id = response.body._id
      expect(response.status).to.equal(200);
      expect(response.body.course).to.equal('Math');
      expect(response.body.topic).to.equal('Algebra');
      expect(response.body.dueDate).to.equal('2023-12-31T00:00:00.000Z');
  })

  it('should retrieve all quizzes', async () => {
    const response = await request(app).get('/api/quiz');
    expect(response.status).to.equal(200);
    expect(Array.isArray(response.body)).to.equal(true);
    expect(response.body.length).to.be.above(0);
  })

  it('should update a quiz', async () => {
    // const res= await request(app).get(`/api/quiz/${id}`)
    const response = await request(app)
      .put(`/api/quiz/${id}`) 
      .send({
        course: 'Physics',
        topic: 'Mechanics',
        dueDate: '2023-12-31',
      })
    expect(response.status).to.equal(200);
    expect(response.body.course).to.equal('Physics');
    expect(response.body.topic).to.equal('Mechanics');
    expect(response.body.dueDate).to.equal('2023-12-31T00:00:00.000Z');

  })

  it('should delete a quiz', async () => {
    const response = await request(app).delete(`/api/quiz/${id}`);
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal('Quiz deleted successfully');
  })

})

