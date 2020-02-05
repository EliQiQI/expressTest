var express = require('express');
var router = express.Router();
var listController=require('../controller/listController.js');

/* GET home page. */
router.get('/', listController.mypage);
router.get('/mypage',listController.returnData);
router.post('/delete',listController.deleteData);
router.post('/add',listController.addData);
router.post('/edit',listController.editData);

module.exports = router;