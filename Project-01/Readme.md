## Designing and Building a REST API - JSON API

GET /users - HTML Document Render - Throws HTML [Done]
GET /api/users - List all users - Throws JSON [Done]

GET /api/users/1 - Get the user with ID 1 [Done]
GET /api/users/2 - Get the user with ID 2 [Done]

### Dynamic Path Parameters
GET /api/users/:ID
:id -> Variable | Dynamic value

POST /api/users - Create new user 

PATCH /api/users/1 - Edit the user with ID 1

DELETE /api/users/2 - Delete the user with ID 2

// Referenced Links

Mockaroo - https://www.mockaroo.com (MOCK DATA)

### Good Practices

// Creating Hybrid Server
1. We can also make mobile users to access this data so we will have another path for the same.
=> /api/users -> This means the Mobile API (JSON) is being used and 
=> /users is for HTML Document rendering