const express = require('express');
const leaveController = require('../controllers/leaveController');
const authController = require('../controllers/authController');

const router = express.Router(); // create a router

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('Product Manager', 'Junior Software Engineer'),
    leaveController.getAllLeaves
  )
  .post(leaveController.createLeave);
// Create a route for the root path and use the getAllLeaves and createLeave functions from leaveController

router.route('/:id').get(leaveController.getLeave);

module.exports = router; // Export the router
