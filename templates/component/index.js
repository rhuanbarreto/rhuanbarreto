import inquirer from "inquirer";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import Mustache from "mustache";

const componentsFolder = resolve("src/components");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What's the component name?",
      validate(value) {
        const pass = value.match(/^[A-Z][A-Za-z0-9]*$/g);
        if (!pass)
          return "Please enter a valid component name. It must start with a capital letter.";
        const filePath = `${componentsFolder}/${value}/${value}.tsx`;
        if (existsSync(filePath))
          return "Component already exists! It won't be overwritten!";
        return true;
      },
    },
  ])
  .then(({ name }) => {
    const componentTemplate = readFileSync(
      resolve("templates/component/component.mustache"),
      "utf-8"
    );
    const storiesTemplate = readFileSync(
      resolve("templates/component/stories.mustache"),
      "utf-8"
    );
    const componentOutput = Mustache.render(componentTemplate, { name });
    const storiesOutput = Mustache.render(storiesTemplate, { name });
    mkdirSync(`${componentsFolder}/${name}`);
    const componentFile = `${componentsFolder}/${name}/${name}.tsx`;
    writeFileSync(componentFile, componentOutput);
    const storiesFile = `${componentsFolder}/${name}/${name}.stories.tsx`;
    writeFileSync(storiesFile, storiesOutput);
    console.log(`Component ${name} created successfully`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Please run this command in interactive mode!");
    } else {
      console.error(error.message);
    }
  });
