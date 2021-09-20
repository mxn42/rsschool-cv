import app from './app.js';
import rsscore from './rsscore.js';

// Vanilla JS framework
document.addEventListener('DOMContentLoaded', async () => {
  await app.render();
  await rsscore();
});
