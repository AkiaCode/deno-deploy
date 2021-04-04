async function handleRequest(request) {

    return new Response(`
        <h1>Welcome to Open apis</h1>
        <h3><a href="https://github.com/AkiaCode/deno-deploy/issues/new">If you want to add another api, please create an issue</a></h3>
    `, {
        headers: {},
        status: 200
    })
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request))
});