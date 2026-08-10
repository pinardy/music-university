import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { warmOfflineCache } from './warmOffline'

const container = document.getElementById('root')!

const tree = (
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Routes are prerendered to real HTML files, so in production the container
// already holds markup. Hydrating keeps it on screen while the lesson chunk
// loads, where createRoot would blank it first.
//
// Only hydrate when the markup was rendered for the page actually being
// shown. Offline the service worker answers every navigation with the
// precached index.html, and hydrating the home page against a lesson URL
// would just be a mismatch React has to throw away.
const prerenderedFor = container.dataset.prerendered
const matches =
  prerenderedFor !== undefined &&
  prerenderedFor.replace(/\/$/, '') === window.location.pathname.replace(/\/$/, '')

if (matches) hydrateRoot(container, tree)
else createRoot(container).render(tree)

// After the app is up and the browser is idle, quietly fill the offline cache.
window.addEventListener('load', warmOfflineCache)
