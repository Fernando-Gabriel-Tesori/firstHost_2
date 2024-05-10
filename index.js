const express = require("express");

const port = 3000
const app = express();
app.use(express.json())

app.get('/users', (request, response) => {
   
  const { name, age } = request.body
  console.log(request.body)


    return response.json({ name, age})
});

//app.get('/users/:id', (request, response) => {
    //const { id } = request.params

    //console.log(id)

  //  return response.json('hello')
//});
//route params 


app.listen(3000, ()=> {
 console.log('server started on port 3000')
});