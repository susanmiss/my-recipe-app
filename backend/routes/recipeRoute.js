const express = require('express');
const router = express.Router();
const {create, list, single, update, remove} = require('../controllers/recipeController')


router.get('/list', list)
router.get('/:slug', single)
router.post('/create', create)
router.put('/:slug', update)
router.delete('/:slug', remove)


module.exports = router