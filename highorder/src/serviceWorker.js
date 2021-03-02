const cachename = "calc-cache";
const cachefiles = [
    '/',
    '/index.html',
    '/style.css',
    '/manifest.json',
    '/index.js',
    'favicon.png'
]
self.addEventListener("install", async event => {
    const cacheRequest = async () => {
        const calcCache = await caches.open(cachename);
        await calcCache.addAll(cachefiles);
        console.log("files cached successfully")
    }
    event.waitUntil(cacheRequest())
})
self.addEventListener("activate", event => {
    console.log("Service Worker activated")
})
self.addEventListener("fetch", event => {
    const matchCaches = async () => {
        const response = await caches.match(event.request.url);
        if (response === undefined) {
            return fetch(event.request.url)
        }
        return response;
        //return response;
    }
    event.respondWith(matchCaches())
    console.log("Started to fetch")
})
