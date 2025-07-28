import React from 'react';
import { render } from 'vitest-browser-react';
import { test, expect, vi } from 'vitest';
import { FetchCheck } from './';

test('deve usar a API fetch global sem erros', async () => {
  // Mock do fetch antes de renderizar o componente
  const mockFetch = vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({ id: 1, name: 'Vitest User' })
  });
  
  globalThis.fetch = mockFetch;

  const { container } = render(<FetchCheck />);

  // Aguarda a atualização assíncrona do estado após o fetch
  await vi.waitFor(() => {
    expect(container.textContent).toContain('User: Vitest User');
  });
});