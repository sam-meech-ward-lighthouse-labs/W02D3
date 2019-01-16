- HTTP Methods
  - 4 important ones
  - GET
  - POST
  - PUT
  - DELETE
  - PATCH

- Routes
  - path + method


```js
app.get('/superheros', (req, res) => { // GET /superheros

});
app.post('/superheros', (req, res) => { // POST /superheros

});
app.delete('/superheros/:name', (req, res) => { 
  req.params.name;
  // DELETE /superheros/wolverine

});
app.put('/superheros/:name', (req, res) => { 
  req.params.name;
  // PUT /superheros/wolverine

});
```

reality:
```js
app.post('/superheros', (req, res) => { // POST /superheros

});
app.post('/superheros/:name/delete', (req, res) => { 
  req.params.name;
  // POST /superheros/wolverine/delete

});
```

- What is CRUD?
  We are crudding data/resources on the server.
  - Create is like a POST request
  - Read is like a GET request
  - Update is like PUT
  - Delete is like DELETE


- How can we make the browser send an HTTP request?
  - type in a url and hit enter. GET
  - click on a link <a>. GET
  - Submit a form. GET, or a POST if I specify the method `method="post"`. Forms are only capable of making a GET or a POST request.
  - `<img>` GET.
  - `<link>` GET.
- Without client side JavaScript, the browser can only make GET and POST requests. 

- Redirects
  - Send a response with a 3xx status code
  - tells the browser to make another GET request to the url you specify in the body.


```
          Safe  Idempotent  CRUD      Content body
POST      No    No          Create    Yes
GET       Yes   Yes         Retrieve  No
PUT       No    Yes         Update    Yes
DELETE    No    Yes         Destroy   No
```
