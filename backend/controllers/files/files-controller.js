const axiosClient = require('../../axios');

class FilesController {
  constructor() {}

  async getFilesData(req, res) {
    try {
      const filesRes = await axiosClient({
        method: 'get',
        url: '/secret/files'
      });
      const files = filesRes.data.files;

      for (const file of files) {
        // TODO: Fetch for each file and format it
      }

      res.status(200).send({ data: [], message: "Ok" });
    } catch (error) {
      console.log("[ERROR] - There was an error on route GET:/files/data");
      res.status(500).send({ data: [], message: error });
    }
  }
}

module.exports = FilesController;
