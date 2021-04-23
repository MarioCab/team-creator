function generateHTML(team) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${generateCards(team)}
</body>
</html>
`;
}

function generateCards(team) {
  let array = [];

  team.forEach((employee) => {
    array.push(`<p>this is ${employee.name}</p>`);
  });

  return array.join("");
}

module.exports = {
  generateHTML,
};
