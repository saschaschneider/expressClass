// Require/import the HTTP module
const HTTP = require("http");

// Define a port to listen for incoming requests
const PORT1 = 8080;
const PORT2 = 3000;

// Create a generic function to handle requests and responses
function handleRequest1(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

function handleRequest2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Good Stuff " + request.url);
}


// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = HTTP.createServer(handleRequest1);
var server2 = HTTP.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server1 listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server2 listening on: http://localhost:" + PORT2);
});
