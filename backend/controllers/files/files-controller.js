const csv = require("csvtojson");
const axiosClient = require("../../axios");

class FilesController {
  constructor() {}

  async getFilesData(req, res) {
    try {
      const filesRes = await axiosClient({
        method: "get",
        url: "/secret/files",
      });
      const files = filesRes.data.files;
      const data = [];

      for (const file of files) {
        try {
          const fileRes = await axiosClient({
            method: "get",
            url: `/secret/file/${file}`,
          });

          const fileData = {
            file: file,
            lines: [],
          };
          await csv({
            delimiter: ",",
            ignoreEmpty: true,
            noheader: false,
            headers: ["file", "lines.text", "lines.number", "lines.hex"],
            colParser: {
              "lines.number": "number",
            },
          })
            .fromString(fileRes.data.toString())
            .then((objToJson) => {
              if (!objToJson.length) {
                data.push(fileData);
                return;
              }
              fileData.lines = objToJson.map((item) => {
                return {
                  ...item.lines,
                };
              });
              data.push(fileData);
            })
            .catch((e) => {});
        } catch (err) {
          console.log("[ERROR] - File processing error: " + file);
        }
      }
      res.setHeader("content-type", "application/json");
      res.status(200).send({ data, message: "Ok" });
    } catch (error) {
      console.log("[ERROR] - There was an error on route GET:/files/data");
      res.status(500).send({ data: [], message: error });
    }
  }
}

module.exports = FilesController;
