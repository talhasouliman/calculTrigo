const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/start.html",
    "/css/guide.css",
    "/css/main.css",
    "/css/references.css",
    "/css/start.css",
    "/css/topnav.css",
    "/js/topnav.js",
    "/js/app.js",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
    "/images/18.jpg",
    "/images/19.jpg",
    "/images/20.jpg",
    "/images/21.jpg",
    "/images/22.jpg",
  
    "/images/AREFFM.jpg",
    "/images/bg.jpg",
    "/images/CMCFFM.jpg",
    "/images/CRSIFM.jpg",
    "/images/.jpg",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})