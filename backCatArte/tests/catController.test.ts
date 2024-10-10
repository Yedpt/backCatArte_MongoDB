import request from 'supertest';
import { app, server } from '../app';


//Test Get

describe('crud memes', () => {

    test('should return a response with status 200 and type json', async () => {

        const response = await request(app).get('/api/memes');

          expect(response.statusCode).toBe(200);
          expect(response.headers['content-type']).toContain('application/json');
    
      });

//Test Post
   
  test('should create a new user', async () => {

    const user = {
  
      
      
        name: "Enmanuel Feliciano",
        description: "si, tengo 18 años",
        category: "gatos_siendo_gatos1",
        image: "/src/assets/gatos-siendo-gatos1/gatos101.jpg",
        date: "2008-07-13",
        likes: 85
      
  
      };
    
    const response = await request(app)

    .post('/api/memes')
    .send(user)
    .set('Content-Type', 'application/json');

     expect(response.statusCode).toBe(200); 

     expect(response.headers['content-type']).toContain('application/json');
    
    });

    //Test Put
    
    test ('should update a user', async () => {

    const user = {
      name: "Jose Jose",
      description: "si, tengo 78 años",
      category: "gatos_siendo_gatos1",
      image: "/src/assets/gatos-siendo-gatos1/gatos101.jpg",
      date: "2008-07-13",
      likes: 101
   };
   const response = await request(app)

   .put('/api/memes/1')
   .send(user)
   .set('Content-Type', 'application/json');

    expect(response.statusCode).toBe(200);

    expect(response.headers['content-type']).toContain('application/json');

});

// //Test Delete

    test ('should delete a user', async () => {

        

    const response = await request(app)

    .delete('/api/memes/11')
     
    .set('Content-Type', 'application/json');  

     expect(response.statusCode).toBe(200);

     expect(response.headers['content-type']).toContain('application/json');

  });


afterAll((done) => {
    server.close(done);  

});


})
