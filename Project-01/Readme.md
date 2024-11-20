## Designing and Building a REST API - JSON API

**`GET`** /users - HTML Document Render - Throws HTML

**`GET`** /api/users - List all users - Throws JSON 

**`GET`** /api/users/1 - Get the user with ID 1 

**`GET`** /api/users/2 - Get the user with ID 2

### Dynamic Path Parameters
- **`GET`** /api/users/:ID
  - :id -> Variable | Dynamic value

- **`POST`** /api/users - Create new user 

- **`PATCH`** /api/users/1 - Edit the user with ID 1

- **`DELETE`** /api/users/2 - Delete the user with ID 2

### Mock Data Resource

**Mockaroo** - https://www.mockaroo.com (MOCK DATA)

### Good Practices

* Creating Hybrid Server
1. Creating Hybrid Server  
   - We can also make mobile users access this data, so we will have another path for the same:
     - `/api/users`: This means the Mobile API (JSON) is being used.
     - `/users`: This is for HTML Document rendering.
