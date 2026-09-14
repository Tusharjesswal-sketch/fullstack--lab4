const http = require("http");

const students = [
    {
        id: 1,
        name: "Tushar",
        course: "BCA"
    },
    {
        id: 2,
        name: "Rahul",
        course: "B.Tech"
    },
    {
        id: 3,
        name: "Priya",
        course: "BBA"
    }
];

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end("<h1>Welcome to Student Server</h1>");
    }

    else if (req.method === "GET" && req.url === "/students") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(students));
    }

    else if (
        req.method === "GET" &&
        req.url.startsWith("/students/")
    ) {
        const id = parseInt(req.url.split("/")[2]);

        const student = students.find(
            (student) => student.id === id
        );

        if (student) {
            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(student));
        } else {
            res.writeHead(404, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                error: "Student not found"
            }));
        }
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});