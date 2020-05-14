const express = require('express');
const router = express.Router();
const {create, list, single, update, remove} = require('../controllers/recipeController')


router.get('/list', list)
router.get('/recipe/:slug', single)
router.post('/create', create)
router.put('/recipe/:slug', update)
router.delete('/recipe/:slug', remove)


module.exports = router