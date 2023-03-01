const csv = require("csvtojson");
const axiosClient = require("../../axios");

class FilesController {
  constructor() {}

  async getFiles() {
    const filesRes = await axiosClient({
      method: "get",
      url: "/secret/files",
    });
    return filesRes.data.files;
  }

  async getFilesList(req, res) {
    try {
      const files = await this.getFiles();

      res.status(200).send({ data: files, message: "Ok" });
    } catch (error) {
      console.log("[ERROR] - There was an error on route GET:/files/list");
      res.status(500).send({ data: [], message: error });
    }
  }

  async getFilesData(req, res) {
    try {
      const files = await this.getFiles();
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

      res.status(200).send({ data, message: "Ok" });
    } catch (error) {
      console.log("[ERROR] - There was an error on route GET:/files/data");
      res.status(500).send({ data: [], message: error });
    }
  }
}

module.exports = FilesController;
