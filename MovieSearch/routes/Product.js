const express = require('express')
const router = express.Router()

const ProductController = require('../Controller/MovieSearchController')

router.get('/get', ProductController.get);