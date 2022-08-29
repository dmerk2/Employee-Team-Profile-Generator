const generateMarkdown = (data) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>Employee Team Profile Generator</title>
  </head>
  <body>
   <header class="jumbotron text-center bg-primary text-white">
    <h1>Our Team</h1>
   </header>
   <main>
    <div class="d-flex row justify-content-around card ml-2 text-white shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
      <div class="card bg-light">
        <h3 class="card-header bg-primary pl-2">${data.name}</h3> 
        <h4 class="card-subtitle pb-2 bg-primary text-white pl-2">${data.position}</h4>
        <p class="card-text text-dark m-0 mt-2 ml-2">ID: ${data.id}</p><hr>
       <p class="m-0 text-dark ml-2">Email: <a href="${data.email}" class="card-link ml-2">${data.email}</a></p><hr>
      <p class="card-text text-dark mb-3 ml-2">${data.office}</p>
      <p class="card-text text-dark mb-3 ml-2">${data.github}</p>
      <p class="card-text text-dark mb-3 ml-2">${data.school}</p>
      </div>
    </div>

   </main>
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
  </html>`;
};

module.exports = generateMarkdown;
