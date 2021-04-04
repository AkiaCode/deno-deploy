async function handleRequest(request) {
    return Response.redirect(Deno.env.get("invite"), 301);
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request))
});