// sw.js
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Cette fonction écoute les messages envoyés par ton index.html
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
        const delay = event.data.delay; // Temps d'attente en ms
        const petName = event.data.pet;
        const food = event.data.food;

        // On crée un délai pour afficher la notif
        setTimeout(() => {
            self.registration.showNotification("Alerte Élevage 🍴", {
                body: `Il est l'heure de nourrir ton ${petName} avec : ${food}.`,
                icon: "favicon.png",
                badge: "favicon.png",
                vibrate: [200, 100, 200],
                tag: petName // Évite les doublons pour le même familier
            });
        }, delay);
    }
});
