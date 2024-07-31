const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Por favor, forneça um nome para o componente.");
  process.exit(1);
}

const folderPath = path.join("src", "app", "pages", componentName);

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

exec(
  `npx ng generate component pages/${componentName}/${componentName}-page`,
  (err, stdout, stderr) => {
    if (err) {
      fs.rmdirSync(folderPath, { recursive: true });
      console.error(`Erro ao gerar a listagem: ${stderr}`);
      process.exit(1);
    }
    console.log(stdout);

    exec(
      `npx ng generate component pages/${componentName}/${componentName}-form`,
      (err, stdout, stderr) => {
        if (err) {
          fs.rmdirSync(folderPath, { recursive: true });
          console.error(`Erro ao gerar o formulário: ${stderr}`);
          process.exit(1);
        }
        console.log(stdout);

        exec(
          `npx ng generate service pages/${componentName}/services/${componentName}`,
          (err, stdout, stderr) => {
            if (err) {
              fs.rmdirSync(folderPath, { recursive: true });
              console.error(`Erro ao gerar service: ${stderr}`);
              process.exit(1);
            }
            console.log(stdout);

            exec(
              `npx ng generate interface pages/${componentName}/interfaces/${componentName}`,
              (err, stdout, stderr) => {
                if (err) {
                  fs.rmdirSync(folderPath, { recursive: true });
                  console.error(`Erro ao gerar model: ${stderr}`);
                  process.exit(1);
                }
                console.log(stdout);
              }
            );
          }
        );
      }
    );
  }
);
