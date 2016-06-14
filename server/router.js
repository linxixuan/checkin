var router = require('koa-router')();

var controller = require('./controller');

router.get('/test', controller.test);
router.get('*', controller.index);

module.exports = router;
