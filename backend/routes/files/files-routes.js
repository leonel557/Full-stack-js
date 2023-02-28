const router = require('express').Router();

// Controller import
const FilesController = require('../../controllers/files');
const filesController = new FilesController();

router.get('/files/data', filesController.getFilesData.bind(filesController));

module.exports = router;