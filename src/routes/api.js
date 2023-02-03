const express = require('express');
const router = express.Router();

const {insertObject} = require('../controllers/minio-Controller');

//isAuthenticUser authenticate the user and authorizeRoles validates user's right to access a resource
router.post('/new', insertObject);
  
module.exports = router
