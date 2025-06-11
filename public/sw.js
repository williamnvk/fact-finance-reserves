const CACHE_NAME = 'fact-finance-cache-v1';
const IMAGE_CACHE_NAME = 'fact-finance-image-cache-v1';
const STATIC_CACHE_NAME = 'fact-finance-static-v1';

const CACHED_URLS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/apple-touch-icon.png', 
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/assets/solana-icon.webp',
  '/assets/outlier-ventures.webp',
  '/assets/khiza.webp',
  '/assets/liqi.webp',
  '/assets/firmeza-token.avif',
  '/assets/solana-horizontal.webp',
  '/assets/morgan-creek.webp',
];

// Precache static assets during installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      return cache.addAll(CACHED_URLS);
    }),
  );
  // Activate worker immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (![CACHE_NAME, IMAGE_CACHE_NAME, STATIC_CACHE_NAME].includes(cacheName)) {
              return caches.delete(cacheName);
            }
          }),
        );
      }),
      // Take control of all clients immediately
      clients.claim()
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Handle offline fallback
  const handleFetch = async () => {
    try {
      const response = await fetch(event.request);
      if (response.ok) return response;
    } catch (error) {
      console.log('Fetch failed; returning offline fallback', error);
    }

    // Return cached response as fallback
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;

    // If no cached response, return a basic offline page
    if (event.request.mode === 'navigate') {
      return caches.match('/offline.html');
    }

    return new Response('Offline content not available');
  };

  // Special handling for images
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          const fetchPromise = fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse.ok) {
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch((error) => {
              console.log('Image fetch failed:', error);
              return response;
            });
          return response || fetchPromise;
        });
      }),
    );
    return;
  }

  // Handle all other requests
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse.ok) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch((error) => {
            console.log('Fetch failed:', error);
            return response;
          });
        return response || fetchPromise;
      });
    }),
  );
});
