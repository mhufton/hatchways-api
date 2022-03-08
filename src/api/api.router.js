const router = require('express').Router();
const controller = require('./api.controller');

router
  .route('/ping')
  .get(controller.ping)

router
  .route('/posts')
  .get(controller.getPostsByTags)

module.exports = router;