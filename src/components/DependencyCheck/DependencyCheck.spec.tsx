// src/components/DependencyCheck.spec.tsx
import React from 'react';
import { render } from 'vitest-browser-react';
import { test, expect } from 'vitest';
import { DependencyCheck } from './';

test('deve resolver a condição de exportação "browser" corretamente', () => {
  const { container } = render(<DependencyCheck />);

  // A renderização bem-sucedida desta mensagem prova que o import de 'msw/browser'
  // funcionou como esperado no ambiente de navegador.
  expect(container.textContent).toContain('"browser" export resolved correctly!');
});