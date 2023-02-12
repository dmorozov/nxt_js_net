module.exports = {
  description: 'Creates a new app component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/components/{{dashCase name}}.component/{{dashCase name}}.component.tsx',
      templateFile: 'templates/components.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{dashCase name}}.component/__tests__/index.spec.tsx',
      templateFile: 'templates/component-test.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{dashCase name}}.component/index.ts',
      templateFile: 'templates/component-index.ts.hbs',
    },
  ],
};
