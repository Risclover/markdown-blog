const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");
const postList = [];

const getPosts = asyc () => {
    await fs.readdir(dirPath, (err, files) => {
        if(err) {
            console.log("Error, stupid:", err)
        }
    })
}
