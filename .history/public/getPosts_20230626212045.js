const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");
const postList = [];

const getPosts = async () => {
  await fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.log("Failed to list contents of directory: ", err);
    }
  });
};

export default getPosts;
