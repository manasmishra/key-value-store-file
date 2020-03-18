# key-value-store-file
key value store in a file so that multiple resources can access the same content

# How to run the project:
1. "npm install" - This will install all the required dependencies
2. "npm start" - will start the server by default in 3003 port.
3. "PORT=3000  npm start" - Set enviornment variable PORT to given port and start the server in given port.

# How to test the project:
Either we can use postman or curl to send requests to server:
To set a key value:
curl -H "Content-type: text/plain" -XPOST http://localhost:3003/set/key -d "value"
To get the value from server 3000
curl http://localhost:3000/get/key
To get the value from server 3003
curl http://localhost:3003/get/key4

# How to run unit tests:
1. npm install - if not done already
2. npm run test:unit - This will run all unit tests
I have written unit test cases for only one file in which 3 test cases are written. If required let me know will write for all other files.

# Assumptions
1. I have restricted the implementation to some restricted extent.
2. I have not covered all the edge cases for the implemented project.
3. I have used a json file to store the key values.