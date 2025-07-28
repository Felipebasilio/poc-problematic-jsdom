module.exports = {
  // Define o ambiente de teste como jsdom.
  // Isso instrui o Jest a simular um DOM de navegador para todos os testes.
  testEnvironment: 'jsdom',

  // Arquivo de setup que roda antes de cada teste.
  // Usamos para importar os matchers do jest-dom.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '@testing-library/jest-dom/jest-globals'],

  // Transform configuration for TypeScript and JSX
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-jsx',
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
      }
    }],
  },

  // File extensions to process
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Test file patterns
  testMatch: ['**/__tests__/**/*.(ts|tsx|js)', '**/*.(test|spec).(ts|tsx|js)'],

  // Module name mapping for types
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Adicione isso se estiver usando TypeScript para que o Jest o entenda.
  // Você pode precisar de 'ts-jest' ou configurar o Babel.
  // Para um projeto Vite, a configuração pode ser mais complexa
  // para lidar com os imports, mas vamos focar nos erros do JSDOM.
};