const router = require('express').Router();

const apiRoutes = require('./apis');
const homeRoutes = require('./home-routes.js');
// const dashRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/dashboard', dashRoutes)





module.exports = router;