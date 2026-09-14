const fs = require("fs");

fs.writeFile("student.txt", "Name: Tushar\nRoll Number: 101", (err) => {
    if (err) throw err;

    console.log("File created and data written.");

    fs.appendFile("student.txt", "\nCourse: Full Stack Web Development", (err) => {
        if (err) throw err;

        console.log("Course appended.");

        fs.readFile("student.txt", "utf8", (err, data) => {
            if (err) throw err;

            console.log("\nFile Content:");
            console.log(data);

            fs.rename("student.txt", "profile.txt", (err) => {
                if (err) throw err;

                console.log("File renamed to profile.txt");
            });
        });
    });
});