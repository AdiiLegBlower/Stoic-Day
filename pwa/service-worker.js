import {Workbox} from 'https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-window.prod.mjs';


workbox.routing.registerRoute(
  ({url}) => url.origin === 'https://stoic-quote-api.netlify.app',
  new workbox.strategies.NetworkFirst({
    cacheName: 'quotes-cache'
  })
);


workbox.routing.registerRoute(
  ({url}) => url.origin === 'https://en.wikipedia.org',
  new workbox.strategies.NetworkFirst({
    cacheName: 'wiki-api'
  })
);


workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache'
  })
);