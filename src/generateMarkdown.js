const generateMarkdown = (team) => {
  console.log(team);

  let teamContainers = [];
  // Iterate through team an return the final HTML cards
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      let tempCard = buildManagerCard(team[i]);
      teamContainers.push(tempCard);
    }
    if (team[i].getRole() === "Engineer") {
      let tempCard = buildEngineerCard(team[i]);
      teamContainers.push(tempCard);
    }
    if (team[i].getRole() === "Intern") {
      let tempCard = buildInternCard(team[i]);
      teamContainers.push(tempCard);
    }
  }

  let finalHTML = buildHTML(teamContainers);
  return finalHTML;
};

// Global HTML
const buildHTML = (team) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>Employee Team Profile Generator</title>
  </head>
  <body class="text-center">
   <header class="jumbotron text-center bg-primary text-white">
    <h1>Our Team</h1>
   </header>
   <main>
      ${team}
   </main>
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
  </html>`;
};

const buildManagerCard = (data) => {
  return `<div class="d-inline-flex col justify-content-around card ml-2 text-white shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
      <div class="card bg-light">
        <h3 class="card-header bg-primary pl-2">${data.name}</h3> 
        <h4 class="card-subtitle pb-2 bg-primary text-white pl-2">${data.getRole()}</h4>
        <p class="card-text text-dark m-0 mt-2 ml-2">ID: ${data.id}</p><hr>
       <p class="m-0 text-dark ml-2">Email: <a href="${
         data.email
       }" class="card-link ml-2">${data.email}</a></p><hr>
      <p class="card-text text-dark mb-3 ml-2">${data.officeNumber}</p>
      </div>
    </div>`;
};
const buildInternCard = (data) => {
  return `<div class="d-inline-flex col justify-content-around card ml-2 text-white shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
      <div class="card bg-light">
        <h3 class="card-header bg-primary pl-2">${data.name}</h3> 
        <h4 class="card-subtitle pb-2 bg-primary text-white pl-2">${data.getRole()}</h4>
        <p class="card-text text-dark m-0 mt-2 ml-2">ID: ${data.id}</p><hr>
       <p class="m-0 text-dark ml-2">Email: <a href="${
         data.email
       }" class="card-link ml-2">${data.email}</a></p><hr>
      <p class="card-text text-dark mb-3 ml-2">${data.school}</p>
      </div>
    </div>`;
};
const buildEngineerCard = (data) => {
  return `<div class="d-inline-flex col justify-content-around card ml-2 text-white shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
      <div class="card bg-light">
        <h3 class="card-header bg-primary pl-2">${data.name}</h3> 
        <h4 class="card-subtitle pb-2 bg-primary text-white pl-2">${data.getRole()}</h4>
        <p class="card-text text-dark m-0 mt-2 ml-2">ID: ${data.id}</p><hr>
       <p class="m-0 text-dark ml-2">Email: <a href="${
         data.email
       }" class="card-link ml-2">${data.email}</a></p><hr>
      <p class="card-text text-dark mb-3 ml-2">${data.github}</p>
      </div>
    </div>`;
};

module.exports = generateMarkdown;
