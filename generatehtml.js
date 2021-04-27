function generateHTML(team) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossorigin="anonymous"
      />
      <link href="/style.css" rel="stylesheet" />
    </head>
    <body>
      <div class="container-fluid" id="header">
        <h1>Team</h1>
      </div>
  
      <div class="container">
        <div class="row row-cols-3">
          ${generateCards(team)}
        </div>
      </div>
    </body>
  </html>
`;
}

function generateCards(team) {
  let array = [];

  team.forEach((Employee) => {
    array.push(`
  <div class="col">
    <div class="card" id="cards" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title">${Employee.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${Employee.role}</h6>
            <h6 class="card-subtitle mb-2 text-muted"><a href="mailto:${
              Employee.email
            }">${Employee.email}</a></h6>
            <h6 class="card-subtitle mb-2 text-muted">${Employee.id}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${
              Employee.officeNumber || Employee.school || Employee.githubName
            }
            </h6>
            <p class="card-text">${Employee.task}</p>
        </div>
    </div>
  </div>
  `);
  });

  return array.join("");
}

module.exports = {
  generateHTML,
};
