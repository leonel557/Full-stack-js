const router = require('express').Router();

// Controller import
const FilesController = require('../../controllers/files');
const filesController = new FilesController();

const middleware = (req, res, next) => {
  res.setHeader("content-type", "application/json");
  next();
}

router.get('/files/list', middleware, filesController.getFilesList.bind(filesController));

router.get('/files/data', middleware, filesController.getFilesData.bind(filesController));

module.exports = router;