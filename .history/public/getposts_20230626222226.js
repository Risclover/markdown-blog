const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");
const postList = [];

const getPosts = async () => {
  await fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: ", err);
    }
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };

        parseMetadata = ({lines, metadataIndices}) 

        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);

        const metadata = parseMetadata({lines, metadataIndices});
      });
    });
  });
};

getPosts();
