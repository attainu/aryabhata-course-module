const cacheName = "myReactApp";

const cacheFile = [
   '/',
   '/index.html'
]
self.addEventListener("install", event => {
    const myReactAppCache = await caches.open(cacheName);
    await  myReactAppCache.addAll()
    console.log("Service worker succesfully installed")
}) 

self.addEventListener("activate", event => {
    console.log("Service worker succesfully installed")
}) 

self.addEventListener("fetch", event => {
    console.log("Service worker succesfully installed")
}) 