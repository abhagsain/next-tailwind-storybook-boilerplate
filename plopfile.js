module.exports = function (plop) {
  // controller generator
  plop.setGenerator("component", {
    description: "React Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component Name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/index.js",
        templateFile: "plop-templates/component/index.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.js",
        templateFile: "plop-templates/component/Component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.stories.js",
        templateFile: "plop-templates/component/Component.stories.hbs",
      },
    ],
  });
};
