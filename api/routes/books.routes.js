const {Router} = require('express')
const router = Router();
const controllers = require('../controllers')

router.post('/book', controllers.bookController.postBook)

router.get('/book/:id', controllers.bookController.getBook)

router.get('/all', controllers.bookController.getAll)

router.get('/book/update/:id', controllers.bookController.updateBook)


module.exports = router;