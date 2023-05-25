const express = require('express');
const multimediaRouter = express.Router();

const { getMultimedia } = require('../controller/multimediaController');


multimediaRouter.get('/multimedia/:id', getMultimedia);


module.exports = multimediaRouter;
