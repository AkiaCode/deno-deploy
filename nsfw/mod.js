async function handleRequest(request) {

    const response = await fetch("https://h_api.pmh.codes/gallery/1806299", {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        },
      })

    const { files }  = await response.json();
    const test = await files.map(x => "<img src=\"" + x.url.replace("http://127.0.0.1:8270/", "https://h_api.pmh.codes/") + "\" style=\"display: block; margin: 0 auto; width: 450px; height: 450px;\"/>");

    return new Response(`<body>${test.join("\n")}<br><br>${files.map(x => "<a herf=\"" + x.url.replace("http://127.0.0.1:8270/", "https://h_api.pmh.codes/") + "\">" + x.name + "</a>").join("\n") }</body>
    `, {
        headers: {},
        status: 200
    })
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request))
});
