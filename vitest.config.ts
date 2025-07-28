import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // Configuração para testes de navegador
    browser: {
      enabled: true,
      name: 'chromium', // ou 'firefox', 'webkit'
      provider: 'playwright', // ou 'webdriverio'
    },
    // Inclui apenas arquivos.spec.tsx nos testes de navegador
    include: ['**/*.spec.tsx'],
    // Exclui testes de node para esta execução
    exclude: ['**/*.test.ts'],
  },
});