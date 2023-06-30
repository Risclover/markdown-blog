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
        // Get the start and end lines of the markdown file's front matter
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };

        // Put markdown file front matter into object
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );

            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };

        // Put markdown file content into variable
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };

        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        post = {
          id: i + 1,
          title: metadata.title ? metadata.title : "No title given",
          subtitle: metadata.subtitle ? metadata.subtitle : "No subtitle given",
          publish_date: metadata.publish_date
            ? metadata.publish_date
            : "No publish date given",
          description: metadata.description
            ? metadata.description
            : "No description given",
          content: content ? content : "No content given",
        };

        postList.push(post);
        console.log(post);
      });
    });
  });
};

getPosts();
