const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/search") {

        const keyword = parsedUrl.query.keyword;

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end("<h1>Search Page</h1><p>Keyword: " + keyword + "</p>");

    } else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(3001, () => {
    console.log("Server running on port 3001");
});