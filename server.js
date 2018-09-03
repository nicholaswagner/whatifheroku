var fs = require("fs");
const http = require("http");
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.statusCode = 200;
  response.end(`{"message": "greetings!"}`);
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});

var fs = require("fs");

if (fs.existsSync("./db.json")) {
  console.log("\n\nFOUND THE DB FILE!\n");
  var contents = fs.readFileSync("./db.json", "utf8");
  console.log(`\n db.json:\n ${contents}`);
} else {
  console.log("\n\nDB FILE DOES NOT EXIST\n\n");
  let content = JSON.stringify({ foo: "bar" });

  fs.writeFile("./db.json", content, "utf8", function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}
