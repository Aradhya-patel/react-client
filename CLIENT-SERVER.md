How a request is served in node.

When an HTTP request hits the server, node calls the request handler function with a few handy objects for dealing with the transaction, request and response.
When handling a request, the first thing you'll probably want to do is look at the method and URL, so that appropriate actions can be taken. 
Node.js makes this relatively painless by putting handy properties onto the request object.

<!-- const { method, url } = request;  -->

The method here will always be a normal HTTP method/verb. 
The url is the full URL without the server, protocol or port. 
Headers are also not far away. They're in their own object on request called headers.

<!-- const { headers } = request; -->

If some headers are repeated, then their values are overwritten or joined together as comma-separated strings, depending on the header.
When receiving a POST or PUT request, the request body might be important to your application. Getting at the body data is a little more involved than accessing request headers.
If you know it's going to be string data, the best thing to do is collect the data in an array, then at the 'end', concatenate and stringify it.

<!-- let body = [];
request.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
  // at this point, `body` has the entire request body stored in it as a string
}); -->

If you don't have a listener for that event, the error will be thrown, which could crash your Node.js program.

You should therefore add an 'error' listener on your request streams, even if you just log it and continue on your way. (Though it's probably best to send some kind of HTTP error response.)

<!-- request.on('error', (err) => {
  // This prints the error message and stack trace to `stderr`.
  console.error(err.stack);
}); -->
There are other ways of handling these errors such as other abstractions and tools, but always be aware that errors can and do happen, and you're going to have to deal with them.

We've covered creating a server, and grabbing the method, URL, headers and body out of requests. When we put that all together, it might look something like this:

const http = require('http');

<!-- http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // At this point, we have the headers, method, url and body, and can now
    // do whatever we need to in order to respond to this request.
  });
}).listen(8080); // Activates this server, listening on port 8080. -->

<!-- Setting Response Headers -->
Headers are set through a convenient method called setHeader.

<!-- response.setHeader('Content-Type', 'application/json');
response.setHeader('X-Powered-By', 'bacon'); -->
When setting the headers on a response, the case is insensitive on their names. If you set a header repeatedly, the last value you set is the value that gets sent.

If you want, you can explicitly write the headers to the response stream. To do this, there's a method called writeHead, which writes the status code and the headers to the stream.

<!-- response.writeHead(200, {
  'Content-Type': 'application/json',
  'X-Powered-By': 'bacon'
}); -->

<!-- Sending Response Body -->
Since the response object is a WritableStream, writing a response body out to the client is just a matter of using the usual stream methods.

<!-- response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, World!</h1>');
response.write('</body>');
response.write('</html>');
response.end(); -->

we can simplify the example above as follows.

<!-- response.end('<html><body><h1>Hello, World!</h1></body></html>'); -->

Putting it all together

const http = require('http');

<!-- http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // BEGINNING OF NEW STUFF

    response.on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))

    // END OF NEW STUFF
  });
}).listen(8080); -->

Overview
1. Instantiate an HTTP server with a request handler function, and have it listen on a port.
2. Get headers, URL, method and body data from request objects.
3. Make routing decisions based on URL and/or other data in request objects.
4. Send headers, HTTP status codes and body data via response objects.
5. Pipe data from request objects and to response objects.
6. Handle stream errors in both the request and response streams.
