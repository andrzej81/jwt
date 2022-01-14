#Sample API created in Node.js and Express

##use e.g Postman, curl for testing API

##npm install to install node dependencies

##node app.js to run API server

Need create env variable e.g (.env file or setup const in bitbucket pipeline or github settings)

- ACCESS_TOKEN_SECRET=xxxxx
- ACCESS_TOKEN_LIFE=120
- REFRESH_TOKEN_LIFE=86400

API links:

- GET "/" to received message "Hello API"
- POST "/getToken" to get JWT token from json data `{ "username" : "your_username", "password" : "your_password" }`
- GET /list_movies to received json data from server
