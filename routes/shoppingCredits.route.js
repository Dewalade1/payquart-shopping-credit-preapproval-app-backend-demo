const shoppingCreditsController = require('../controllers/shoppingCredits.controller');

const express = require('express')

const router = express.Router();

router.post('/apply', shoppingCreditsController.apply);