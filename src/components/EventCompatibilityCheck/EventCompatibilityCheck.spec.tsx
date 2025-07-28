import React from 'react';
import { render } from 'vitest-browser-react';
import { test, expect } from 'vitest';
import { EventCompatibilityCheck } from './index';

test('deve despachar e receber eventos nativos sem TypeError', () => {
  const { container } = render(<EventCompatibilityCheck />);

  // A asserção prova que o useEffect executou sem erros e atualizou o estado.
  expect(container.textContent).toContain('Custom event received successfully!');
});