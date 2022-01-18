#Sample bot detection (base on user-agent field in request header)

##use

`curl http://localhost:3000/ -H "User-Agent: Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/79.0.3945.0 Safari/537.36"`

or HeadlessChrome (patter for bot)

`curl http://localhost:3000/login -H "User-Agent: Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/79.0.3945.0 Safari/537.36"`

##run server

`node server.js`

##run test (supertest + mocha)

`npm test`
