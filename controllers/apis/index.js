const router = require('express').Router();
const userRoutes = require('./user-routes');
const dashRoutes = require('../dashboard-routes');

router.use('/users', userRoutes);
router.use('/dashboard', dashRoutes);


module.exports = router;