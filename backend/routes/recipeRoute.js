const express = require('express');
const router = express.Router();


router.get('/all', function(req, res, next) {
    // db.getAll()
    // .then((houses) => {
    //      res.status(200).json(houses);
    // }).catch((error) => {
    //     next(error);
    // })
    res.send('route test all recepi')
 })


module.exports = router