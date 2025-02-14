const express = require('express');
//const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5004;

//middleware
//app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered
app.get(['/', '/form'], (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.sendFile(path.join(__dirname + '/form.html'));
  //res.send('
  //     <!DOCTYPE html>
  //     <head>
  //     <meta charset="UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <title>Form</title>
  //     <link
  //       rel="stylesheet"
  //       href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  //     />
  //   </head>
  //   <body class="bg-dark contanier-lg contanier-md contanier-sm">
  //     <main class="bg-white m-5 p-3">
  //       <form id="formItems">
  //         <h1 class="text-center">Form</h1>

  //         <div class="mb-3">
  //           <label for="name" class="form-label">Full Name</label>
  //           <input type="text" class="form-control" id="name" name="name"/>
  //         </div>

  //         <div class="mb-3">
  //           <label for="Email" class="form-label">Email address</label>
  //           <input type="email" class="form-control" id="Email"name="Email"/>
  //         </div>

  //         <div class="form-check">
  //           <input class="form-check-input" type="checkbox" value=" " id="newsletter" name="newsletter">
  //           <label class="form-check-label" for="newsletter">
  //        Newsletter
  //           </label>
  //         </div>

  //         <br>
  //         <div class="mb-3">
  //           <label for="Textarea" class="form-label">Comments</label>
  //           <textarea class="form-control" id="textArea" name = "comment" rows="1"></textarea>
  //         </div>

  //         <button type="submit" class="btn btn-primary col-12">Submit</button>
  //       </form>
  //       <div id="print"></div>
  //     </main>
  //   </body>
  // </html>
  //   `);
});

app.post('/submit', (req, res) => {
  const { name, Email, comment, newsletter } = req.body;
  const newsletterRes =
    newsletter === 'yes'
      ? 'Yes, sign me up for the newsletter'
      : 'No, thank you.';
  const commentsRes = comment ? comment : 'N/A';
  //display the submited data
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(`
  <div style=" margin: 50px; color: blue ;background-color: linen; text-align:center; border: solid, 2px,black">
    <p> Name: ${name}</p>
    <p> Email: ${Email}</p>
    <p> Newsletter: ${newsletterRes} </p>
    <p> Comments: ${commentsRes}</p>
  </div>
`);
});
//handle error
app.use((req, res) => {
  res.status(404);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h2> 404: Page not found</h2>');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
