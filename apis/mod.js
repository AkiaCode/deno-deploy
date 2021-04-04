async function handleRequest(request) {
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request))
});