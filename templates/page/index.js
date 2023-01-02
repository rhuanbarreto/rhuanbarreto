import inquirer from "inquirer";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import Mustache from "mustache";

const pagesFolder = resolve("src/pages");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What's the Page name?",
      validate(value) {
        const pass = value.match(/^[A-Z][A-Za-z0-9]*$/g);
        if (!pass)
          return "Please enter a valid page name. It must start with a capital letter.";
        const filePath = `${pagesFolder}/${value}/${value}.tsx`;
        if (existsSync(filePath))
          return "Page already exists! It won't be overwritten!";
        return true;
      },
    },
  ])
  .then(({ name }) => {
    const componentTemplate = readFileSync(
      resolve("templates/page/component.mustache"),
      "utf-8"
    );
    const storiesTemplate = readFileSync(
      resolve("templates/page/stories.mustache"),
      "utf-8"
    );
    const componentOutput = Mustache.render(componentTemplate, { name });
    const storiesOutput = Mustache.render(storiesTemplate, { name });
    mkdirSync(`${pagesFolder}/${name}`);
    const componentFile = `${pagesFolder}/${name}/${name}.tsx`;
    writeFileSync(componentFile, componentOutput);
    const storiesFile = `${pagesFolder}/${name}/${name}.stories.tsx`;
    writeFileSync(storiesFile, storiesOutput);
    console.log(`Page ${name} created successfully`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Please run this command in interactive mode!");
    } else {
      console.error(error.message);
    }
  });
