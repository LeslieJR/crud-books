const {Router} = require('express')
const router = Router();
const controllers = require('../controllers')

router.post('/author', controllers.authorController.postAuthor)

router.get('/author/:id',  controllers.authorController.getAuthor)

router.get('/all',  controllers.authorController.getAll)


module.exports = router;