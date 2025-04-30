const reactPlugin = require('eslint-plugin-react');
const prettierPlugin = require('eslint-plugin-prettier');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: require('@typescript-eslint/parser'),
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // NUEVAS REGLAS DE HOOKS
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];



/* 
  This configuration file is for ESLint, a tool for identifying and  fixing problems 
  in JavaScript code. It uses the ESLint plugin for React and Prettier 
  to enforce coding standards and formatting rules. 
  The configuration specifies that it applies to JavaScript 
  and TypeScript files, sets the ECMAScript version to 2021, 
  and uses the TypeScript parser. It also includes rules to disable the need 
  for React in scope and prop-types validation, while enforcing Prettier formatting rules.
  The settings section automatically detects the version of React being used. 
  This configuration is useful for maintaining code quality and consistency in React projects. 
*/

/*  
  Este archivo de configuración es para ESLint, una herramienta para identificar y 
  corregir problemas en código JavaScript. Utiliza el complemento ESLint para React y 
  Prettier para aplicar estándares de codificación y reglas de formato. 
  La configuración especifica que se aplica a archivos JavaScript y TypeScript, 
  establece la versión de ECMAScript a 2021 y utiliza el analizador de TypeScript. 
  También incluye reglas para deshabilitar la necesidad de React en la validación de alcance y 
  tipos de propiedades, a la vez que aplica las reglas de formato de Prettier.
  a sección de configuración detecta automáticamente la versión de React utilizada. 
  Esta configuración es útil para mantener la calidad y la consistencia del código en proyectos 
  de React.  

 */
