// sw.js
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "Élevage Dofus";
    const options = {
        body: data.body || "Il est l'heure de nourrir un familier !",
        icon: "../favicon.png", // Chemin vers ton icône
        badge: "../favicon.png",
        vibrate: [200, 100, 200]
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});