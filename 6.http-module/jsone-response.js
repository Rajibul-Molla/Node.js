const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    const user = {
        name: "Rajibul",
        role: "Developer"
    };

    res.end(JSON.stringify(user));

});

server.listen(3000);