class FilesController {
  constructor() {}

  async getFilesData(req, res) {
    try {
      res.status(200).send({ data: [], message: "Ok" });
    } catch (error) {
      console.log("[ERROR] - There was an error on route GET:/files/data");
      res.status(500).send({ data: [], message: error });
    }
  }
}

module.exports = FilesController;
