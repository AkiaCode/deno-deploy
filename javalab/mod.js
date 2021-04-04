async function handleRequest(request) {
    return Response.redirect("https://discord.gg/D7cSQ25", 301);
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request))
});