import inquirer from "inquirer";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import Mustache from "mustache";

const componentsFolder = resolve("src/components");
const pagesFolder = resolve("src/pages");

inquirer
  .prompt([
    {
      type: "confirm",
      name: "page",
      message: "Is this a page component?",
      default: false,
    },
    {
      type: "input",
      name: "name",
      message: "What's the component name?",
      validate(value, answers) {
        const pass = value.match(/^[A-Z][A-Za-z0-9]*$/g);
        if (!pass)
          return "Please enter a valid component name. It must start with a capital letter.";
        const folder = answers.page ? pagesFolder : componentsFolder;
        const filePath = `${folder}/${value}/${value}.tsx`;
        if (existsSync(filePath))
          return "Component already exists! It won't be overwritten!";
        return true;
      },
    },
    {
      type: "confirm",
      name: "props",
      message: "Does it have props?",
      default: true,
      when: (answers) => !answers.page,
    },
  ])
  .then((answers) => {
    const componentTemplate = readFileSync(
      resolve("templates/component/component.mustache"),
      "utf-8"
    );
    const storiesTemplate = readFileSync(
      resolve("templates/component/stories.mustache"),
      "utf-8"
    );
    const templateVars = { curly: "{", ...answers };
    const componentOutput = Mustache.render(componentTemplate, templateVars);
    const storiesOutput = Mustache.render(storiesTemplate, templateVars);
    const { name, page } = answers;
    const folder = page ? pagesFolder : componentsFolder;
    mkdirSync(`${folder}/${name}`);
    const componentFile = `${folder}/${name}/${name}.tsx`;
    writeFileSync(componentFile, componentOutput);
    const storiesFile = `${folder}/${name}/${name}.stories.tsx`;
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
