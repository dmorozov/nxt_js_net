module.exports = {
  description: 'Create a new page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the route of the page?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/pages/{{camelCase name}}.tsx',
      templateFile: 'templates/page.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/__tests__/{{camelCase name}}.spec.tsx',
      templateFile: 'templates/page-test.tsx.hbs',
    },
  ],
};
