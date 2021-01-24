# Petful Server

Link to server: https://agile-wildwood-39107.herokuapp.com/api \n
Link to client repo: https://github.com/jpol95/petful-client
Link to vercel: https://petful-client-template.jpol95.vercel.app/

The backend of the ap utilizes heroku for deployment and Node/Express for Queue management and endpoints. 

GET /api/dogs - Will allow you to GET next dog

DELETE /api/dogs - Will allow you to dequeue dog

GET /cats - Will allow you to GET next cat

DELETE /cats - Will allow you to dequeue cat

GET /people - Will allow you to GET all people

POST /people - Will allow you to enqueue person

DELETE /people - Will allow you to dequeue person

GET /pets - Will allow you to get all pets 

DELETE /pets - Will allow you to dequeue a pet(RNG used to determine whether pet DQ'd is a cat or dog)
