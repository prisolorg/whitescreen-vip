import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

// Prerendered pages already contain the full markup, so hydrate instead of re-rendering from scratch.
if (container.hasAttribute('data-prerendered')) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
