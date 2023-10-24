import { expect } from 'chai';
import request from 'supertest';
import app from '../server.js';
import { connectToDatabase } from '../config/database.js';

before(() => {
  connectToDatabase();
  
})

describe('Announcement API', () => {
  var id;
  it('should create a new announcement', async () => {
    const response = await request(app)
      .post('/api/announcements')
      .send({
        username: 'test',
        group: 'test',
        text: 'test',
        avatar: 'test',
      });
    expect(response.status).to.equal(200);
    expect(response.body.username).to.equal('test');
    expect(response.body.group).to.equal('test');
    expect(response.body.text).to.equal('test');
    expect(response.body.avatar).to.equal('test');
    id = response.body._id;
  });

  it('should retrieve all announcements', async () => {
    const response = await request(app).get('/api/announcements');
    expect(response.status).to.equal(200);
    expect(Array.isArray(response.body)).to.equal(true);
    expect(response.body.length).to.be.above(0);
  });

  it('should update a announcement', async () => {
    const response = await request(app)
      .put(`/api/announcements/${id}`) 
      .send({
        username: 'test2',
        group: 'test2',
        text: 'test2',
        avatar: 'test2',
      });
    expect(response.status).to.equal(200);
    expect(response.body.username).to.equal('test2');
    expect(response.body.group).to.equal('test2');
    expect(response.body.text).to.equal('test2');
    expect(response.body.avatar).to.equal('test2');

  })

  it('should delete a announcement', async () => {
    const response = await request(app).delete(`/api/announcements/${id}`);
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal('Announcement deleted successfully');    

  })
  
})