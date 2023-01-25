const router = require('express').Router();
const userRoutes = require('./user-routes');
const dashRoutes = require('./dashboard-routes');
const postRoutes = require('./post-routes')

router.use('/users', userRoutes);
router.use('/dashboard', dashRoutes);
router.use('/dashboard', postRoutes);


module.exports = router;