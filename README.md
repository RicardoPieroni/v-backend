# B-backend

## Overview
This server manage data to v-frontend

## Beginning
---
* Must have mongodb installed
* Create a .env file on the root directory with the following content:	
> MONGOOSE_URI=mongodb://localhost/v-database
> ACCESS_CONTROL_URL="*"
> ACCESS_CONTROL_HEADERS="Origin, X-Requested-With, Content-Type, Accept, Authorization"

### Running the server
To run the server, run:

```
npm start
```
### Running the test
To run the unit tests, run:

```
npm test
```

To view the Swagger UI interface:

```
open http://localhost:3006/docs
```

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.
