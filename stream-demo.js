const fs = require("fs");

let content = "";

for (let i = 1; i <= 50; i++) {
    content += `This is line number ${i}\n`;
}

fs.writeFileSync("large-file.txt", content);

console.log("50-line file created.");

const readStream = fs.createReadStream("large-file.txt");

readStream.on("data", (chunk) => {
    console.log("Chunk received:", chunk.length, "bytes");
});

readStream.on("end", () => {
    console.log("Finished reading the file.");
});

readStream.on("error", (err) => {
    console.log("Error:", err.message);
});