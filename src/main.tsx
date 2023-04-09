import './app/styles/tailwind.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Application } from './app';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Application />
    </StrictMode>
  );
}
