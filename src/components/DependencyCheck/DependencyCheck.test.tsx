// src/components/DependencyCheck.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { DependencyCheck } from './index';

describe('Validação de Resolução de Dependências no JSDOM', () => {
  it('deve falhar ao tentar importar um módulo específico do navegador', () => {
    render(<DependencyCheck />);
    // A falha ocorrerá no momento do import, antes da renderização.
    (expect(screen.getByText('"browser" export resolved correctly!')) as any).toBeInTheDocument();
  });
});